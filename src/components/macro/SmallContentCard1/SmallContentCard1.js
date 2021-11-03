import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SmallContentCard1(props) {
    
  return (
    <>
      <span className="fa icon-fea" aria-hidden="true"><FontAwesomeIcon icon={props.icon}/></span>
      <a href="#">
        <h4>{props.title}</h4>
      </a>
      <p>
        {props.text}
      </p>

      <a href="#" className="actionbg">
        {props.link}
      </a>
    </>
  );
}

export default SmallContentCard1;
