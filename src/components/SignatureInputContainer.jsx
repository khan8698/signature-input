import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import SignatureArea from "./SignaturePad";
import SignatureTextInput from "./TextInputHandler";
import FileSelector from "./FileSelector";

import "react-tabs/style/react-tabs.css";

const availableFonts = [
  {
    family: "Arial",
  },
  {
    family: "Georgia",
  },
  {
    family: "Courier New",
  },
  {
    family: "Brush Script MT, cursive",
  },
];

function SignatureInputArea({ setIsOpen, canvasRef, onSubmit }) {
  const [tabIndex, setTabIndex] = useState(0);

  const [signaturePadRef, setSignaturePadRef] = useState();
  const [droppedFile, setDroppedFile] = useState();
  const [signatureText, setSignatureText] = useState("");
  const [signatureFont, setSignatureFont] = useState(availableFonts[0].family);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleSubmit = () => {
    clearCanvas();

    const image = new Image();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    switch (tabIndex) {
      case 0: {
        const dataURL = signaturePadRef.current.toDataURL();
        var binaryData = [];
        binaryData.push(dataURL);
        window.URL.createObjectURL(new Blob(binaryData, { type: "image/png" }));
        image.onload = function () {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
        image.src = binaryData[0];
        break;
      }
      case 1: {
        const file = droppedFile.map((item) => item.preview);
        image.onload = function () {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
        image.src = file;
        break;
      }
      default: {
        const textProperties = { signatureText, signatureFont };
        const text = textProperties.signatureText;
        const fontFamily = textProperties.signatureFont;
        ctx.font = `90px ${fontFamily}`;
        ctx.fillText(text, 0, 80, canvas.width);
        break;
      }
    }
    setIsOpen(false);
    onSubmit(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
  };

  return (
    <>
      <div className="signContainer">
        <Tabs
          className="h-full"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>Draw</Tab>
            <Tab>Image</Tab>
            <Tab>Type</Tab>
          </TabList>

          <TabPanel forceRender={true}>
            <SignatureArea setSignaturePadRef={setSignaturePadRef} />
          </TabPanel>
          <TabPanel forceRender={true}>
            <FileSelector
              setDroppedFile={setDroppedFile}
              droppedFile={droppedFile}
            />
          </TabPanel>
          <TabPanel forceRender={true}>
            <SignatureTextInput
              availableFonts={availableFonts}
              signatureText={signatureText}
              setSignatureText={setSignatureText}
              signatureFont={signatureFont}
              setSignatureFont={setSignatureFont}
            />
          </TabPanel>
        </Tabs>
      </div>
      <div className="modal-footer">
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default SignatureInputArea;
