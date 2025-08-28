import React from 'react'

export default function SkillsTools({ items }) {
  if (!items?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-6 py-6">
      <h2 className="text-xl font-semibold">Tools I use</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((t) => (
          <div key={t.name} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <i className={`${t.icon} text-blue-600 dark:text-blue-300`}></i>
            <span className="text-sm">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


