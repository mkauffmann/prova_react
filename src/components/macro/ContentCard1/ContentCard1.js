import React from "react";

function ContentCard1(props){
    return (
        <div className="card card_border p-lg-5 p-3 mb-4">
          <div className="card-body py-3 p-0">
            <div className="row">
              <div className="col-lg-6 align-self pr-lg-4">
                <h3 className="block__title mb-lg-4">{props.title}</h3>
                <p className="mb-3">{props.paragraph1}</p>
                <p className="mb-lg-5 mb-3">{props.paragraph2}</p>
                <a href="#read" className="btn btn-style btn-primary">{props.btn}</a>
              </div>
              <div className="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
                <img src={props.img} alt="" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
    )
}

export default ContentCard1