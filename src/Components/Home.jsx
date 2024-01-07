import React from 'react';
import '../index.css'

export default function Home() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
          <div className="text-center justify-items-center">
          <img className='mb-6 w-28 h-28 mx-auto' src='./src/assets/dan.png'></img>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            My name is Dan.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm a Front-End Developer with a background in Art & Design, passionate about web design and functionality. I'm also a qualified Scrum Master & Project Manager with over a decade of experience delivering complex change programmes for clients in regulated environments.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm a driven learner - I believe strongly in continuous self-improvement and spend my free time developing my skills and branching out into new areas.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.linkedin.com/in/dan-whitlock/"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 custom-button"
              >
                LinkedIn
              </a>
              <a
                href="https://drive.google.com/file/d/13ZEsE_ui5nMMAkzYGFSajcTZodyJPkLb/view?usp=sharing"
                target='_blank'
                download="Daniel-Whitlock-CV.pdf"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 custom-button"
              >
                CV
              </a>
              <a
                href="https://github.com/danwhitlock"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 custom-button"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}