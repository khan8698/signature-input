import React from "react";
import { useDropzone } from "react-dropzone";

const FileSelector = ({ setDroppedFile, droppedFile }) => {
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
  };

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    maxFiles: 1,
  });

  fileRejections.map(() => {
    return setDroppedFile(false);
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
            <div key={file.preview} className="image-container">
              <img
                src={file.preview}
                alt="Selected Files"
                className="selected-image"
              />
            </div>
          ))}
          <div className="text-center" onClick={clearFileSelection}>
            <button>Clear</button>
          </div>
        </>
      )}
    </section>
  );
};

export default FileSelector;
