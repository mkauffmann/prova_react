import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faCloudDownloadAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";


function StatisticsCard(props) {

    const renderIcon = () => {  

        switch(props.icon){
            case 'user':
                return <FontAwesomeIcon icon={faUser} className="lnr"/>
            case 'eye': 
                return <FontAwesomeIcon icon={faEye} className="lnr"/>
            case 'cloud':
                return <FontAwesomeIcon icon={faCloudDownloadAlt} className="lnr"/>
            case 'cart':
                return <FontAwesomeIcon icon={faCartPlus} className="lnr"/>
            default:
                return <FontAwesomeIcon icon={faUser} className="lnr"/>
        }
        

    }

  return (
    <div className="col-sm-6 pr-sm-2 statistics-grid">
      <div className={"card card_border border-primary-top p-4"}>
        {renderIcon()}
        <h3 className={"text-" + props.color + " number"}>{props.number}</h3>
        <p className="stat-text">{props.text}</p>
      </div>
    </div>
  );
}

export default StatisticsCard;
