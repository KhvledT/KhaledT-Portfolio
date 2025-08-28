import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <NavLink to="/" className="text-lg font-semibold text-blue-600 dark:text-blue-300">
          <i className="fa-solid fa-code mr-2"></i>
          Khaled T.
        </NavLink>
        <div className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 dark:text-blue-300':'text-gray-700 dark:text-gray-300'}`}>
            Home
          </NavLink>
          <NavLink to="/skills" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 dark:text-blue-300':'text-gray-700 dark:text-gray-300'}`}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 dark:text-blue-300':'text-gray-700 dark:text-gray-300'}`}>
            Projects
          </NavLink>
        </div>
      </nav>
    </header>
  )
}


