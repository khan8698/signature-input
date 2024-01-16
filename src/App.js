import React from "react";
import Modal from "react-modal";
import SignatureInputArea from "./components/SignatureInputContainer";
import "./App.css";

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

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App" id="App">
      {/* <canvas id="destination" className="canvas" onClick={openModal}>Click to Open Modal</canvas> */}
      {/* <img
          src={imageURL}
          alt="my signature"
          onClick={openModal}
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "150px"
          }}
        /> */}
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
        <SignatureInputArea />
        <div className="modal-footer">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={closeModal}>Submit</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
