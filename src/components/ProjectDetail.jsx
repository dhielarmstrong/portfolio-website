import { X, ExternalLink, CheckCircle2 } from "lucide-react";

function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project detail"
        >
          <X size={22} />
        </button>

        <div className="project-modal-header">
          <span className="project-category">
            {project.category}
          </span>

          <h2>{project.title}</h2>

          <p>{project.description}</p>
        </div>

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

        <div className="project-detail-section">
          <h3>Project Overview</h3>

          <p>
            Project ini merupakan pengembangan sistem monitoring
            hidroponik berbasis web untuk memantau kondisi tanaman
            melalui beberapa parameter lingkungan dan kualitas air.
          </p>
        </div>

        <div className="project-detail-section">
          <h3>Technologies</h3>

          <div className="project-technologies">
            {project.technologies?.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="project-detail-section">
          <h3>Key Features</h3>

          <div className="project-feature-list">
            {project.highlights?.map((highlight) => (
              <div
                className="project-feature"
                key={highlight}
              >
                <CheckCircle2 size={18} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {project.title === "Hydroponic Monitoring System" && (
          <>
            <div className="project-detail-section">
              <h3>Monitoring Parameters</h3>

              <div className="parameter-grid">
                <span>pH</span>
                <span>EC</span>
                <span>TDS</span>
                <span>Water Temperature</span>
                <span>Water Level</span>
                <span>Flow</span>
              </div>
            </div>

            <div className="project-detail-section">
              <h3>System Architecture</h3>

              <div className="architecture">
                <div className="architecture-item">
                  Sensor / Simulation
                </div>

                <span>↓</span>

                <div className="architecture-item">
                  ESP32
                </div>

                <span>↓</span>

                <div className="architecture-item">
                  Node.js API
                </div>

                <span>↓</span>

                <div className="architecture-item">
                  SQLite
                </div>

                <span>↓</span>

                <div className="architecture-item">
                  React Dashboard
                </div>
              </div>
            </div>

            <div className="project-detail-section">
              <h3>Development Status</h3>

              <p>
                Saat ini project telah memiliki dashboard monitoring,
                REST API, SQLite database, historical data,
                device management, simulation mode, dan CSV export.
                Integrasi ESP32 dan sensor fisik merupakan tahap
                pengembangan berikutnya.
              </p>
            </div>
          </>
        )}

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