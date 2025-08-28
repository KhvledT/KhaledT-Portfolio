import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  )
}
