import React, { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    const root = document.querySelector('html')
    if (dark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark') 
    } else {
      root.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-950 dark:text-gray-200">
      {/* subtle dotted grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          color: 'rgba(0,0,0,0.08)',
        }}
      ></div>

      <div className="relative mx-6 w-full max-w-sm rounded-2xl bg-white/70 p-8 text-center shadow-2xl ring-1 ring-gray-200/70 backdrop-blur-xl dark:bg-gray-800/60 dark:ring-gray-700/60">
        {/* logo spinner */}
        <div className="relative mx-auto h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 border-t-blue-600 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-2 border-dashed border-emerald-400/70 animate-spin" style={{ animationDuration: '2.2s' }}></div>
          <div className="absolute inset-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-sm font-extrabold text-white">
            KT
          </div>
        </div>

        <h2 className="mt-5 text-lg font-semibold">Loading...</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Please wait while we load the page...</p>

        {/* animated dots */}
        <div className="mt-3 flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600/80 animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600/60 animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  )
}


