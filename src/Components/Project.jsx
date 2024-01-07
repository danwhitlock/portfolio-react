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
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {category}
            </span>
          ))}

        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={project.href}>
              <span className="absolute inset-0" />
              {project.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
        </div>
      </article>
    );
}