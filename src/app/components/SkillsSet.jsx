import "../css/Skilleset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faAws,
  faGitAlt,
  faGithub,
   
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faTerminal,faCode } from "@fortawesome/free-solid-svg-icons";
import {SiNextdotjs,SiTailwindcss,SiDjango,SiMysql,SiPycharm,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import SectionBox from "./NameComponent";
import { SiCelery,SiRedis,SiSublimetext } from "react-icons/si";



const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML5", icon: faHtml5, className: "sk-html5" },
      { name: "CSS3", icon: faCss3Alt, className: "sk-css3" },
      { name: "JavaScript", icon: faJs, className: "sk-js" },
      { name: "React.js", icon: faReact, className: "sk-react" },
      { name: "Next.js", icon: SiNextdotjs, className: "sk-nextjs" },
      { name: "Tailwind CSS", icon: SiTailwindcss, className: "sk-tailwind" },
    ],
    backend: [
      { name: "Python", icon: faPython, className: "sk-python" },
      { name: "Django", icon: SiDjango, className: "sk-django" },
      { name: "Django REST API", icon: SiDjango, className: "sk-drf" }, // Using Django icon for DRF
      { name: "Celery", icon: SiCelery, className: "sk-celery" },
      { name: "Redis", icon: SiRedis, className: "sk-redis" },
      { name: "MySQL", icon: SiMysql, className: "sk-mysql" },
    ],
    tools: [
      { name: "AWS EC2", icon: faAws, className: "sk-aws" },
      { name: "Putty", icon: faTerminal, className: "sk-putty" },
      { name: "PyCharm", icon: SiPycharm, className: "sk-pycharm" },
      { name: "Git", icon: faGitAlt, className: "sk-git" },
      { name: "GitHub", icon: faGithub, className: "sk-github" },
      { name: "VS Code", icon: BiLogoVisualStudio , className: "sk-vscode" },
      { name: "Sublime", icon: SiSublimetext , className: "sk-sublime" },
    ],
  };

  return (
    <>
    <SectionBox title="My Skills" description="Technologies & Tools I work with" borderColor="#007acc"  />
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Frontend Skills */}
        <div className="skill-category">
          <h3>Frontend Technologies</h3>
          <div className="skills-grid">
            {skills.frontend.map((skill, index) => (
              <div key={index} className={`skill-box appeared ${skill.className}`}>
                {typeof skill.icon === "function" ? (
                  <skill.icon className="skill-icon appeared" />
                ) : (
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon appeared" />
                )}
                <span className="skill-name appeared">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Backend Skills */}
        <div className="skill-category appeared">
          <h3 className="appeared">Backend Technologies</h3>
          
          <div className="skills-grid appeared">
            {skills.backend.map((skill, index) => (
              <div key={index} className={`skill-box appeared ${skill.className}`}>
                {typeof skill.icon === "function" ? (
                  <skill.icon className="skill-icon" />
                ) : (
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                )}
                <span className="skill-name appeared">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
          
        {/* Tools & Platforms */}
        <div className="skill-category appeared">
          <h3 className="appeared">Tools & Platforms</h3>
          <div className="skills-grid appeared">
            {skills.tools.map((skill, index) => (
              <div key={index} className={`skill-box appeared ${skill.className}`}>
                {typeof skill.icon === "function" ? (
                  <skill.icon className="skill-icon appeared" />
                ) : (
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon appeared" />
                )}
                <span className="skill-name appeared">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
