import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json'; 

const ProjectDetails = () => {
  const { projectId } = useParams(); 
  const project = projects.find(p => p.id.toString() === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div style = {{padding : '200px'}}>
      <h1>{project.title}</h1>
      
    </div>
  );
};

export default ProjectDetails;

