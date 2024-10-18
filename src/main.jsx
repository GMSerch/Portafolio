import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <HeaderComponent />
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}  />
    </Routes>
   </BrowserRouter>
)
