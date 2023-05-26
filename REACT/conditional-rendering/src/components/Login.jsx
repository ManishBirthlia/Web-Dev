import React from "react";

export default function Login() {
  return (
    <form className="form">
      <h1> Login Here </h1>
      <br />
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" name="submit">
        Login
      </button>
    </form>
  );
}
