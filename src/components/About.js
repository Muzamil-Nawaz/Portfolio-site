import React from 'react'

function About() {
    return (
        <section id="about" className="about-section">
           <img src={process.env.PUBLIC_URL + "/images/computer.svg"} alt="" />
           <div className="info">
           <h2>I am a <em className="title">Software Engineer</em></h2>
                    <p>
                    With experience of 2+ years in software developement as <b>Freelance software developer</b> and keen interest of building things. I have been learning and working on different technologies and trying to enlarge my pool of expertise each day. I am a fresh graduate looking for any professional opportunity with any digital company with fast paced environment and skillful teams to utilize my time there with personal and professional growth.
   </p>
              
     </div>

        </section>
        
    )
}

export default About
