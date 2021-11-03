import React from "react";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormHelperText from './FormHelperText'

function FormGroup(props) {
    const classes = props.classes || ""
  return (
    <div className={"form-group " + classes}>
      <FormLabel id={props.id} label={props.label} />
      <FormInput
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
      <FormHelperText id={props.id} textHelp={props.textHelp}/>
    </div>
  );
}

export default FormGroup;
