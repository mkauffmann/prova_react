import React from "react";

function Heading(props) {
  return (
    <div class="cards__heading">
      <h3>
        {props.heading}<span> {props.subHeading}</span>
      </h3>
    </div>
  );
}

export default Heading;
