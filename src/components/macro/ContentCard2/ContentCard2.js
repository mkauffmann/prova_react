import React from "react";

function ContentCard2(props){
    return (
        <div className="card card_border p-lg-5 p-3 mb-4">
          <div className="card-body py-3 p-0">
            <div className="row">
              <div className="col-lg-6 pr-lg-4">
                <img src={props.img} alt="" className="img-fluid rounded" />
              </div>
              <div className="col-lg-6 align-self pl-lg-4 mt-lg-0 mt-4">
                <h3 className="block__title mb-lg-4">{props.title}</h3>
                <p className="mb-3">{props.paragraph1}</p>
                <p className="mb-lg-5 mb-3">{props.paragraph2}</p>
                <a href="#read" className="btn btn-style btn-primary mr-2"> {props.btn1}</a>
                <a href="#more" className="btn btn-style border-btn"> {props.btn2}</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ContentCard2