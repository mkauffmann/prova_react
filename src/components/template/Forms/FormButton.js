import React from "react";

function FormButton(props) {
  return (
    <button type={props.type} className="btn btn-primary btn-style mt-4">
      {props.label}
    </button>
  );
}

export default FormButton;
