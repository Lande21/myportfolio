// src/components/Projects.js
import React from 'react';
import Project from './Project';

const projectsData = [
  {
    name: 'Project 1',
    description: 'Description of Project 1.',
    technologies: ['React', 'Redux', 'CSS'],
  },
  {
    name: 'Project 2',
    description: 'Description of Project 2.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
  // Add more projects as needed
];

const Projects = () => (
  <div id="projects" className="section projects">
    <h2>My Projects</h2>
    <div className="project-list">
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
