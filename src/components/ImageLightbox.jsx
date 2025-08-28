import React, { useEffect, useState } from 'react'

export default function ImageLightbox({ images = [], startIndex = 0, title = '', onClose }) {
  const validImages = images.filter(Boolean)
  const [index, setIndex] = useState(Math.min(Math.max(startIndex, 0), validImages.length - 1))

  useEffect(() => {
    setIndex(Math.min(Math.max(startIndex, 0), validImages.length - 1))
  }, [startIndex, validImages.length])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft') setIndex((p) => (p - 1 + validImages.length) % validImages.length)
      if (e.key === 'ArrowRight') setIndex((p) => (p + 1) % validImages.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [validImages.length, onClose])

  if (!validImages.length) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/80">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-900 shadow hover:bg-white"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="flex h-full w-full items-center justify-center px-4">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => setIndex((p) => (p - 1 + validImages.length) % validImages.length)}
          className="mr-3 hidden rounded-full bg-white/90 p-3 text-gray-900 shadow hover:bg-white md:inline-flex"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="relative max-h-[80vh] w-full max-w-5xl overflow-hidden rounded-xl bg-black">
          <img src={validImages[index]} alt={`${title || 'image'} ${index + 1}`} className="mx-auto h-full w-full object-contain" />
          {title ? (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-center text-sm text-white/90">
              {title}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          aria-label="Next image"
          onClick={() => setIndex((p) => (p + 1) % validImages.length)}
          className="ml-3 hidden rounded-full bg-white/90 p-3 text-gray-900 shadow hover:bg-white md:inline-flex"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {validImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {validImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}


