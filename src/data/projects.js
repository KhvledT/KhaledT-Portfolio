import Social1 from '../assets/imgs/Social-Media-App/Social-Media-App-1.png'
import Social2 from '../assets/imgs/Social-Media-App/Social-Media-App-2.png'
import Social3 from '../assets/imgs/Social-Media-App/Social-Media-App-3.png'
import Social4 from '../assets/imgs/Social-Media-App/Social-Media-App-4.png'

import Devfolio1 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-1.jpeg'
import Devfolio2 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-2.jpeg'
import Devfolio3 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-3.jpeg'
import Devfolio4 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-4.jpeg'

export const projects = [
  {
    id: 'social-media-app',
    title: 'Linkup – Social Media Platform',
    image: Social1,
    images: [Social1, Social2, Social3, Social4],
    summary: 'A modern social media platform built with React and Tailwind CSS featuring real-time updates and secure authentication.',
    details:
      'This project includes user authentication, profile management, dynamic post creation, and real-time interactions. It is built with React, Firebase, and Tailwind CSS, ensuring a responsive and engaging experience.',
    tech: ['React','Tailwind CSS', 'Framer Motion'],
    links: {
      demo: 'https://linkup-social-media-app.netlify.app',
      github: 'https://github.com/KhvledT/Linkup',
    },
  },
  {
    id: 'Devfolio-Portfolio',
    title: 'Devfolio Portfolio',
    image: Devfolio1,
    images: [Devfolio1, Devfolio2, Devfolio3, Devfolio4],
    summary: 'A responsive portfolio and business website built with React, Bootstrap 5, and Material UI.',
    details:
      'Created and deployed multiple portfolio/business websites using React. Designed mobile-first layouts with Bootstrap 5 and Material UI, ensuring cross-browser compatibility. Converted Figma designs into pixel-perfect implementations.',
    tech: ['React', 'Bootstrap 5', 'Material UI', 'Figma'],
    links: {
      demo: 'https://khvledt.github.io/Devfolio-Portfolio/',
      github: 'https://github.com/KhvledT/Devfolio-Portfolio',
    },
  },
]

export function getProjectById(projectId) {
  return projects.find((p) => p.id === projectId)
}


