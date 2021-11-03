import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faCloudDownloadAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";


function StatisticsCard(props) {

    const renderIcon = () => {  

        switch(props.icon){
            case 'user':
                return <i className="lnr lnr-users"><FontAwesomeIcon icon={faUser}/></i>
            case 'eye': 
                return <i className="lnr lnr-eye"><FontAwesomeIcon icon={faEye} /></i>
            case 'cloud':
                return <i className="lnr lnr-cloud-download"><FontAwesomeIcon icon={faCloudDownloadAlt}/></i>
            case 'cart':
                return <i className="lnr lnr-cart"><FontAwesomeIcon icon={faCartPlus}/></i>
            default:
                return <i className="lnr lnr-users"><FontAwesomeIcon icon={faUser}/></i>
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
