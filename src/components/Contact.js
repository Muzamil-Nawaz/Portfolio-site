import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="container">
        <h2>Contact me</h2>

        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">First name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Last name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Mobile</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              <textarea required></textarea>
              <span className="text">Type you message</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
