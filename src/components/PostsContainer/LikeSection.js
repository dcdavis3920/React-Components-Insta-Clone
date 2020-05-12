// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
const LikeSection = (props) => {
  console.log(props, "frome like section");
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper" onClick={props.addLikes}>
          <FontAwesomeIcon icon={faHeart} />
          <i className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{props.likes}likes</p>
    </div>
  );
};
export default LikeSection;
