import React from "react";

const Project = (props) => {
  return (
    <div className="project-card">
      <img
        src={process.env.PUBLIC_URL + "/images/computer.svg"}
        alt="Denim Jeans"
      />
      <h1>{props.project.name}</h1>
      <p>{props.project.desc}</p>
      <button href={props.project.repo}>Check github </button>
    </div>
  );
};

function Projects() {
  const projects = [
    {
      name: "Cloud Memories Application",
      desc:
        "     A frequent and fast learner currently pursuing Bachelors in Software Engineering from Mehran UET, Pakistan (2017-2021),having 2+ years of experience...",
      repo: "",
    },
    {
      name: "HackNet Cryptosystem",
      desc:
        "     A frequent and fast learner currently pursuing Bachelors in Software Engineering from Mehran UET, Pakistan (2017-2021),having 2+ years of experience...",
      repo: "",
    },
    {
      name: "Cloud Memories Application",
      desc:
        "     A frequent and fast learner currently pursuing Bachelors in Software Engineering from Mehran UET, Pakistan (2017-2021),having 2+ years of experience...",
      repo: "",
    },
    {
      name: "Cloud Memories Application",
      desc:
        "     A frequent and fast learner currently pursuing Bachelors in Software Engineering from Mehran UET, Pakistan (2017-2021),having 2+ years of experience...",
      repo: "",
    },
  ];

  const displayProjects = () => {
    return projects.map((eachProject) => {
      return <Project project={eachProject} />;
    });
  };
  return (
    <section id="projects" className="projects-section">
      <h2>Projects, I have built</h2>
      <div className="project-cards">{displayProjects()}</div>
    </section>
  );
}

export default Projects;
