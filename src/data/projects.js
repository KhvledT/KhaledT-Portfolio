// Gerold Portfolio
import Gerold1 from '../assets/imgs/Gerold-Portfolio/Gerold-Portfolio-1.png'
import Gerold2 from '../assets/imgs/Gerold-Portfolio/Gerold-Portfolio-2.png'
import Gerold3 from '../assets/imgs/Gerold-Portfolio/Gerold-Portfolio-3.png'
import Gerold4 from '../assets/imgs/Gerold-Portfolio/Gerold-Portfolio-4.png'

// Recipes App
import Recipes1 from '../assets/imgs/Recipes-App/Recipes-App-1.png'
import Recipes2 from '../assets/imgs/Recipes-App/Recipes-App-2.png'
import Recipes3 from '../assets/imgs/Recipes-App/Recipes-App-3.png'
import Recipes4 from '../assets/imgs/Recipes-App/Recipes-App-4.png'

// Social Media App
import Social1 from '../assets/imgs/Social-Media-App/Social-Media-App-1.png'
import Social2 from '../assets/imgs/Social-Media-App/Social-Media-App-2.png'
import Social3 from '../assets/imgs/Social-Media-App/Social-Media-App-3.png'
import Social4 from '../assets/imgs/Social-Media-App/Social-Media-App-4.png'
  
// Devfolio Portfolio
import Devfolio1 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-1.jpeg'
import Devfolio2 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-2.jpeg'
import Devfolio3 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-3.jpeg'
import Devfolio4 from '../assets/imgs/Devfolio-Portfolio/Devfolio-Portfolio-4.jpeg'

// Fork & Flame
import ForkFlame1 from '../assets/imgs/Fork-Flame/Fork-Flame-1.png'
import ForkFlame2 from '../assets/imgs/Fork-Flame/Fork-Flame-2.png'
import ForkFlame3 from '../assets/imgs/Fork-Flame/Fork-Flame-3.png'
import ForkFlame4 from '../assets/imgs/Fork-Flame/Fork-Flame-4.png'

export const projects = [
  {
    id: 'social-media-app',
    title: 'Linkup – Social Media Platform',
    image: Social1,
    images: [Social1, Social2, Social3, Social4],
    summary: 'A modern social media platform with real-time updates, secure authentication, and interactive user experience.',
    details: `Linkup is a full-featured social media platform built with React and Tailwind CSS, designed for a responsive and scalable architecture. 
    It includes secure user authentication with signup, login, and session handling. 
    Users can manage their profiles, create dynamic posts with media support, and engage in real-time interactions through comments and live updates. 
    The platform delivers an engaging and modern experience with smooth performance across devices.`,
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    links: {
      display: 'both',
      demo: 'https://linkup-social-media-app.netlify.app',
      github: 'https://github.com/KhvledT/Linkup',
    },
  },
  {
    id: 'fork-flame',
    title: 'Fork & Flame',
    image: ForkFlame1,
    images: [ForkFlame1, ForkFlame2, ForkFlame3, ForkFlame4],
    summary: 'Modern food delivery website with an intuitive UI and seamless ordering experience.',
    details: `Fork & Flame is a modern food delivery platform developed with React and Tailwind CSS, offering a responsive and user-friendly interface. 
    The project uses Material UI for consistent component styling and incorporates designs created with Figma to ensure a visually appealing experience. 
    Data fetching is optimized with Axios and React Query, providing smooth and efficient performance. 
    React Router enables seamless navigation across different sections, delivering a clean and intuitive ordering journey for users.`,
    tech: [
      'React',
      'Tailwind CSS',
      'Material UI',
      'Figma',
      'Axios',
      'React Router',
      'React Query',
    ],
    links: {
      display: 'demo',
      demo: 'https://fork-flame-e.netlify.app/',
    },
  },
  {
    id: 'recipes-app',
    title: 'Recipes App',
    image: Recipes1, // خلي بالك تضيف صورة رئيسية للمشروع عندك في الصور
    images: [Recipes1, Recipes2, Recipes3, Recipes4], // لو عندك صور متعددة للـ UI
    summary: 'Interactive recipes website with categorized food search and API integration.',
    details: `Recipes App is a dynamic food recipes platform built with React, providing users with the ability to browse and search for meals seamlessly. 
    The project leverages React Router for smooth navigation, Axios for API integration, and Hero UI for a clean, modern interface. 
    The responsive design ensures an optimized experience across all devices, offering a simple and engaging way for users to explore new meals.`,
    tech: [
      'React',
      'React Router',
      'Axios',
      'Hero UI',
    ],
    links: {
      display: 'demo',
      demo: 'https://recipes-app-e.netlify.app/',
      github: 'https://github.com/KhvledT/Recipes',
    },
  },
  {
    id: 'devfolio-portfolio',
    title: 'Devfolio – Portfolio Website',
    image: Devfolio1,
    images: [Devfolio1, Devfolio2, Devfolio3, Devfolio4],
    summary: 'A responsive portfolio & business website featuring modern UI, mobile-first design, and reusable components.',
    details: `Devfolio is a responsive portfolio and business website created using React, Bootstrap 5, and Material UI. 
    The design was carefully translated from Figma into a pixel-perfect implementation while maintaining cross-browser compatibility. 
    It follows a mobile-first approach to ensure seamless performance across all screen sizes. 
    The project emphasizes clean, scalable code that makes it easy to maintain and expand in the future, while offering a modern and professional user interface.`,
    tech: ['React', 'Bootstrap 5', 'Material UI', 'Figma'],
    links: {
      display: 'both',
      demo: 'https://khvledt.github.io/Devfolio-Portfolio/',
      github: 'https://github.com/KhvledT/Devfolio-Portfolio',
    },
  },
  {
    id: 'gerold-portfolio',
    title: 'Gerold – Portfolio Website',
    image: Gerold1,
    images: [Gerold1, Gerold2, Gerold3, Gerold4],
    summary: 'A responsive personal portfolio website built entirely with vanilla HTML, CSS, and JavaScript, focusing on performance and usability.',
    details: `Gerold Portfolio is a clean and modern portfolio website developed without external frameworks, using only HTML, CSS, and JavaScript. 
    It is fully responsive across all devices and optimized for both performance and accessibility. 
    The project features manually coded animations and transitions to deliver a smooth browsing experience. 
    Key sections include Home, About, Projects, and Contact, offering a well-structured and professional showcase of work. 
    This project served as an excellent opportunity to strengthen core front-end skills, ensuring a strong foundation in performance, structure, and usability.`,
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: {
      display: 'demo', // 'both' | 'demo' | 'github'
      demo: 'https://khvledt.github.io/Gerold-Portfolio/',
    },
  }
]

export function getProjectById(projectId) {
  return projects.find((p) => p.id === projectId)
}


