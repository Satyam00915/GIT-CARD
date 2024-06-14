import React from "react";
import "./Card.css";

const Card = ({ image, username, bio, followers, following, repos, link }) => {
  return (
    <>
      <div className="card">
        <div className="identity">
          <div className="image">
            <img src={image} alt="" width={130} />
          </div>
          <div className="user">
            <p style={{ fontSize: "20px", color: "grey" }}>{username}</p>
            <p>{bio}</p>
          </div>
        </div>
        <div className="detailed">
          <div className="details">
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
          </div>
          <div className="repo">
            <p>Repositories: {repos}</p>
          </div>
          <div className="url">
            <a href={link} target="_blank">
              CLICK HERE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
