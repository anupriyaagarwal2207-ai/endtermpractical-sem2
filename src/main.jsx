import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Question1 from './Question1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Question1 />
  </StrictMode>,
)
