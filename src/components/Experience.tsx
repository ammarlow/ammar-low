
import React, { useState } from 'react';

type Experience = {
  company: string;
  title: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    company: 'Tech Innovators',
    title: 'Senior Software Engineer',
    period: 'January 2022 - Present',
    description: [
      'Lead the development of a React-based dashboard that improved client data visualization by 40%.',
      'Architected and implemented a microservice using Node.js and Docker, resulting in a 30% improvement in API response times.',
      'Mentored junior developers through code reviews and pair programming sessions.',
      'Collaborated with product and design teams to refine features based on user feedback.'
    ]
  },
  {
    company: 'Web Solutions Inc.',
    title: 'Full Stack Developer',
    period: 'June 2019 - December 2021',
    description: [
      'Developed and maintained full-stack applications using React, Node.js, and PostgreSQL.',
      'Implemented authentication systems using JWT and OAuth2.0.',
      'Optimized database queries resulting in a 50% reduction in load times.',
      'Participated in agile development processes, including daily standups and sprint planning.'
    ]
  },
  {
    company: 'StartUp Labs',
    title: 'Frontend Developer',
    period: 'August 2017 - May 2019',
    description: [
      'Built responsive and accessible web interfaces using HTML, CSS, and JavaScript.',
      'Converted design mockups into working frontend components.',
      'Integrated REST APIs to display dynamic content.',
      'Wrote unit tests using Jest to ensure code reliability.'
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="container mx-auto">
      <h2 className="section-heading">Where I've Worked</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 overflow-x-auto md:overflow-visible">
          <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-muted">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left whitespace-nowrap transition-colors hover:bg-muted/30 hover:text-primary ${
                  activeTab === index 
                    ? 'text-primary border-primary bg-muted/50 md:border-l-2 md:-ml-[2px] border-b-2 md:border-b-0' 
                    : 'text-muted-foreground'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-3/4 p-4">
          {experiences.map((exp, index) => (
            <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-medium mb-1">
                {exp.title} <span className="text-primary">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex">
                    <span className="text-primary mr-2 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
