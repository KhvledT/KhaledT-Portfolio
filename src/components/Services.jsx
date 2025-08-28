import React from 'react'

const defaultServices = [
  { 
    title: 'Frontend Development', 
    desc: 'Develop modern, responsive, and scalable web applications using React.js and Next.js.', 
    icon: 'fa-solid fa-code'
  },
  { 
    title: 'UI/UX Implementation', 
    desc: 'Translate creative designs into interactive interfaces with focus on accessibility and clean code.', 
    icon: 'fa-solid fa-object-group'
  },
  { 
    title: 'State Management', 
    desc: 'Manage complex app states efficiently using Redux and React Query for better performance.', 
    icon: 'fa-solid fa-diagram-project'
  },
  { 
    title: 'Web Optimization', 
    desc: 'Improve loading speed, performance, and SEO with best practices in frontend optimization.', 
    icon: 'fa-solid fa-rocket'
  },
  { 
    title: 'API Integration', 
    desc: 'Connect applications with RESTful APIs to deliver dynamic, data-driven experiences.', 
    icon: 'fa-solid fa-plug'
  },
  { 
    title: 'Version Control', 
    desc: 'Efficient collaboration and project management using Git and GitHub best practices.', 
    icon: 'fa-solid fa-code-branch'
  },
];



export default function Services({ items = defaultServices }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold">What I can do for you</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((card) => (
          <article key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <i className={`${card.icon} text-xl text-blue-600 dark:text-blue-300`}></i>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">{card.title}</h3>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}


