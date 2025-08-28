import React from 'react'

export default function SkillsTabs({ categories, activeKey, onChange }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => onChange(c.key)}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-1 transition ${
            activeKey === c.key
              ? 'bg-blue-600 text-white ring-blue-600'
              : 'bg-white text-gray-700 ring-gray-300 hover:bg-blue-50 hover:text-blue-700 hover:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-blue-300 dark:hover:ring-gray-600'
          }`}
          aria-pressed={activeKey === c.key}
        >
          <i className={c.icon}></i>
          {c.label}
        </button>
      ))}
    </div>
  )
}


