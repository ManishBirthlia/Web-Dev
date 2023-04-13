import React from "react";

function Contact(props) {
  return (
    <div className="bottom">
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Contact;
