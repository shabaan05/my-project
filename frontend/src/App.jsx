import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Donation from "./pages/Donations";
import Requests from './pages/Requests'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
 <Route path="/donate" element={<Donation />} />
  <Route path="/ngos" element={<Requests />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App


