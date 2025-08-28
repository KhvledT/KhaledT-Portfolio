import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const displayImage = Array.isArray(project.images) && project.images.length > 0 ? project.images[0] : project.image
  return (
    <article className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:grid-cols-3">
      <Link to={`/projects/${project.id}`} className="md:col-span-2">
        <img src={displayImage} alt={project.title} className="aspect-video w-full cursor-pointer rounded-xl object-cover transition hover:brightness-105" />
      </Link>
      <div className="md:col-span-1">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{project.summary}</p>
        <Link
          to={`/projects/${project.id}`}
          className="mt-4 inline-flex items-center gap-1 text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
        >
          <i className="fa-regular fa-circle-right"></i>
          More Details
        </Link>
      </div>
    </article>
  )
}


