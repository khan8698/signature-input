import React, { useState } from "react";
import Modal from "react-modal";
import SignatureInputArea from "./SignatureInputContainer";
import { useRef } from "react";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "800px",
    height: "500px",
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

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

const SignatureModal = ({ onChange }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const [signaturePadRef, setSignaturePadRef] = useState();

  const [droppedFile, setDroppedFile] = useState();

  const [signatureText, setSignatureText] = useState("");
  const [signatureFont, setSignatureFont] = useState(availableFonts[0].family);

  const canvasRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

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

    setSignatureText("");
    setDroppedFile(undefined);
    setIsOpen(false);

    if (onChange) {
      onChange(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        className="canvas"
        onClick={openModal}
      ></canvas>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Sign Area"
      >
        <div className="modal-header">
          <div>Add Signature</div>
          <button onClick={() => setIsOpen(false)}>x</button>
        </div>
        <SignatureInputArea
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          setSignaturePadRef={setSignaturePadRef}
          setDroppedFile={setDroppedFile}
          droppedFile={droppedFile}
          availableFonts={availableFonts}
          signatureText={signatureText}
          setSignatureText={setSignatureText}
          signatureFont={signatureFont}
          setSignatureFont={setSignatureFont}
        />
        <div className="modal-footer">
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </Modal>
    </>
  );
};

export default SignatureModal;
