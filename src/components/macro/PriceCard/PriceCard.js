import React from "react";

import PriceCardTitle from "./PriceCardTitle";
import PriceCardButton from "./PriceCardButton";
import PriceCardList from "./PriceCardList";

function PriceCard(props) {
    const classes = props.classes || ""

  return (
    <>
      <div className={"mb-4 price-card price-card1 p-lg-4 p-md-3 p-4 " + classes }>
        <div className="card-header p-0 card-heading">
          <h4 className="mb-4">{props.plan} {props.popular ? <span className="label label-popular">Popular</span> : ""} </h4> 
        </div>
        <div className="card-body p-0">
          <PriceCardTitle value={props.value} time={props.time}/>
          <p>{props.description}</p>
          <PriceCardList items={props.items}/>
          <PriceCardButton cta={props.cta} popular={props.popular ? true : false} />
        </div>
      </div>
    </>
  );
}

export default PriceCard;
