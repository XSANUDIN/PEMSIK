import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'
import AdminLayout from './Layouts/AdminLayouts'
import Mahasiswa from './Pages/Admin/Mahasiswa'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AdminLayout>
        <Mahasiswa />
      </AdminLayout>
  </StrictMode>,
)
