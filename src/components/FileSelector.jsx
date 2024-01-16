import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileSelector = ({ onFileDrop }) => {
  const [droppedFile, setDroppedFile] = useState();

  const clearFileSelection = () => {
    setDroppedFile(undefined);
  };

  const onDrop = (acceptedFiles) => {
    setDroppedFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    onFileDrop(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", "jpg", "jpeg"],
    },
  });

  return (
    <section className="file-uploader-container">
      {!droppedFile ? (
        <>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>
              Drag and drop png, jpg, jpeg file here, or click to select file
            </p>
          </div>
        </>
      ) : (
        <>
          {droppedFile.map((file) => (
            <div className="image-container">
              <img
                src={file.preview}
                alt="Selected Files"
                className="selected-image"
              />
            </div>
          ))}
          <div style={{ textAlign: "center" }} onClick={clearFileSelection}>
            <button>Clear</button>
          </div>
        </>
      )}
    </section>
  );
};

export default FileSelector;