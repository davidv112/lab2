// Import StrictMode (for highlighting potential issues in development)
// and createRoot (to render React components into the DOM)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import global CSS file (styles)
import './index.css'

// Import the main App component
import App from './App.jsx'

// Create a root React DOM container inside the element with id="root"
// and render the App component inside React.StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
