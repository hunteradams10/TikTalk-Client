import React from "react";
import "./userOnline.css";

function UserOnline() {
  return (
    <div className="userOnline">
      <div className="user-online-friend">
        <div className="user-online-image-container">
          <img className="user-online-image"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*1ynru66*_ga*NzgwNjU2MzM1LjE2NjgxNTI0MzY.*_ga_8JE65Q40S6*MTY2ODMzMDAzMy41LjEuMTY2ODMzMDcwNi4wLjAuMA.."
            alt=""
          />
          <div className="user-online-badge"></div>
        </div>
        <span className="user-online-name">John Doe</span>
      </div>
    </div>
  );
}

export default UserOnline;
