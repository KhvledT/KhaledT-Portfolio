import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function FeaturedProjects({ take = 2 }) {
  const featured = projects.slice(0, take)
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link to="/projects" className="text-sm text-blue-600 underline underline-offset-4 dark:text-blue-300">View all</Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {featured.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <img src={p.image} alt={p.title} className="aspect-video w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-gray-700 dark:text-gray-300">{p.summary}</p>
              <Link to={`/projects/${p.id}`} className="mt-3 inline-block text-blue-600 underline underline-offset-4 dark:text-blue-300">More Details</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


