import '../css/Projects.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionBox from './NameComponent';

const Projects = () => {
  const projectsData = [
    {
      title: 'Internship Frontend',
      description:
        'A platform for students to find internships, apply for positions, and connect with companies.',
      technologies: ['React.js', 'CSS', 'MySQL','Django REST Framework'],
      image: '/internship.png',
      liveDemo: 'https://internship.tsaritservices.com/',
      githubRepo: 'https://github.com/Naveenpy2001/internship.git',
    },
    {
      title: 'HMS Frontend & Backend',
      description:
        'A hospital management system with authentication, patient registration, and medical record tracking.etc..',
      technologies: ['React.js', 'CSS', 'MySQL', 'Django REST Framework','JWT'],
      image: '/hms.png',
      liveDemo: 'https://hms.tsaritservices.com/',
      githubRepo: 'https://github.com/Naveenpy2001/hmst',
    },
    {
      title: 'NGO Frontend',
      description:
        'A web app for NGOs to manage volunteers, events, and donations.',
      technologies: ['React.js', 'CSS', 'Django REST Framework'],
      image: '/images/ngo.png',
      liveDemo: '',
      githubRepo: 'https://github.com/Naveenpy2001/ngo-front',
    },
    {
      title: 'NextEra Frontend',
      description:
        'A futuristic business website with modern UI/UX, animations, and responsive design.',
      technologies: ['React.js', 'CSS', 'Django REST Framework'],
      image: '/images/nextera.png',
      liveDemo: '',
      githubRepo: 'https://github.com/Naveenpy2001/NextEra',
    },
  ];

  return (
    <>
      <SectionBox title={"Projects"} description={"Some of my featured work"} borderColor={"#e74c3c"} />
      <section className="projects-section">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card zoom-in">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="technologies-used">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
