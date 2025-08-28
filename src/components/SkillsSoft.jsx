import React from 'react'

export default function SkillsSoft({ items }) {
  if (!items?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-6 py-6">
      <h2 className="text-xl font-semibold">Soft skills</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-gray-800 dark:text-blue-300">{s}</span>
        ))}
      </div>
    </section>
  )
}


