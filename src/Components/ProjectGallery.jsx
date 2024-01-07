import React from 'react';
import Project from './Project';
import projectsData from '../projects.json';


  export default function ProjectGallery() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              These are the projects I've created and contributed to which I am most proud of.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projectsData.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  