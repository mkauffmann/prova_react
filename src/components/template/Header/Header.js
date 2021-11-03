import React from "react";


import logo from '../../../assets/icons/logo.png'
import './Header.css'


function Header(props){
    return (
    <>
    {/* <!-- sidebar menu start --> */}
    <div className="sidebar-menu sticky-sidebar-menu">

      {/* <!-- image logo -- */}
    <div class="logo">
      <a href="/">
        <img src={logo} alt="Your logo" title="Your logo" className="img-fluid" />
      </a>
    </div>
      {/* <!-- //image logo --> */}

      {/* <!-- //logo end --> */}

      <div className="sidebar-menu-inner">

        {/* <!-- sidebar nav start --> */}
        <ul className="nav nav-pills nav-stacked custom-nav">
          <li><a href="/"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
          </li>
          <li><a href="/cards"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
          <li><a href="/pricing"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
          <li><a href="/blocks"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
          <li><a href="/forms"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
        </ul>
        {/* <!-- //sidebar nav end --> */}
        {/* <!-- toggle button start --> */}
        <a className="toggle-btn" onclick="toggleMenu()">
          <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
          <i className="fa fa-angle-double-right menu-collapsed__right"></i>
        </a>
        {/* <!-- //toggle button end --> */}
      </div>
    </div>
    {/* <!-- //sidebar menu end --> */}
    {/* <!-- header-starts --> */}
    <div className="header sticky-header">
      {/* <!-- notification menu start --> */}
      <div className="menu-right">
        <div className="navbar user-panel-top">
          <div className="search-box">
            <form action="#search-results.html" method="get">
              <input className="search-input" placeholder="Search Here..." type="search" id="search"/>
              <button className="search-submit" value=""><span className="fa fa-search"></span></button>
            </form>
          </div>
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <div className="profile_img">
                    <img src="assets/images/profileimg.jpg" className="rounded-circle" alt="" />
                    <div className="user-active">
                      <span></span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                  <li className="user-info">
                    <h5 className="user-name">John Deo</h5>
                    <span className="status ml-2">Available</span>
                  </li>
                  <li> <a href="#"><i className="lnr lnr-user"></i>My Profile</a> </li>
                  <li> <a href="#"><i className="lnr lnr-users"></i>1k Followers</a> </li>
                  <li> <a href="#"><i className="lnr lnr-cog"></i>Setting</a> </li>
                  <li> <a href="#"><i className="lnr lnr-heart"></i>100 Likes</a> </li>
                  <li className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </li>
                </ul>
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