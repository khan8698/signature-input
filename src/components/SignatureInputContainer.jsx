import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import SignatureArea from "./SignaturePad";
import SignatureTextInput from "./TextInputHandler";
import FileSelector from "./FileSelector";

import "react-tabs/style/react-tabs.css";

function SignatureInputArea() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="signContainer">
      <Tabs style={{ height: '100%'}} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList style={{ height: 'max-content'}}>
          <Tab>Draw</Tab>
          <Tab>Image</Tab>
          <Tab>Type</Tab>
        </TabList>

        <TabPanel style={{ height: '80%'}}>
          <SignatureArea />
        </TabPanel>
        <TabPanel>
          <FileSelector />
        </TabPanel>
        <TabPanel>
          <SignatureTextInput />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default SignatureInputArea;
