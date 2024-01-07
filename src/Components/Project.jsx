import React from 'react'

export default function Project({project}) {
    return (
        <article key={project.id} className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <img src={project.imageSrc} alt={project.title}></img>
        </div>
        <div className="flex items-center gap-x-4 text-xs">
          {project.categories.map((category) => (
            <span
            key={category}  
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
            >
              {category}
            </span>
          ))}

        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0" />
              {project.title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={project.repo}
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Repository
              </a>
              <a
                href={project.live}
                target='_blank'
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Live Version
              </a>
            </div>
      </article>
    );
}