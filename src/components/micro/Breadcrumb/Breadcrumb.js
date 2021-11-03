import React from "react";

function Breadcrumb(props){
    return(
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            {props.prevPage ? <li class="breadcrumb-item"><a href="#">{props.prevPage}</a></li> : ""}
            <li className="breadcrumb-item active" aria-current="page">{props.currentPage}</li>
          </ol>
        </nav>
    )
}

export default Breadcrumb