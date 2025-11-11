import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import UserContext from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </StrictMode>,
)

