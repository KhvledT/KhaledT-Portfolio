import React from 'react'

const defaultStats = [
  { label: 'Years Experience', value: '1+', icon: 'fa-regular fa-clock' },
  { label: 'Projects Delivered', value: '15+', icon: 'fa-solid fa-diagram-project' },
  { label: 'Happy Clients', value: '10+', icon: 'fa-regular fa-face-smile' },
]

export default function QuickStats({ stats = defaultStats }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mx-auto flex w-max items-center gap-3">
              <i className={`${s.icon} text-xl text-blue-600 dark:text-blue-300`}></i>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-300">{s.value}</div>
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


