import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { profile, education } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <p className="section-label">ABOUT ME</p>
        <h2>Engineer with a passion for technology</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>{profile.about}</p>

          <div className="about-info">
            <div className="info-item">
              <MapPin size={20} />
              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>
            </div>

            <div className="info-item">
              <Briefcase size={20} />
              <div>
                <span>Experience</span>
                <strong>Instrument Engineering</strong>
              </div>
            </div>

            <div className="info-item">
              <GraduationCap size={20} />
              <div>
                <span>Current Study</span>
                <strong>{education[0].degree}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlight">
          <div className="highlight-number">01</div>
          <h3>Engineering</h3>
          <p>
            Instrumentation, electrical system, environmental
            monitoring, sensor, calibration, dan troubleshooting.
          </p>

          <div className="highlight-number">02</div>
          <h3>Technology</h3>
          <p>
            IoT, embedded system, web application, database,
            dan software development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;