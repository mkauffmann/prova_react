import React from "react";

function FormInput(props){
    return (
        <input
        type={props.type}
        className="form-control input-style"
        id={props.id}
        placeholder={props.placeholder}
      />
    )
}

export default FormInput