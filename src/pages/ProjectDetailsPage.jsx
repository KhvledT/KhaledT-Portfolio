import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import ImageLightbox from '../components/ImageLightbox'

export default function ProjectDetailsPage() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

  if (!project) {
    return (
      <main className="min-h-[calc(100dvh-64px)] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">
            <i className="fa-regular fa-circle-xmark mr-2 text-blue-600 dark:text-blue-300"></i>
            Project not found
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">The project you are looking for does not exist.</p>
          <Link to="/projects" className="mt-6 inline-block text-blue-600 underline underline-offset-4 dark:text-blue-300">Back to Projects</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100dvh-64px)] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <section className="mx-auto max-w-5xl px-6 py-12">
        {/* breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-300">Projects</Link>
          <i className="fa-solid fa-angle-right opacity-60"></i>
          <span className="truncate" title={project.title}>{project.title}</span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Carousel showing all images, starting with the main image */}
          {(() => {
            const allImages = Array.isArray(project.images) && project.images.length > 0 ? project.images : [project.image]
            return <Carousel images={allImages} title={project.title} />
          })()}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">
                <i className="fa-regular fa-file-lines mr-2 text-blue-600 dark:text-blue-300"></i>
                {project.title}
              </h1>
            </div>

            {project.summary ? (
              <p className="-mt-2 text-gray-700 dark:text-gray-300">{project.summary}</p>
            ) : null}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-base font-semibold text-blue-600 dark:text-blue-300">About this project</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{project.details}</p>
            </div>

            {project.tech?.length ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="text-base font-semibold text-blue-600 dark:text-blue-300">Tech stack</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-gray-900 dark:text-blue-300">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {(() => {
              const display = project.links?.display || (project.links?.demo && project.links?.github ? 'both' : project.links?.demo ? 'demo' : project.links?.github ? 'github' : null)
              return display ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="text-base font-semibold text-blue-600 dark:text-blue-300">Links</h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {(display === 'both' || display === 'demo') && project.links?.demo ? (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm transition hover:brightness-110 dark:bg-blue-400 dark:text-gray-900">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      Live Demo
                    </a>
                  ) : null}
                  {(display === 'both' || display === 'github') && project.links?.github ? (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-50 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-gray-800">
                      <i className="fa-brands fa-github"></i>
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
              ) : null
            })()}

            <div>
              <Link to="/projects" className="inline-flex items-center gap-1 text-blue-600 underline underline-offset-4 dark:text-blue-300">
                <i className="fa-solid fa-arrow-left"></i>
                Back to Projects
              </Link>
            </div>
          </div>
        </div>

        {/* No separate grid gallery; images are shown via the carousel above */}
      </section>
    </main>
  )
}

function Carousel({ images, title }) {
  const validImages = useMemo(() => images.filter(Boolean), [images])
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState({ open: false, start: 0 })

  if (!validImages.length) return null

  const goPrev = () => setIndex((prev) => (prev - 1 + validImages.length) % validImages.length)
  const goNext = () => setIndex((prev) => (prev + 1) % validImages.length)

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
        <img
          src={validImages[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="h-full w-full cursor-zoom-in object-cover"
          onClick={() => setLightbox({ open: true, start: index })}
        />

        {/* gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/20 to-transparent dark:from-black/40"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent dark:from-black/40"></div>

        {validImages.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-gray-700 shadow hover:bg-white dark:bg-gray-900/70 dark:text-gray-200"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-gray-700 shadow hover:bg-white dark:bg-gray-900/70 dark:text-gray-200"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}
      </div>

      {validImages.length > 1 && (
        <>
          <div className="mt-3 flex justify-center gap-2">
            {validImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
            {validImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg ring-1 ${i === index ? 'ring-blue-500' : 'ring-gray-300 dark:ring-gray-700'}`}
                aria-label={`Select image ${i + 1}`}
              >
                <img src={src} alt={`${title} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </>
      )}

      {lightbox.open && (
        <ImageLightbox
          images={validImages}
          startIndex={lightbox.start}
          title={title}
          onClose={() => setLightbox({ open: false, start: 0 })}
        />
      )}
    </div>
  )
}


