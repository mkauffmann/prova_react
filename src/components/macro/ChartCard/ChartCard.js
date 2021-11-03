import React from "react";

function ChartCard(props) {
  return (
    <div className="col-lg-6 pr-lg-2 chart-grid">
      <div className="card text-center card_border">
        <div className="card-header chart-grid__header">{props.header}</div>
        <div className="card-body">
          {/* <!-- chart --> */}
          <div id="container">
            <canvas id={props.chart}></canvas>
          </div>
          {/* <!-- chart --> */}
        </div>
        <div className="card-footer text-muted chart-grid__footer">
          {props.footer}
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
