import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const mode = dark ? 'dark' : 'light'
    root.classList.toggle('dark', dark)
    root.setAttribute('data-theme', mode)
    localStorage.setItem('theme', mode)
  }, [dark])

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <NavLink to="/" className="text-lg font-semibold text-blue-600 dark:text-blue-300">
          <i className="fa-solid fa-code mr-2"></i>
          Khaled T.
        </NavLink>
        {/* Desktop nav */}
        <div className="hidden items-center gap-4 text-sm md:flex">
          <NavLink to="/" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 dark:text-blue-300':'text-gray-700 dark:text-gray-300'}`}>
            Home
          </NavLink>
          <NavLink to="/skills" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 dark:text-blue-300':'text-gray-700 dark:text-gray-300'}`}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({isActive})=>`hover:text-blue-600 ${isActive? 'text-blue-600 dark:text-blue-300':'text-gray-700 dark:text-gray-300'}`}>
            Projects
          </NavLink>
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <>
                <i className="fa-solid fa-moon"></i>
                Dark
              </>
            ) : (
              <>
                <i className="fa-regular fa-sun"></i>
                Light
              </>
            )}
          </button>
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-5xl px-6 pb-4">
            <div className="mt-2 space-y-1 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <NavLink onClick={() => setOpen(false)} to="/" className={({isActive})=>`block rounded-lg px-3 py-2 text-sm ${isActive? 'bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-300':'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/skills" className={({isActive})=>`block rounded-lg px-3 py-2 text-sm ${isActive? 'bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-300':'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}>Skills</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/projects" className={({isActive})=>`block rounded-lg px-3 py-2 text-sm ${isActive? 'bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-300':'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}`}>Projects</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


