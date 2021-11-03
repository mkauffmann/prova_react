import React from "react";

function FormCheckbox(props) {
  return (
    <div className="form-check check-remember check-me-out">
      <input
        type="checkbox"
        className="form-check-input checkbox"
        id={props.id}
      />
      <label className="form-check-label checkmark" for={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default FormCheckbox;
