"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name: 'home',
        target: 'hero-section'
    },
    {
        name: 'about',
        target: 'about-section'
    },
    {
        name: 'projects',
        target: 'projects-section'
    }
]

const MobileNav = () => {
    const [activeSection, setActiveSection] = useState("hero-section");
    const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(false); // Close the mobile menu after navigation
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between items-center">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <button 
                        onClick={() => scrollToSection('hero-section')}
                        className="bg-transparent border-0 p-0 cursor-pointer"
                    >
                        <h1 className="text-4xl font-semibold">
                            Minh<span className="text-accent">.</span>
                        </h1>
                    </button>
                </div>
                <nav className="flex flex-col justify-center items-center gap-10 w-full -mt-42">
                    {links.map((link, index) => {
                        return (
                            <button 
                                key={index} 
                                onClick={() => scrollToSection(link.target)}
                                className={`${link.target === activeSection && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all bg-transparent border-0 p-0 cursor-pointer`}
                            >
                                {link.name}
                            </button>
                        );
                    })}
                </nav>
                <div className="p-6 pb-8">
                    <Button 
                        className="w-full cursor-pointer text-lg py-3"
                        onClick={() => scrollToSection('contact-section')}
                    >
                        Contact Me!
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;