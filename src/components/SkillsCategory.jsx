import React from 'react'

export default function SkillsCategory({ category }) {
  if (!category) return null
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
        <i className={`${category.icon} mr-2`}></i>
        {category.label}
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => {
          const label = typeof item === 'string' ? item : item.name
          return (
            <span key={label} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-gray-900 dark:text-blue-300">
              {label}
            </span>
          )
        })}
      </div>
    </div>
  )
}


