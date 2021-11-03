import React from "react";

function FormHelperText(props){
    return (
        <small id={props.id + "Help"} className="form-text text-muted">
        {props.textHelp}
      </small>
    )
}

export default FormHelperText