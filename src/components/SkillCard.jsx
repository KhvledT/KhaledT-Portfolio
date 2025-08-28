import React from 'react'

export default function SkillCard({ title, details, icon = 'fa-regular fa-circle-check' }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20"></div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-gray-900 dark:text-blue-300">
          <i className={icon}></i>
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mt-3 text-gray-700 dark:text-gray-300">{details}</p>
    </article>
  )
}


