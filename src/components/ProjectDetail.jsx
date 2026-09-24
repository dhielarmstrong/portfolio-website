import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Wrench,
  Database,
  Code2,
  Activity,
  Layers,
} from "lucide-react";

const categoryIcons = {
  "IoT & Software": Cpu,
  Instrumentation: Activity,
  "Electronics & IoT": Cpu,
  Electronics: Code2,
  "Environmental Monitoring": Activity,
  "Environmental Engineering": Layers,
  "Maintenance & Troubleshooting": Wrench,
  "Industrial Automation": Cpu,
};

function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  const CategoryIcon =
    categoryIcons[project.category] || Layers;

  return (
    <div
      className="project-modal-overlay"
      onClick={onClose}
    >
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project detail"
        >
          <X size={22} />
        </button>

        {/* HEADER */}
        <div className="project-modal-header">
          <div className="project-detail-category">
            <CategoryIcon size={16} />
            <span>{project.category}</span>
          </div>

          <h2>{project.title}</h2>

          <p>{project.description}</p>
        </div>

        {/* META */}
        <div className="project-detail-meta">
          <div>
            <span>MY ROLE</span>
            <strong>{project.role}</strong>
          </div>

          <div>
            <span>PROJECT TYPE</span>
            <strong>{project.category}</strong>
          </div>
        </div>

        {/* PROJECT IMAGE */}
{project.image && (
  <div className="project-detail-image">
    <img
      src={project.image}
      alt={`${project.title} dashboard`}
    />
  </div>
)}

        {/* OVERVIEW */}
        <div className="project-detail-section">
          <h3>Project Overview</h3>

          <p>
            {project.overview ||
              project.description}
          </p>
        </div>

        {/* SCOPE */}
        {project.scope?.length > 0 && (
          <div className="project-detail-section">
            <h3>Project Scope</h3>

            <div className="project-feature-list">
              {project.scope.map((item) => (
                <div
                  className="project-feature"
                  key={item}
                >
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECHNOLOGIES */}
        <div className="project-detail-section">
          <h3>Technologies & Tools</h3>

          <div className="project-technologies">
            {project.technologies?.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="project-detail-section">
          <h3>Key Features</h3>

          <div className="project-feature-list">
            {project.highlights?.map(
              (highlight) => (
                <div
                  className="project-feature"
                  key={highlight}
                >
                  <CheckCircle2 size={18} />
                  <span>{highlight}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* PARAMETERS */}
        {project.parameters?.length > 0 && (
          <div className="project-detail-section">
            <h3>Monitoring Parameters</h3>

            <div className="parameter-grid">
              {project.parameters.map(
                (parameter) => (
                  <span key={parameter}>
                    {parameter}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* SYSTEM ARCHITECTURE */}
        {project.architecture?.length > 0 && (
          <div className="project-detail-section">
            <h3>System Architecture</h3>

            <div className="architecture">
              {project.architecture.map(
                (item, index) => (
                  <div key={`${item}-${index}`}>
                    <div className="architecture-item">
                      {item}
                    </div>

                    {index <
                      project.architecture.length - 1 && (
                      <span>↓</span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* DEVELOPMENT / PROJECT STATUS */}
        {project.status && (
          <div className="project-detail-section">
            <h3>Project Status</h3>

            <p>{project.status}</p>
          </div>
        )}

        {/* ACTIONS */}
        <div className="project-detail-actions">
          <button
            className="project-action secondary"
            onClick={onClose}
          >
            Close
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-action primary"
            >
              <ExternalLink size={18} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-action secondary"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
