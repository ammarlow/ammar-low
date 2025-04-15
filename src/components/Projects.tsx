
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import resumeImage from '/resume.png';
import slotMachineImage from '/slotmachine.png';
import vueWorldImage from '/vueworld.png';
import edQuizImage from '/edquiz.png';

type ProjectType = {
  title: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
};

// Expanded project list for the grid layout
const projects: ProjectType[] = [
  {
    title: 'Resume Builder',
    image: resumeImage,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveDemo: 'https://quick-resume-rose.vercel.app/',
  },
  {
    title: 'Slot Machine App',
    image: slotMachineImage,
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    liveDemo: 'https://slotmachine-zeta.vercel.app/',
  },
  {
    title: 'React Native-Expo-Nativewind Boilerplate',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&auto=format&fit=crop',
    technologies: ['React Native', 'Expo', 'NativeWind'],
    github: 'https://github.com/ammarlow/reactnative-expo-nativewind-boilerplate',
  },
  {
    title: 'Vue World Countries',
    image: vueWorldImage,
    technologies: ['Vue.js', 'World Countries API', 'Bootstrap CSS', 'Axios'],
    liveDemo: 'https://vue-world-countries.vercel.app/',
  },
  {
    title: 'ED Quiz',
    image: edQuizImage,
    technologies: ['Vue.js', 'CSS', 'Vuex', 'Node.js', 'GetResponse'],
    liveDemo: 'https://ed-quiz.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto">
      <h2 className="section-heading">Pet Projects</h2>
      <div className="mb-8 text-gray-500">Just my personal projects, not my professional work</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
