import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {InvoiceApp} from "./InvoiceApp.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceApp />
  </StrictMode>,
)
