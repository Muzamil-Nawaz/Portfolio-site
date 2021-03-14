import React from 'react'

function About() {
    return (
        <section id="about" className="about-section">
           <img src={process.env.PUBLIC_URL + "/images/computer.svg"} alt="" />
           <div className="info">
           <h2>I am Software Developer</h2>
                    <p>
                    A frequent and fast learner currently pursuing Bachelors in Software Engineering from Mehran UET, Pakistan (2017-2021),
having 2+ years of experience in working with different technologies and frameworks as a Freelance Software Developer.
I have been exploring different domains of Software development : Desktop, Android and Web Dev
so I have relevant experience with different domain specific technologies too.
   </p>
              
     </div>

        </section>
        
    )
}

export default About
