import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import SignatureArea from "./SignaturePad";
import SignatureTextInput from "./TextInputHandler";
import FileSelector from "./FileSelector";

import "react-tabs/style/react-tabs.css";

function SignatureInputArea({ handleCanvas, tabIndex, setTabIndex }) {

  return (
    <div className="signContainer">
      <Tabs style={{ height: '100%'}} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Draw</Tab>
          <Tab>Image</Tab>
          <Tab>Type</Tab>
        </TabList>

        <TabPanel style={{height: "100%"}}>
          <SignatureArea handleCanvas={handleCanvas} />
        </TabPanel>
        <TabPanel>
          <FileSelector handleCanvas={handleCanvas} />
        </TabPanel>
        <TabPanel>
          <SignatureTextInput handleCanvas={handleCanvas} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default SignatureInputArea;
