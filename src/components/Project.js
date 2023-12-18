// src/components/Project.js
import React from 'react';

const Project = ({ name, description, technologies }) => (
  <div className="project">
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Technologies: {technologies.join(', ')}</p>
  </div>
);

export default Project;
