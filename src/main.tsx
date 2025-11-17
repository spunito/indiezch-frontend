import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IndiezchHome } from './IndiezchHome'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <IndiezchHome />
    </BrowserRouter>
  </StrictMode>,
)
