import React from 'react'

export default function SkillsLearning({ items }) {
  if (!items?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-6 py-6">
      <h2 className="text-xl font-semibold">Currently learning</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="rounded-full bg-white px-3 py-1 text-sm text-gray-800 ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700">{s}</span>
        ))}
      </div>
    </section>
  )
}


