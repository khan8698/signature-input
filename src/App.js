import React from "react";
import "./App.css";
import SignatureModal from "./components/SignatureModal";

function App() {
  const handleSignatureChange = (signature) => {
    console.log(signature);
  };
  return (
    <div className="App" id="App">
      <SignatureModal onChange={handleSignatureChange} />
    </div>
  );
}

export default App;
