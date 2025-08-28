import React from 'react'

export default function SkillsCertifications({ items }) {
  if (!items?.length) return null
  return (
    <section className="mx-auto max-w-5xl px-6 py-6">
      <h2 className="text-xl font-semibold">Certifications</h2>
      <ul className="mt-4 space-y-2">
        {items.map((c) => (
          <li key={c} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <i className="fa-regular fa-circle-check text-blue-600 dark:text-blue-300"></i>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


