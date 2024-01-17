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
        className="signature-input"
        style={{ fontFamily: signatureFont }}
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
              style={{ fontFamily: font.family }}
              key={font.family}
            >
              <input
                className="font-selector-radio"
                type="radio"
                name={font.family}
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
