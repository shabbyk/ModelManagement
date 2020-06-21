//Work in progress

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const File = ({ name, label, error, ...rest }) => {
  const maxSize = 1048576;
  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    fileRejections: rejectedFiles,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    minSize: 0,
    maxSize,
  });

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const isFileTooLarge =
    rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  return (
    <div className="form-group text-center mt-5">
      <div {...getRootProps()}>
        <input
          {...getInputProps()}
          id={name}
          name={name}
          className="form-control"
          {...rest}
        />
        {!isDragActive && "Click here or drop a file to upload!"}
        {isDragActive && !isDragReject && "Drop it like it's hot!"}
        {isDragReject && "File type not accepted, sorry!"}
        {isFileTooLarge && (
          <div className="text-danger mt-2">File is too large.</div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default File;
