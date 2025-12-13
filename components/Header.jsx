"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

import { FaCoffee } from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero-section", "about-section", "projects-section", "contact-section"];
      const scrollPosition = window.scrollY + 120;

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
    <header className="fixed top-0 left-0 right-0 z-40 py-4 xl:py-6 text-white bg-background backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-center"> 
        {/* Logo / Home Link */}
        <button 
          onClick={() => scrollToSection('hero-section')}
          className="bg-transparent border-0 p-0 cursor-pointer"
        >
          <h1 className="text-4xl font-semibold">
            Minh<span className="text-accent"><FaCoffee className="inline w-2 h-2 translate-y-[8px]"/></span>
          </h1>
        </button>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Button 
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                activeSection === 'contact-section' 
                  ? 'bg-background border border-primary text-primary hover:bg-accent/90' 
                  : ''
              }`}
              onClick={() => scrollToSection('contact-section')}
            >
              Contact Me!
            </Button>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;