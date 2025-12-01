"use client";

import { useState, useEffect } from "react";

const links = [
  {name: "Home", target: "hero-section"},
  {name: "About", target: "about-section"},
  {name: "Projects", target: "projects-section"},
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.target);
      const scrollPosition = window.scrollY + 120; // Offset for fixed header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 100; // Account for fixed header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
    
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
              <button 
                key={index} 
                onClick={() => scrollToSection(link.target)}
                className={`${
                  link.target === activeSection && "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all cursor-pointer bg-transparent border-0 p-0`}
              >
                {link.name}
              </button>
            );
        })}
    </nav>
  );
};

export default Nav;