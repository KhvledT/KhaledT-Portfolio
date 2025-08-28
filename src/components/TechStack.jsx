import React from 'react'

export default function TechStack({ items = ['React','Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'UI Frameworks (Material UI)', 'State Management', 'API Integration', 'Performance Optimization', 'Responsive Design', 'Version Control (Git & GitHub)'] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((t) => (
          <span key={t} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-gray-800 dark:text-blue-300">{t}</span>
        ))}
      </div>
    </section>
  )
}


