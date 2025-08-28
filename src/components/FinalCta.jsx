import React from 'react'
import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-md dark:from-blue-500 dark:to-indigo-500">
        <h2 className="text-2xl font-semibold">Let’s build something great together</h2>
        <p className="mt-2 max-w-prose text-blue-50">Have an idea or need help polishing your product’s UI? I’d love to help.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/projects" className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur transition hover:bg-white/20">Explore my work</Link>
          <Link to="/skills" className="rounded-xl bg-white px-5 py-3 text-blue-700 transition hover:brightness-[.98]">See my skills</Link>
        </div>
      </div>
    </section>
  )
}


