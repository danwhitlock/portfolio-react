const project = [
    {
      id: 1,
      imageSrc: './src/assets/ProjectTwo.png',
      title: 'Rock, Paper, Scissors',
      href: '#',
      description:
        'A game of rock, paper, scissors played in the browser against the computer. The first to five points wins!',
        categories: ['JavaScript', 'HTML', 'CSS']
    },
    {
      id: 2,
      imageSrc: './src/assets/ProjectTwo.png',
      title: 'Rock, Paper, Scissors',
      href: '#',
      description:
        'A game of rock, paper, scissors played in the browser against the computer. The first to five points wins!',
      categories: ['JavaScript', 'HTML', 'CSS']
    },
    {
      id: 3,
      imageSrc: './src/assets/ProjectTwo.png',
      title: 'Rock, Paper, Scissors',
      href: '#',
      description:
        'A game of rock, paper, scissors played in the browser against the computer. The first to five points wins!',
        categories: ['JavaScript', 'HTML', 'CSS']
    },
    {
      id: 4,
      imageSrc: './src/assets/ProjectTwo.png',
      title: 'Rock, Paper, Scissors',
      href: '#',
      description:
        'A game of rock, paper, scissors played in the browser against the computer. The first to five points wins!',
categories: ['JavaScript', 'HTML', 'CSS']
    },
  ]
  
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
            {project.map((project) => (
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
            ))}
          </div>
        </div>
      </div>
    )
  }
  