import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NameContext } from './component/Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NameContext>

    <App />
  </NameContext>
  </BrowserRouter>,
)
