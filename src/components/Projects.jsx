import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolioData";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="section-header">
          <p className="section-label">SELECTED PROJECTS</p>

          <h2>Projects I've Worked On</h2>

          <p>
            Beberapa project yang menggabungkan pengalaman engineering,
            instrumentation, electronics, IoT, dan software development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  className="project-link"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="project-icon">
                <ExternalLink size={20} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;