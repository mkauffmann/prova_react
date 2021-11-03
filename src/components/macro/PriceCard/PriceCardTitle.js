import React from "react";

function PriceCardTitle(props) {
  return (
    <h1 className="card-title pricing-card-title my-price-title">
      ${props.value}
      <small className="text-dull">/{props.time}</small>
    </h1>
  );
}

export default PriceCardTitle