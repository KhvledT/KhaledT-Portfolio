import React from 'react'

export default function HeroSocialCard({ linkedinUrl = 'https://www.linkedin.com/in/khaled-tareq-742182322/', githubUrl = 'https://github.com/KhvledT' }) {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-indigo-900 to-blue-600 opacity-90 shadow-md h-64 md:h-96">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 -rotate-6 bg-white/5"></div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 rotate-6 bg-white/5"></div>

      <div className="relative z-10 w-[260px] rounded-xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/20 shadow-xl">
        <div className="mb-3 text-center text-sm uppercase tracking-wider text-white/80">Connect with me</div>
        <div className="space-y-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-white/15 py-2 text-white ring-1 ring-white/25 transition hover:bg-white/25"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-white/15 py-2 text-white ring-1 ring-white/25 transition hover:bg-white/25"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}


