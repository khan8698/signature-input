import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

function SignatureArea({handleCanvas}) {
  const signPadRef = useRef();

  const clear = () => {
    signPadRef.current.clear();
  };
  const capture = () => {
    // capture related stuff done here.
    // this.setState({
    //   trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
    // });
    const dataURL = signPadRef.current.toDataURL();
    handleCanvas(dataURL)
  };

  return (
    <div>
      <div className="signature-area">
        <SignaturePad
          ref={signPadRef}
          canvasProps={{ className: "signPad", width: 770, height: 187 }}
        />
      </div>
      <div>
        <button onClick={clear}>Clear</button>
        <button onClick={capture}>Capture</button>
      </div>
    </div>
  );
}

export default SignatureArea;
