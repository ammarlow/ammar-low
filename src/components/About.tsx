
import React from 'react';

const About = () => {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "Vue.js", "React", "Node.js", 
    "Express", "Laravel", "PHP", "PostgreSQL", "MySQL", 
    "Docker", "Python"
  ];

  return (
    <section id="about" className="container mx-auto">
      <h2 className="section-heading">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="mb-4">
            Hello! I'm Ammar, a software engineer with a passion for creating clean, efficient, and user-friendly applications.
            My journey in software engineering began during my undergraduate studies when I discovered the joy of building 
            solutions that solve real-world problems.
          </p>
          <p className="mb-4">
            Fast-forward to today, and I've had the privilege of working at a startup, a corporate, and a telecommunications company. 
            My main focus these days is building accessible, inclusive products and digital experiences for a 
            variety of clients.
          </p>
          <p className="mb-6">
            I believe in writing clean, maintainable code and constantly expanding my knowledge to stay up-to-date with 
            industry trends and best practices. When I'm not coding, you can find me snorkelling, reading self-help books, or 
            playing games.
          </p>
          <p className="text-muted-foreground">Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 mt-4 gap-x-4 gap-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="text-primary mr-2">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="w-full aspect-square bg-muted rounded-full overflow-hidden">
            <img 
              src="/me.png" 
              alt="Profile" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 border-2 border-primary rounded-md -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
