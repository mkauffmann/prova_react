import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function SearchBox(props){
    return (
        <div className="search-box">
            <form action="#search-results.html" method="get">
              <input className="search-input" placeholder="Search Here..." type="search" id="search"/>
              <button className="search-submit" value=""><FontAwesomeIcon icon={faSearch}/></button>
            </form>
          </div>
    )
}

export default SearchBox