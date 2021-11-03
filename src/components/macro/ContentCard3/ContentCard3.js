import React from "react";
import {
  faLaptop,
  faPaintBrush,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import SmallContentCard2 from "../SmallContentCard2/SmallContentCard2";

function ContentCard3(props) {
  const smCardsTitles = props.smCardsTitles;
  const smCardsTexts = props.smCardsTexts;
  const smCardsIcons = props.smCardsIcons;

  const renderSmCards = () => {
    return smCardsTitles.map((title, index) => {
      return (
        <div className="col-md-6 column mt-4">
          <SmallContentCard2
            title={title}
            text={smCardsTexts[index]}
            icon={smCardsIcons[index]}
          />
        </div>
      );
    });
  };
  return (
    <div className="row cwp23-content">
      <div className="col-md-6 cwp23-text">
        <div className="row cwp23-text-cols">
          {renderSmCards()}
        </div>
      </div>
      <div className="col-md-6 mt-md-0 mt-5 cwp23-img">
        <img src={props.img} className="img-fluid rounded" alt="" />
      </div>
    </div>
  );
}

export default ContentCard3;
