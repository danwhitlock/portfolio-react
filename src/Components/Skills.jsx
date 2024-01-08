import React from "react";

// Function to create Skills component using data from skills.json
export default function Skills({ skills }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto">
        <div className="max-w-2xl mx-auto pb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These are the technologies and related skills I'm proficient in.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 pt-16 border-t"
        >
          {skills.map((skill) => (
            <li key={skill.id}>
              <div className="flex items-center justify-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={skill.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {skill.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-blue-600">
                    {skill.category}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
