//Work in progress

import React from "react";

const InputFile = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        name={name}
        className="form-control"
        type="file"
        accept="image/*"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputFile;
