import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          FSA<span>.</span>
        </a>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;