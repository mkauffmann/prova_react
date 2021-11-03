import React from "react";
import profileimg from '../../../assets/images/profileimg.jpg'

function ProfileDetails(props){
    return (
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
    )
}

export default ProfileDetails