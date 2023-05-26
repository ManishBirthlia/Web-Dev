import React from "react";

function Form(prop) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!prop.userIsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {prop.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
