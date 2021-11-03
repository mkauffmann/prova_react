import React from "react";

function FormSelect(props) {
    const classes = props.classes || ""
    const options = props.options

    const renderOptions = () => {
        return options.map((option, index) => {
            return <option key={index}>{option}</option>
        })
    }

  return (
    <div className={"form-group " + classes}>
      <label for={props.id} className="input__label">
        {props.label}
      </label>
      <select id={props.id} className="form-control input-style">
        {renderOptions()}
      </select>
    </div>
  );
}

export default FormSelect;
