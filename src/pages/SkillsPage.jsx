import React, { useMemo, useState } from 'react'
import SkillsTabs from '../components/SkillsTabs'
import SkillsCategory from '../components/SkillsCategory'
import SkillsCertifications from '../components/SkillsCertifications'
import SkillsSoft from '../components/SkillsSoft'
import SkillsTools from '../components/SkillsTools'
import SkillsLearning from '../components/SkillsLearning'
import SkillsCTA from '../components/SkillsCTA'

// Skills categories
const categories = [
  {
    key: 'frontend',
    label: 'Frontend',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 (Flexbox/Grid)', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 75 },
      { name: 'Accessibility (a11y)', level: 75 },
    ],
  },
  {
    key: 'frameworks',
    label: 'Frameworks',
    icon: 'fa-solid fa-cubes',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'React Router', level: 88 },
      { name: 'React Query (TanStack)', level: 70 },
      { name: 'Redux Toolkit', level: 70 },
      { name: 'Next.js', level: 70 },
      { name: 'Axios', level: 85 },
    ],
  },
  {
    key: 'styling',
    label: 'UI & Styling',
    icon: 'fa-solid fa-palette',
    items: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap 5', level: 85 },
      { name: 'Material UI', level: 80 },
      { name: 'Framer Motion', level: 75 },
      { name: 'Dark/Light Mode', level: 85 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vite', level: 88 },
      { name: 'NPM', level: 80 },
      { name: 'Postman', level: 75 },
      { name: 'Figma', level: 70 },
    ],
  },
  {
    key: 'apis',
    label: 'APIs & Data',
    icon: 'fa-solid fa-database',
    items: [
      { name: 'REST APIs', level: 85 },
      { name: 'JSON', level: 90 },
      { name: 'Async/Await', level: 88 },
      { name: 'AJAX/Fetch', level: 85 },
    ],
  },
]

// Tools I use
const SkillsToolsItems = [
  {icon:'fa-brands fa-github', name:'GitHub'},
  {icon:'fa-solid fa-flask', name:'Postman'},
  {icon:'fa-solid fa-code', name:'VS Code'},
  {icon:'fa-solid fa-terminal', name:'CLI'},
  {icon:'fa-solid fa-robot', name:'Cursor AI'},
  {icon:'fa-solid fa-bolt', name:'Vite'},
  {icon:'fa-brands fa-react', name:'TanStack Query DevTools'},
  {icon:'fa-brands fa-figma', name:'Figma'},
]

// Certifications
const SkillsCertificationsItems = [
   'Web Development / Full Stack - Route Academy',
  ]

// Soft skills
const SkillsSoftItems = [
  'Collaboration',
  'Communication',
  'Problem Solving',
  'Attention to Detail',
  'Time Management',
  'Ownership',
  'Adaptability',
  'Critical Thinking'
]
// Currently learning
const SkillsLearningItems = [
  'Unit Testing with Jest/RTL',
  'Accessibility Audits',
  'Node.js'
]

export default function SkillsPage() {
  const [active, setActive] = useState(categories[0].key)
  const activeCategory = useMemo(() => categories.find((c) => c.key === active) || categories[0], [active])

  return (
    <main className="min-h-[calc(100dvh-64px)] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold md:text-4xl">
          <i className="fa-solid fa-screwdriver-wrench mr-2 text-blue-600 dark:text-blue-300"></i>
          Skills
        </h1>
        <p className="mt-2 max-w-2xl text-gray-700 dark:text-gray-300">
          Explore my stack by category. Levels are indicative and for quick reference.
        </p>

        {/* Tabs */}
        <SkillsTabs categories={categories} activeKey={active} onChange={setActive} />

        {/* Active category content */}
        <SkillsCategory category={activeCategory} />
      </section>

      {/* Certifications */}
      <SkillsCertifications items={SkillsCertificationsItems} />

      {/* Soft skills */}
      <SkillsSoft items={SkillsSoftItems} />

      {/* Tools I use */}
      <SkillsTools items={SkillsToolsItems} />

      {/* Currently learning */}
      <SkillsLearning items={SkillsLearningItems} />

      {/* CTA */}
      <SkillsCTA linkedinUrl="https://www.linkedin.com/in/khaled-tareq-742182322/" />
    </main>
  )
}
