import React from "react";

function Header() {
  return (
    <header id="#">
      <img
        src={process.env.PUBLIC_URL + "/images/banner.jpg"}
        className="banner"
        alt="Web Banner"
      />
      <a href="#" className="logo">
        Muzamil Nawaz
      </a>
      
      <div ><button id="toggle" className="toggle"></button></div>

      <nav>
        <ul>
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#about">About </a>
          </li>
          <li>
            <a href="#skills">Skills </a>
          </li>
          <li>
            <a href="#projects">Projects </a>
          </li>
          <li>
            <a href="#contact">Contact </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
