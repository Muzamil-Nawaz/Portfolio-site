import React from "react";

const Project = (props) => {
  return (
    <div className="project-card">
      <img
        src={props.project.logo}
        alt="Project Logo"
      />
      <h1>{props.project.name}</h1>
      <p>{props.project.desc}</p>
      <div className="technologies"><b>Technologies: </b><p>{props.project.technolgies}</p></div>
      <button     onClick={(e) => {
      e.preventDefault();
      window.location.href=props.project.repo;
      }}>Check github </button>
    </div>
  );
};

function Projects() {
  const projects = [
    {
      logo:"https://seeklogo.com/images/M/Memories_Entertainment-logo-1098647AA4-seeklogo.com.png",
      name: "Cloud Memories Application",
      desc:
        "     Full Stack application to manage posts, portraying user’s memories regarding life events. Developed Restful APIs in to serve the client’s requests and provide response after communicating with database",
      repo: "https://github.com/Muzamil-Nawaz/CloudMemoriesApp",
      technolgies:"Java, Spring Boot, Spring Data JPA, MySQL, ReactJS, Material-ui"
    },
    {
      logo:"https://cdn1.iconfinder.com/data/icons/cryptography-soft-fill/60/016_-_Cryptography_Shield-key-cryptography-512.png",
      name: "HackNet Cryptosystem",
      desc:
        "   A cryptosystem for providing secure business communication platform, by implementing Symmetric crytography, Asymmetric cryptography, Steganography to serve different business requirements",
      repo: "https://github.com/Muzamil-Nawaz/HackNet-Cryptosystem-in-Java-and-MySql",
      technolgies:"Java, Java swing, JTattoo, MySQL, Mail API"

    },
    {
      logo:"https://img.icons8.com/plasticine/2x/warehouse-1.png",
      name: "Inventory management",
      desc:
        "A generic scale desktop system to manage retail businesses’ operations, with relational database for different operations i.e display of different modules of data, storage and modification of new data",
      repo: "https://github.com/Muzamil-Nawaz/Inventory-management-system-using-Java-and-MySql",
      technolgies:"Java, Java swing, JTattoo, MySQL"

    },
    {
      logo:"https://png.vector.me/files/images/3/4/348372/guy_fawkes_mask_3d_preview",
      name: "Meme Sharing App",
      desc:
        " An android app for sharing random memes from Reddit with your friends, making HTTP requests to a random meme API and displayed images with Glide image processing library",
      repo: "https://github.com/Muzamil-Nawaz/MemeSharingApp",
      technolgies:"Java, Android, Volley API, Glide module Reddit API"

    },
    {
      logo:"https://png.vector.me/files/images/2/8/286462/github_preview",
      name: "Github Utilizer App",
      desc:
        "An android application for making Github repositories search easy, by using Volley API to make HTTP requests to Github Rest API to extract repositories results, by creating UI design with material design to make it attractive",
      repo: "https://github.com/Muzamil-Nawaz/GithubUtilizer",
      technolgies:"Java, Android, Volley API, Github API, Glide module, Material design"

    },
    {
      logo:"https://seeklogo.com/images/B/bee-logo-EA75411FDD-seeklogo.com.png",
      name: "BeeSearch App",
      desc:
        "Developed an useful application for making search for people regarding different professional needs easy, by providing platform where user can register, and search for relative user profiles for their specific tasks",
      repo: "https://github.com/Muzamil-Nawaz/BeeSearch",
      technolgies:"Java, Android, Firebase Real-time database, Firebase Storage, Material design"

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
