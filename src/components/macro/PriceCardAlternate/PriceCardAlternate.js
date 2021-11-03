import React from "react";
import PriceCardAlternateButton from "./PriceCardAlternateButton";
import PriceCardAlternateList from "./PriceCardAlternateList";

function PriceCardAlternate(props) {
  return (
    <div className="card text-center card__hover">
      <div className="card-header">
        <h3 className="display-4">
          <span className="currency">$</span>{props.value}
          <span className="period">/{props.time}</span>
        </h3>
      </div>
      <div className="card-block">
        <h4 className="card-title">{props.title}</h4>
        <PriceCardAlternateList items={props.items}/>
        <PriceCardAlternateButton cta={props.cta}/>
      </div>
    </div>
  );
}

export default PriceCardAlternate;
