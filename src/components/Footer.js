import React from "react";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">   
        
          <ul className="social-links">
            <li><a href=""><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>


        </ul>
        </div>
        <div className="quick-links">   
        <h2>Quick links</h2>
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
      
        </div>
        <div className="contact-links">   
        <h2>Contact Info</h2>
        <ul className="info">
          <li>
            <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
            <span>Gulistan e Johar, <br />Karachi, Sindh,<br />PK</span>
          </li>
          <li>
            <span><i className="fa fa-phone" aria-hidden="true"></i></span>
            <p><a href="tel:+923222592161" >+92 322 2592161</a></p>
          </li>
          <li>
            <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <p><a href="mailto:mzmlnwz5@gmail.com">mzmlnwz5@gmail.com</a></p>

          </li>
      </ul>
        </div>
    </footer>
  );
}

export default Footer;
