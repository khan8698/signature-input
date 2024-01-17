import React from "react";

function SignatureTextInput({
  signatureText,
  setSignatureText,
  signatureFont,
  setSignatureFont,
  availableFonts,
}) {
  const handleRadioButtonSelect = (e) => {
    setSignatureFont(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        style={{
          fontFamily: signatureFont,
          height: "50px",
          fontSize: "40px",
          marginTop: "20px",
          width: "50%",
          border: "none",
          borderBottom: "1px solid black",
        }}
        placeholder="Signature"
        value={signatureText}
        onChange={(e) => {
          setSignatureText(e.target.value);
        }}
      />
      <div className="font-input-container">
        {availableFonts.map((font) => {
          return (
            <label
              className="font-selector"
              style={{ fontFamily: font.family, fontSize: "32px" }}
              key={font.name}
            >
              <input
                style={{ height: "24px", width: "24px" }}
                type="radio"
                name={font.name}
                value={font.family}
                checked={signatureFont === font.family}
                onChange={handleRadioButtonSelect}
              />
              {signatureText === "" ? "Signature" : signatureText}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default SignatureTextInput;
