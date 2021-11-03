import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import profileimg from '../../../assets/images/profileimg.jpg'
import './Header.css'


function Header(props){
    return (
    <>
    {/* <!-- header-starts --> */}
    <div className="header sticky-header">
      {/* <!-- notification menu start --> */}
      <div className="menu-right">
        <div className="navbar user-panel-top justify-content-end">
          <div className="search-box">
            <form action="#search-results.html" method="get">
              <input className="search-input" placeholder="Search Here..." type="search" id="search"/>
              <button className="search-submit" value=""><FontAwesomeIcon icon={faSearch}/></button>
            </form>
          </div>
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                  <div className="profile_img">
                    <img src={profileimg} className="rounded-circle" alt="" />
                    <div className="user-active">
                      <span></span>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <!--notification menu end --> */}
    {/* <!-- //header-ends --> */}
    </>
    )
}

export default Header