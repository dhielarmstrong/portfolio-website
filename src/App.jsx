import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { profile, experience, education } from "./data/portfolioData";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* HOME */}
        <section id="home" className="hero profile-hero">
          <div className="profile-cover">
            <div className="cover-grid"></div>
            <div className="cover-glow cover-glow-1"></div>
            <div className="cover-glow cover-glow-2"></div>

            <div className="cover-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="cover-label">
              ELECTRICAL • INSTRUMENTATION • IoT
            </div>
          </div>

          <div className="profile-header">
            <div className="profile-photo-container">
              <img
                src="/images/profile.jpeg"
                alt="Fadhillah Salman Alfarisi"
                className="profile-photo"
              />
            </div>

            <div className="profile-main">
              <p className="hero-label">HELLO, I'M</p>

              <h1>{profile.name}</h1>

              <h2>{profile.role}</h2>

              <p className="hero-tagline">
                {profile.tagline}
              </p>

              <p className="hero-description">
                {profile.description}
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn primary">
                  View Projects
                </a>

                <a href="#contact" className="btn secondary">
                  Contact Me
                </a>

                <a
                  href="/documents/Resume_Fadhillah Salman Al-Farisi.pdf"
                  download
                  className="btn secondary"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />

        {/* EXPERIENCE */}
        <section id="experience" className="experience-section">
          <div className="section-header">
            <p className="section-label">PROFESSIONAL EXPERIENCE</p>
            <h2>Work Experience</h2>
            <p>
              Pengalaman profesional dalam bidang instrumentation,
              electrical system, environmental monitoring, dan
              system integration.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article
                className="experience-card"
                key={`${item.company}-${index}`}
              >
                <div className="experience-period">
                  {item.period}
                </div>

                <div className="experience-content">
                  <span className="experience-company">
                    {item.company}
                  </span>

                  <h3>{item.position}</h3>

                  <p>{item.description}</p>

                  {item.responsibilities?.length > 0 && (
                    <ul className="experience-responsibilities">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="education-section">
          <div className="section-header">
            <p className="section-label">EDUCATION</p>
            <h2>Academic Background</h2>
            <p>
              Latar belakang pendidikan yang mendukung kombinasi
              kemampuan engineering dan software development.
            </p>
          </div>

          <div className="education-list">
            {education.map((item, index) => (
              <article
                className="education-card"
                key={`${item.institution}-${index}`}
              >
                <div className="education-period">
                  {item.period}
                </div>

                <div className="education-content">
                  <span className="education-institution">
                    {item.institution}
                  </span>

                  <h3>{item.degree}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="section-header">
            <p className="section-label">GET IN TOUCH</p>
            <h2>Let's Work Together</h2>
            <p>
              Saya terbuka untuk kesempatan kerja, project engineering,
              software development, maupun kolaborasi di bidang teknologi.
            </p>
          </div>

          <div className="contact-grid">
            <a
              href="mailto:fadhillahsalmanalfarisi26@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">✉</div>
              <div>
                <span>Email</span>
                <strong>
                  fadhillahsalmanalfarisi26@gmail.com
                </strong>
              </div>
            </a>

            <a
              href="https://wa.me/6288210799862?text=Halo%20Fadhillah%2C%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20mengenai%20kesempatan%20kerja%2Fkolaborasi."
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">WA</div>
              <div>
                <span>WhatsApp</span>
                <strong>Chat via WhatsApp</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/fadhillah-salman-al-farisi-43057a287"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">in</div>
              <div>
                <span>LinkedIn</span>
                <strong>Fadhillah Salman Al Farisi</strong>
              </div>
            </a>

            <a
              href="https://github.com/dhielarmstrong"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">&lt;/&gt;</div>
              <div>
                <span>GitHub</span>
                <strong>dhielarmstrong</strong>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-card-icon">●</div>
              <div>
                <span>Location</span>
                <strong>
                  Bandung, Jawa Barat, Indonesia - 40184
                </strong>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <a
              href="https://wa.me/6288210799862?text=Halo%20Fadhillah%2C%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20mengenai%20kesempatan%20kerja%2Fkolaborasi."
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Chat via WhatsApp
            </a>

            <a
              href="mailto:fadhillahsalmanalfarisi26@gmail.com"
              className="btn secondary"
            >
              Send Me an Email
            </a>

            <a
              href="/documents/Resume_Fadhillah Salman Al-Farisi.pdf"
              download
              className="btn secondary"
            >
              Download CV
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
