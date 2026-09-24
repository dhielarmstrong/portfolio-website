import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { profile } from "./data/portfolioData";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
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
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <span>ENGINEER</span>
              <strong>+</strong>
              <span>DEVELOPER</span>
            </div>
          </div>
        </section>

        <About />

        <Skills />

       <Projects />

        <section id="experience">
          <h2>Experience</h2>
          <p>
            Professional experience akan ditampilkan di sini.
          </p>
        </section>

        <section id="education">
          <h2>Education</h2>
          <p>
            Education akan ditampilkan di sini.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Silakan hubungi saya untuk kesempatan kerja atau kolaborasi.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;