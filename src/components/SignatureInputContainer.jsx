import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import SignatureArea from "./SignaturePad";
import SignatureTextInput from "./TextInputHandler";
import FileSelector from "./FileSelector";

import "react-tabs/style/react-tabs.css";

function SignatureInputArea({
  tabIndex,
  setTabIndex,
  setSignaturePadRef,
  setDroppedFile,
  droppedFile,
  availableFonts,
  signatureText,
  setSignatureText,
  signatureFont,
  setSignatureFont,
}) {
  return (
    <div className="signContainer">
      <Tabs
        style={{ height: "100%" }}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Draw</Tab>
          <Tab>Image</Tab>
          <Tab>Type</Tab>
        </TabList>

        <TabPanel style={{ height: "100%" }} forceRender={true}>
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
  );
}

export default SignatureInputArea;
