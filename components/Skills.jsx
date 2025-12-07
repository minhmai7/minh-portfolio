import React from 'react';

const Skills = () => {
    const skills = [
        'Leadership',
        'Communication', 
        'Problem Solving',
        'Teamwork',
        'Time Management',
        'Critical Thinking'
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-accent mb-6">Skills</h2>
            <div className="bg-accent/10 p-5 rounded-lg space-y-3">
                {skills.map((skill, index) => (
                    <div key={index} className="text-white/80 text-sm">
                        • {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;