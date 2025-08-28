import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectsList({ projects }) {
  return (
    <div className="mt-8 space-y-8">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}


