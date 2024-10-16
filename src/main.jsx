import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}  />
    </Routes>
   </BrowserRouter>
)
