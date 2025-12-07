import React from 'react';
import { 
    SiReact, 
    SiNextdotjs, 
    SiJavascript, 
    SiHtml5, 
    SiPython, 
    SiTypescript, 
    SiCss3, 
    SiTailwindcss, 
    SiGit, 
    SiNodedotjs, 
    SiPrisma,
    SiPostgresql 
} from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        { name: 'React', icon: SiReact, color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'Python', icon: SiPython, color: 'text-blue-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'CSS3', icon: SiCss3, color: 'text-blue-400' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Git', icon: SiGit, color: 'text-orange-500' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Prisma', icon: SiPrisma, color: 'text-blue-400' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
    ];

    return (
        <div className="w-full py-6">
            <div className="flex gap-8">
                {/* Tech Stack Title */}
                <div className="flex-shrink-0">
                    <h3 className="text-2xl font-bold text-accent flex">Tech</h3>
                </div>
                
                {/* Conveyor Container */}
                <div className="flex-1 overflow-hidden relative">
                    <div className="relative overflow-x-hidden overflow-y-visible py-4">
                        <div 
                            className="flex gap-8 animate-scroll"
                            style={{ width: `${technologies.length * 112 * 2}px` }}
                        >
                            {/* First set */}
                            {technologies.map((tech, index) => {
                                const IconComponent = tech.icon;
                                return (
                                    <div
                                        key={`first-${index}`}
                                        className="flex flex-col items-center justify-center space-y-2 flex-shrink-0 w-20"
                                    >
                                        <div className="w-16 h-16 bg-accent/10 rounded-xl shadow-lg flex items-center justify-center mb-2 hover:scale-110 transition-transform duration-300 border border-accent/20 hover:bg-accent/20">
                                            <IconComponent className={`text-3xl ${tech.color}`} />
                                        </div>    
                                        <p className="text-xs font-medium text-white/80 whitespace-nowrap text-center">{tech.name}</p>
                                    </div>    
                                );
                            })}
                            {/* Second set for loop */}
                            {technologies.map((tech, index) => {
                                const IconComponent = tech.icon;
                                return (
                                    <div
                                        key={`second-${index}`}
                                        className="flex flex-col items-center justify-center space-y-2 flex-shrink-0 w-20"
                                    >
                                        <div className="w-16 h-16 bg-accent/10 rounded-xl shadow-lg flex items-center justify-center mb-2 hover:scale-110 transition-transform duration-300 border border-accent/20 hover:bg-accent/20">
                                            <IconComponent className={`text-3xl ${tech.color}`} />
                                        </div>    
                                        <p className="text-xs font-medium text-white/80 whitespace-nowrap text-center">{tech.name}</p>
                                    </div>    
                                );
                            })}
                            {/* Third set because why not */}
                            {technologies.map((tech, index) => {
                                const IconComponent = tech.icon;
                                return (
                                    <div
                                        key={`third-${index}`}
                                        className="flex flex-col items-center justify-center space-y-2 flex-shrink-0 w-20"
                                    >
                                        <div className="w-16 h-16 bg-accent/10 rounded-xl shadow-lg flex items-center justify-center mb-2 hover:scale-110 transition-transform duration-300 border border-accent/20 hover:bg-accent/20">
                                            <IconComponent className={`text-3xl ${tech.color}`} />
                                        </div>    
                                        <p className="text-xs font-medium text-white/80 whitespace-nowrap text-center">{tech.name}</p>
                                    </div>    
                                );
                            })}
                        </div>
                    </div>
                    {/* Fading */}
                    <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
                </div>
            </div>

            <style jsx>{`
                .animate-scroll {
                    animation: scroll 35s linear infinite;
                    will-change: transform;
                }
                
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>    
    );
};

export default TechStack;

