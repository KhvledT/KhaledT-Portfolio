import React from 'react'
import HeroIntro from '../components/HeroIntro'
import HeroSocialCard from '../components/HeroSocialCard'
import QuickStats from '../components/QuickStats'
import TechStack from '../components/TechStack'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import FinalCta from '../components/FinalCta'

export default function HomePage() {
  return (
    <main className="min-h-[calc(100dvh-64px)] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <HeroIntro />
          <HeroSocialCard />
        </div>
      </section>

      <QuickStats />
      <TechStack />
      <Services />
      <FeaturedProjects />
      <FinalCta />
    </main>
  )
}
