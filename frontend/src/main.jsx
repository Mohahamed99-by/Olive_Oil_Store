import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import AdminContacts from './admin/AdminContacts'
// import AdminOrdersPage from './admin/AdminOrdersPage'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    {/* <AdminOrdersPage />
    <AdminContacts /> */}
    <App />
  </StrictMode>,
)
