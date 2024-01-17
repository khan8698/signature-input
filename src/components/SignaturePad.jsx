/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import SignaturePad from "react-signature-canvas";

function SignatureArea({ setSignaturePadRef }) {
  const signPadRef = useRef();

  useEffect(() => {
    setSignaturePadRef(signPadRef);
  }, [signPadRef]);

  return (
    <div style={{ height: "calc(100% - 80px)" }}>
      <div className="signature-area">
        <SignaturePad
          ref={signPadRef}
          canvasProps={{ className: "signPad", width: 770, height: 187 }}
        />
      </div>
    </div>
  );
}

export default SignatureArea;
