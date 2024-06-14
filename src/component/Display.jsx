import React, { useState } from "react";
import "./Display.css";
import Card from "./Card";

const Display = () => {
  const [username, setUsername] = useState("");
  const [object, setObject] = useState({});
  return (
    <>
      <div className="username">
        <input
          className="search"
          type="search"
          placeholder="Search..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          onClick={() => {
            fetch(`https://api.github.com/users/${username}`).then(
              (response) => {
                response.json().then((data) => {
                  setObject(data);
                  console.log(data);
                });
              }
            );
          }}
        >
          &#128270;
        </button>
      </div>
      <Card
        image={object.avatar_url}
        username={object.name}
        bio={object.bio}
        followers={object.followers}
        following={object.following}
        repos={object.public_repos}
        link={object.html_url}
      ></Card>
    </>
  );
};

export default Display;
