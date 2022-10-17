import React from "react";
import "./Card.css";

const Card = (props) => {
  const bgStyle = {
    backgroundColor: props.background,
  };
  return (
    <div className="Card">
      <div className="background" style={bgStyle}></div>
      <figure>
        <img className="userImg" src={props.profilePic} alt="" />
      </figure>
      <div className="wrapper">
        <div className="username-and-Id">
          <div className="username">{props.username}</div>
          <div className="userId">{props.id}</div>
        </div>
        <div className="about">about</div>
        <div className="userInfo">{props.userInfo}</div>
        <div className="sities">
          <div>
            web: <a href={props.social}>{props.social}</a>
          </div>
          <div>
            twitter: <a href={props.social}>{props.social}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
