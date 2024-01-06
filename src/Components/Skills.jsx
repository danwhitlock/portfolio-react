const skills = [
    {
      name: 'HTML',
      category: 'Language',
      imageUrl:
        './src/assets/icons8-html.svg',
    },
    {
        name: 'CSS',
        category: 'Language',
        imageUrl:
        './src/assets/icons8-css.svg',
      },
      {
        name: 'JavaScript',
        category: 'Language',
        imageUrl:
        './src/assets/icons8-javascript.svg',
      },
      {
        name: 'Bootstrap',
        category: 'Framework',
        imageUrl:
        './src/assets/icons8-bootstrap.svg',
      },
      {
        name: 'Tailwind',
        category: 'Framework',
        imageUrl:
        './src/assets/icons8-tailwind-css.svg',
      },
      {
        name: 'jQuery',
        category: 'Framework',
        imageUrl:
        './src/assets/icons8-jquery.svg',
      },
      {
        name: 'React',
        category: 'Framework',
        imageUrl:
        './src/assets/icons8-react-js.svg',
      },
      {
        name: 'Node',
        category: 'Environment',
        imageUrl:
        './src/assets/icons8-node-js.svg',
      },
      {
        name: 'Scrum/Agile',
        category: 'Soft Skill',
        imageUrl:
        './src/assets/icons8-scrum-64.png',
      },
      {
        name: 'Project Mgmt',
        category: 'Soft Skill',
        imageUrl:
        './src/assets/icons8-project-plan-64.png',
      },
  ]
  
  export default function Skills() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Skills</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These are the technologies and related skills I'm proficient in. 
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {skills.map((skill) => (
              <li key={skill.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={skill.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{skill.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{skill.category}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  