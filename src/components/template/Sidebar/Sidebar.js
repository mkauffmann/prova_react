import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faAngleDoubleRight, faTable, faTh, faFileWord, faTachometerAlt} from "@fortawesome/free-solid-svg-icons";

import logo from "../../../assets/icons/logo.png";


function Sidebar(props) {

    const toggleMenu = () => {
    let body = document.querySelector("body");
      let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
      if(hasCollapsed) {
       body.classList.remove("sidebar-menu-collapsed");
       body.classList.add("noscroll");
      } else {
        body.classList.remove("noscroll");
        body.classList.add("sidebar-menu-collapsed");
      };
    }

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
        <div class="logo-icon text-center">
            <a href="/" title="logo"><img src={logo} alt="logo-icon"/> </a>
        </div>

        {/* <!-- //logo end --> */}

        <div className="sidebar-menu-inner">
          {/* <!-- sidebar nav start --> */}
          <ul className="nav nav-pills nav-stacked custom-nav">
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTachometerAlt} />
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
                <FontAwesomeIcon icon={faTable}/><span> Pricing tables</span>
              </a>
            </li>
            <li>
              <a href="/blocks">
                <FontAwesomeIcon icon={faTh} /><span>  Content blocks</span>
              </a>
            </li>
            <li>
              <a href="/forms">
                <FontAwesomeIcon icon={faFileWord} /><span>  Forms</span>
              </a>
            </li>
          </ul>
          {/* <!-- //sidebar nav end --> */}
          {/* <!-- toggle button start --> */}
          <a className="toggle-btn" onClick={toggleMenu}>
            <i className="fa fa-angle-double-left menu-collapsed__left">
              <span>Collapse Sidebar</span>
            </i>
            <FontAwesomeIcon icon={faAngleDoubleRight} className="menu-collapsed__right"/>
          </a>
          {/* <!-- //toggle button end --> */}
        </div>
      </div>
      {/* <!-- //sidebar menu end --> */}
    </>
  );
}

export default Sidebar