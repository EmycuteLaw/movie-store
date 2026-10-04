import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NameContext } from './component/context/UserContext.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NameContext>
      <App />
    </NameContext>

  </BrowserRouter>,
)
