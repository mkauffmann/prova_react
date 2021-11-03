import React from "react";

function ImgCard(props) {
  const classes = props.classes || "";
  const renderCardBody = () => {
    if (props.text || props.title || props.support) {
      return (
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className={"card-text mb-4 " + (props.textWhite ? "text-white" : "")}>{props.text}</p>
          <p className={"card-text " + (props.textWhite ? "text-white" : "")}>
            <small className="text-muted">{props.support}</small>
          </p>
        </div>
      );
    } else if (props.blockquote) {
      return (
        <blockquote className="blockquote mb-0 card-body">
          <p className={"mb-4 " + (props.textWhite ? "text-white" : "")}>{props.quote}</p>
          <footer className={"blockquote-footer " + (props.textWhite ? "text-white" : "")}>
            <small className={(props.textWhite ? "text-white" : "text-muted")}>
              {props.source}{" "}
              <cite title={props.sourceTitle}>{props.sourceTitle}</cite>
            </small>
          </footer>
        </blockquote>
      );
    }
  };

  return (
    <>
      <div className={"card " + classes}>
        {props.img ? (
          <img src={props.img} className="card-img-top" alt="..." />
        ) : (
          ""
        )}
        {renderCardBody()}
      </div>
    </>
  );
}

export default ImgCard;
