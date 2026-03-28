import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import PasswordGate from './components/PasswordGate'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordGate>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PasswordGate>
  </StrictMode>,
)
