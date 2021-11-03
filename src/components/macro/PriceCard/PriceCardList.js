import React from "react";

function PriceCardList(props) {
    const items = props.items
    
    const renderUl = () => {
        return items.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    }

  return (
    <ul className="list-unstyled list-pricing mt-3 mb-4">
         {renderUl()}
    </ul>
  );
}

export default PriceCardList;
