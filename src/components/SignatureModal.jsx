import React from "react";
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

const SignatureModal = ({ onChange }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const canvasRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (imageData) => {
    if (onChange) {
      onChange(imageData);
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
          canvasRef={canvasRef}
          setIsOpen={setIsOpen}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
};

export default SignatureModal;
