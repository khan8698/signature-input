import React, { useEffect, useRef } from "react";
import SignaturePad from "react-signature-canvas";

function SignatureArea({ setSignaturePadRef }) {
  const signPadRef = useRef();

  useEffect(() => {
    setSignaturePadRef(signPadRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signPadRef]);

  return (
    <div className="signature-pad-container">
      <div className="signature-area">
        <SignaturePad
          ref={signPadRef}
          canvasProps={{ className: "signPad", width: 770, height: 310 }}
        />
      </div>
    </div>
  );
}

export default SignatureArea;
