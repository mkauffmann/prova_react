import React from "react";
import SearchBox from "../../micro/SearchBox/SearchBox";
import ProfileDetails from "../../micro/ProfileDetails/ProfileDetails";



function Header(props){
    return (
    <>
    {/* <!-- header-starts --> */}
    <div className="header sticky-header">
      {/* <!-- notification menu start --> */}
      <div className="menu-right">
        <div className="navbar user-panel-top justify-content-end">
          <SearchBox/>
          <ProfileDetails/>
        </div>
      </div>
    </div>
    {/* <!--notification menu end --> */}
    {/* <!-- //header-ends --> */}
    </>
    )
}

export default Header