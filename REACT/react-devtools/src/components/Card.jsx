import React from "react";
import Avatar from "./avatar";
import Contact from "./Contact";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <Contact tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
