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

// E-commerce
import Ecommerce1 from '../assets/imgs/E-commerce/E-commerce-1.png'
import Ecommerce2 from '../assets/imgs/E-commerce/E-commerce-2.png'
import Ecommerce3 from '../assets/imgs/E-commerce/E-commerce-3.png'
import Ecommerce4 from '../assets/imgs/E-commerce/E-commerce-4.png'
import Ecommerce5 from '../assets/imgs/E-commerce/E-commerce-5.png'
import Ecommerce6 from '../assets/imgs/E-commerce/E-commerce-6.png'
import Ecommerce7 from '../assets/imgs/E-commerce/E-commerce-7.png'
import Ecommerce8 from '../assets/imgs/E-commerce/E-commerce-8.png'

// WatchIt
import WatchIt1 from '../assets/imgs/WatchIt/WatchIt-1.png'
import WatchIt2 from '../assets/imgs/WatchIt/WatchIt-2.png'
import WatchIt3 from '../assets/imgs/WatchIt/WatchIt-3.png'
import WatchIt4 from '../assets/imgs/WatchIt/WatchIt-4.png'
import WatchIt5 from '../assets/imgs/WatchIt/WatchIt-5.png'

export const projects = [
  {
    id: 'social-media-app',
    title: 'Linkup – Social Media Platform',
    image: Social1,
    images: [Social1, Social2, Social3, Social4],
    summary: 'A modern social media platform with infinite scroll, real-time updates, and enhanced developer tools for seamless user experience.',
    details: `Linkup is a full-featured social media platform built with React, offering a responsive and scalable architecture. 
    It includes secure user authentication with signup, login, and session handling using React Hook Form. 
    Users can manage profiles, create dynamic posts with media support, and interact in real-time with comments and live updates. 
    Infinite scroll ensures a smooth browsing experience, while TanStack Query and Axios optimize data fetching and caching. 
    Styled with Tailwind CSS and Hero UI, the app delivers a modern interface. 
    React Router DOM handles seamless navigation, and React DevTools integration supports debugging and performance monitoring during development.`,
    tech: [
      'React',
      'React Router DOM',
      'TanStack Query',
      'React DevTools',
      'Axios',
      'Hero UI',
      'React Hook Form',
      'Infinite Scroll',
      'Tailwind CSS',
    ],
    links: {
      display: 'both',
      demo: 'https://linkup-social-media-app.netlify.app',
      github: 'https://github.com/KhvledT/Linkup',
    },
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Web Application',
    image: Ecommerce1,
    images: [Ecommerce1, Ecommerce2, Ecommerce3, Ecommerce4, Ecommerce5, Ecommerce6, Ecommerce7, Ecommerce8],
    summary: 'Modern e-commerce platform with real payment integration, secure authentication, and SEO optimization.',
    details: `A full-featured e-commerce web application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. 
    The platform supports real payment integration with Stripe, secure checkout, and complete protection of customer data. 
    It includes shopping cart, order management, user profile, and real account system powered by NextAuth for authentication. 
    Context API ensures efficient state management and smooth data flow across the app. 
    Designed as a Single Page Application (SPA) with reusable UI components, dynamic routing, and strong SEO optimization. 
    Achieved high Lighthouse scores: Performance 96, Accessibility 90, SEO 100, Best Practices 100.`,
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'NextAuth',
      'Context API',
      'Stripe',
    ],
    links: {
      display: 'both',
      demo: 'https://e-commerce-ashy-two-19.vercel.app/',
      github: 'https://github.com/KhvledT/E-Commerce',
    },
  },  
  {
    id: 'watchit',
    title: 'WatchIt',
    image: WatchIt1,
    images: [WatchIt1, WatchIt2, WatchIt3, WatchIt4, WatchIt5],
    summary: 'Movies & TV shows platform with trending, popular, trailers, and reviews powered by TMDB API.',
    details: `WatchIt is a modern entertainment platform that allows users to explore movies and TV shows in detail. 
    The app integrates TMDB API to provide trending and popular titles, trailers, and user reviews. 
    Built with React and styled using Tailwind CSS and Hero UI, it ensures a responsive and visually appealing experience. 
    React Router enables seamless navigation, while TanStack Query and Axios are used for optimized data fetching and state management.`,
    tech: [
      'React',
      'React Router',
      'TanStack Query',
      'Axios',
      'Tailwind CSS',
      'Hero UI',
    ],
    links: {
      display: 'both',
      demo: 'https://watchit-e.netlify.app/',
      github: 'https://github.com/KhvledT/WatchIt',
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
    image: Recipes1, 
    images: [Recipes1, Recipes2, Recipes3, Recipes4],
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
      display: 'demo',
      demo: 'https://khvledt.github.io/Devfolio-Portfolio/',
      github: 'https://github.com/KhvledT/Devfolio-Portfolio',
    },
  }
]

export function getProjectById(projectId) {
  return projects.find((p) => p.id === projectId)
}


