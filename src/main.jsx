import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import App from './App.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

function Root() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(id)
  }, [])

  return (
    <StrictMode>
      {isLoading ? <LoadingScreen /> : <App />}
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
