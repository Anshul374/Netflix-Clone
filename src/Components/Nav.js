import React, { useEffect, useState } from "react";
import mysvg from "../Images/Netflix-Logo.wine.svg";
import "../cssFiles/nav.css";
import avatar from "../Images/Netflix-avatar.png";

export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="netflix-logo" src={mysvg} alt="Netflix-logo" />
      <img className="netflix-avatar" src={avatar} alt="Netflix-avatar" />
    </div>
  );
}
