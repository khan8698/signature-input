import React, { useState } from "react";

const availableFonts = [
  {
    name: "Font 1",
    family: "Arial",
  },
  {
    name: "Font 2",
    family: "Georgia",
  },
  {
    name: "Font 3",
    family: "Courier New",
  },
  {
    name: "Font 4",
    family: "Brush Script MT",
  },
];

function SignatureTextInput() {
  const [signatureText, setSignatureText] = useState("");
  const [signatureFont, setSignatureFont] = useState(availableFonts[0].name);

  const handleRadioButtonSelect = (e) => {
    setSignatureFont(e.target.value);
    // setSignatureText(e.target.value);
    console.log(e.target.value);
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
                defaultChecked
              />
              {signatureText === "" ? "Signature" : signatureText }
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default SignatureTextInput;
