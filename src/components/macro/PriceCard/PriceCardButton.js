import React from "react";

function PriceCardButton(props) {
  return (
    <div className="mt-4">
      <a
        href="signup.html"
        className={"btn btn-lg btn-style " + (props.popular ? "btn-primary" : "btn-outline-primary border-btn")}
      >
        {props.cta}
      </a>
    </div>
  );
}

export default PriceCardButton;
