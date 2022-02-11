import React from 'react';
import Project from './Project';
import useProjects from '../hooks/useProjects';

const ProjectsSection = () => {

  const projectsData = useProjects();

  return (
      <section className='container p-8 gap-4 flex flex-col'>
        <h2 className=' text-center uppercase font-bold text-4xl pt-4 pb-2'>Projects</h2>
        <div>
        {
          projectsData.map(project => (
           <Project key={project.node.id} project={project.node} />
          ))
        }
        </div>

      </section>
  )
};

export default ProjectsSection;
