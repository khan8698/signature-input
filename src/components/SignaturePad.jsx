import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

function SignatureArea() {
  const signPadRef = useRef();

  const clear = () => {
    signPadRef.current.clear();
  };
  const capture = () => {
    // capture related stuff done here.
    // this.setState({
    //   trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
    // });
    const sourceCanvas = document.getElementById('source');
    const destinationCanvas = document.getElementById('destination');
    const destCtx = destinationCanvas.getContext('2d');
    destCtx.drawImage(sourceCanvas, 0 ,0)

  };

  return (
    <div>
      <div className="signature-area">
        <SignaturePad
         id='source'
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
