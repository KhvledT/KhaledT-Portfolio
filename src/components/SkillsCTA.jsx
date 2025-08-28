import React from 'react'
import { Link } from 'react-router-dom'

export default function SkillsCTA({ linkedinUrl = 'https://www.linkedin.com/' }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-md dark:from-blue-500 dark:to-indigo-500">
        <h3 className="text-xl font-semibold">Want to see these skills in action?</h3>
        <p className="mt-2 max-w-prose text-blue-50">Browse projects that apply these patterns and tools in real products.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/projects" className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur transition hover:bg-white/20">Explore Projects</Link>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-5 py-3 text-blue-700 transition hover:brightness-[.98]">Connect on LinkedIn</a>
        </div>
      </div>
    </section>
  )
}


