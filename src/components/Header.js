import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <header>
      <img
        src={process.env.PUBLIC_URL + "/images/banner.jpg"}
        className="banner"
        alt="Web Banner"
      />
      <a href="#" className="logo">
        Muzamil Nawaz
      </a>
      <Navbar  expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <ul>
              <li>
                <a href="#home">Home </a>
              </li>
              <li>
                <a href="#home">About </a>
              </li>
              <li>
              <a href="#home">Blog </a>
              </li>
              <li>
              <a href="#home">Projects </a>
              </li>
              <li>
              <a href="#home">Contact </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
