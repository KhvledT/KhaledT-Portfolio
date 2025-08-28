import React from 'react'
import { projects } from '../data/projects'
import ProjectsHeader from '../components/ProjectsHeader'
import ProjectsList from '../components/ProjectsList'

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100dvh-64px)] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <ProjectsHeader />
        <ProjectsList projects={projects} />
      </section>
    </main>
  )
}
