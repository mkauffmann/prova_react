import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SmallContentCard2(props) {
  return (
    <>
      <span className="fa icon-fea" aria-hidden="true"><FontAwesomeIcon icon={props.icon}/></span>
      <a href="#url">{props.title}</a>
      <p>{props.text}</p>
    </>
  );
}

export default SmallContentCard2;
