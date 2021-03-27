import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Skill(props) {
  return (
    <div className="skill-card">
      <h3>{props.skillName}</h3>
      <img
        src={process.env.PUBLIC_URL + "/images/" + props.skillName + ".svg"}
        alt="Logo"
      />
    </div>
  );
}

function DisplaySkills() {
  const skills = [
    { skill: "Java", logo: "" },
    { skill: "Spring Boot", logo: "" },
    { skill: "Spring", logo: "" },
    { skill: "MySQL", logo: "" },
    { skill: "React JS", logo: "" },
    { skill: "Android", logo: "" },
    { skill: "Python", logo: "" },
    { skill: "HTML 5", logo: "" },
    { skill: "CSS 3", logo: "" },
    { skill: "Bootstrap", logo: "" },
  ];

  const showSkills = () => {
    console.log("in skills");
    return skills.map((eachSkill) => {
      return <Skill skillName={eachSkill.skill} skillLogo={eachSkill.logo} />;
    });
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Technologies, I work with</h2>
      <div className="skill-cards">{showSkills()}</div>
    </section>
  );
}

export default DisplaySkills;
