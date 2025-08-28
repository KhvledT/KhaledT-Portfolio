import React from 'react'
import cv from '../assets/cv/Khaled_Tarek_CV.pdf'

export default function HeroIntro({ role = 'Frontend Developer', name = 'Khaled Tareq Elsayed', cvHref = cv }) {

  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-300">
        <i className="fa-solid fa-code mr-2"></i>
        {role}
      </p>
      <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-4xl">{name}</h1>
      <p className="mt-5 max-w-prose text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          I’m a Frontend Developer dedicated to building modern, responsive, and user-friendly web apps.  
          Skilled in React.js, JavaScript (ES6+), and UI frameworks, I focus on clean code, performance, and accessibility.  
          I’ve worked on projects like social platforms, E-commerce websites, and dynamic dashboards.  
          Currently exploring the React ecosystem and backend basics with Node.js.
      </p>
      <div className="mt-8">
        <a
          href={cv}
          download
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white shadow-sm transition hover:scale-[1.02] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:bg-blue-400 dark:text-gray-900"
        >
          <i className="fa-solid fa-download"></i>
          Download CV
        </a>
      </div>
    </div>
  )
}


