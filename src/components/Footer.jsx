import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>© {new Date().getFullYear()} Khaled Tareq Elsayed. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


