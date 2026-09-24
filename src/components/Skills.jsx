import {
  Cpu,
  Zap,
  CircuitBoard,
  Wifi,
  Code2,
  Settings2,
} from "lucide-react";

import { skills } from "../data/portfolioData";

const icons = {
  Instrumentation: Cpu,
  Electrical: Zap,
  "Industrial Automation": Settings2,
  Electronics: CircuitBoard,
  IoT: Wifi,
  Programming: Code2,
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <p className="section-label">TECHNICAL SKILLS</p>

        <h2>Skills & Expertise</h2>

        <p>
          Kompetensi yang saya kembangkan melalui pengalaman kerja,
          pendidikan, dan project engineering maupun software development.
        </p>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => {
          const Icon = icons[category] || Cpu;

          return (
            <div className="skill-card" key={category}>
              <div className="skill-icon">
                <Icon size={28} />
              </div>

              <h3>{category}</h3>

              <div className="skill-list">
                {skillList.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;