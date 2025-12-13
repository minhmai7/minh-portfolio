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
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = links.map(link => link.target);
          const scrollPosition = window.scrollY + 120; // Offset for fixed header

          // Check if we're in the contact section first
          const contactSection = document.getElementById('contact-section');
          if (contactSection && contactSection.offsetTop <= scrollPosition) {
            setActiveSection(''); // Clear active state when in contact section
            ticking = false;
            return;
          }

          // Otherwise, check the nav sections
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    const headerHeight = 100;

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
                } capitalize font-medium hover:text-accent transition-all duration-300 ease-in-out cursor-pointer bg-transparent border-0 p-0`}
              >
                {link.name}
              </button>
            );
        })}
    </nav>
  );
};

export default Nav;