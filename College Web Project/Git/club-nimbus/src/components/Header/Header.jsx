import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header flex p-3 justify-between m-auto max-w-7xl">
      <div className="left">
        <Link to="/">
          <div className="club flex items-center">
            <div className="logo">
              <img src="/icons/logo.png" />
            </div>
            <div className="name">Club</div>
          </div>
        </Link>
      </div>
      <div className="right flex items-center p-2">
        <Link to="projects">
          <div className="text-red-400 underline underline-offset-2 px-3">
            Projects
          </div>
        </Link>
        <Link to="contact">
          <div className="text-red-400 underline underline-offset-2 px-3">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
}
