import './App.css'
import Layout from './layout/Layout'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'

function App() {
  const routes = createBrowserRouter([
    {path: '', element : <Layout/> ,children:[
      {index: true, element : <HomePage/>},
      {path: 'skills', element : <SkillsPage/>},
      {path: 'projects', element : <ProjectsPage/>},
      {path: 'projects/:projectId', element: <ProjectDetailsPage/>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
