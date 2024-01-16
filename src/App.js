import React, { useState } from "react";
import Modal from "react-modal";
import SignatureInputArea from "./components/SignatureInputContainer";
import "./App.css";
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

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const canvasRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCanvas = (prop) => {
    const image = new Image();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (tabIndex === 0 || tabIndex === 1) {
      image.src = prop;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    } else if (tabIndex === 2) {
      const text = prop.signatureText;
      const fontFamily = prop.signatureFont;
      ctx.font = `30px ${fontFamily}`;
      ctx.fillText(text, 0, 80, canvas.width);
    }
  };

  return (
    <div className="App" id="App">
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        className="canvas"
        onClick={openModal}
      ></canvas>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sign Area"
      >
        <div className="modal-header">
          <div>Add Signature</div>
          <button onClick={closeModal}>x</button>
        </div>
        <SignatureInputArea
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          handleCanvas={handleCanvas}
        />
        <div className="modal-footer">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={closeModal}>Submit</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
