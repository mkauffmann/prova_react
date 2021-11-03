import React from "react";

function PriceCardAlternateList(props) {

    const items = props.items
    const renderUl = () => {    
       return items.map((item, index) => {
            return <li key={index} className="list-group-item">{item}</li>
        })
    }

  return (
        <ul className="list-group">
          {renderUl()}
        </ul>
  );
}

export default PriceCardAlternateList;
