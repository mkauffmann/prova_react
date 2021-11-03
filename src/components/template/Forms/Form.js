import React from "react";

function Form(props){
    return (
        <form action={props.action} method={props.method}>
            {props.children}
        </form>
    )
}

export default Form