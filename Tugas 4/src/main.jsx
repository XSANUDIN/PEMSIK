import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './Page/Content.jsx'
import Sider from './Page/Sider.jsx'
import Layout from './Page/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout/>
  </StrictMode>,
)
