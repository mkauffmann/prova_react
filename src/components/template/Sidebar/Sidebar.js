import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../assets/icons/logo.png";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <>
      {/* <!-- sidebar menu start --> */}
      <div className="sidebar-menu sticky-sidebar-menu">
        {/* <!-- image logo -- */}
        <div class="logo">
          <a href="/">
            <img
              src={logo}
              alt="Your logo"
              title="Your logo"
              className="img-fluid"
            />
          </a>
        </div>
        {/* <!-- //image logo --> */}

        {/* <!-- //logo end --> */}

        <div className="sidebar-menu-inner">
          {/* <!-- sidebar nav start --> */}
          <ul className="nav nav-pills nav-stacked custom-nav">
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faCogs} />
                <span> Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/cards">
                <FontAwesomeIcon icon={faCogs} />
                <span> Default cards</span>
              </a>
            </li>
            <li>
              <a href="/pricing">
                <FontAwesomeIcon icon={faCogs} />
                <i className="fa fa-table"></i> <span>Pricing tables</span>
              </a>
            </li>
            <li>
              <a href="/blocks">
                <FontAwesomeIcon icon={faCogs} />
                <i className="fa fa-th"></i> <span>Content blocks</span>
              </a>
            </li>
            <li>
              <a href="/forms">
                <FontAwesomeIcon icon={faCogs} />
                <i className="fa fa-file-text"></i> <span>Forms</span>
              </a>
            </li>
          </ul>
          {/* <!-- //sidebar nav end --> */}
          {/* <!-- toggle button start --> */}
          <a className="toggle-btn" onclick="toggleMenu()">
            <i className="fa fa-angle-double-left menu-collapsed__left">
              <span>Collapse Sidebar</span>
            </i>
            <i className="fa fa-angle-double-right menu-collapsed__right"></i>
          </a>
          {/* <!-- //toggle button end --> */}
        </div>
      </div>
      {/* <!-- //sidebar menu end --> */}
    </>
  );
}

export default Sidebar