import React from "react";

function FormLabel(props) {
  return (
    <label for={props.id} className="input__label">
      {props.label}
    </label>
  );
}

export default FormLabel;
