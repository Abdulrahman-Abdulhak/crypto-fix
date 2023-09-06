import React from 'react'

import Nav from './components/nav/Nav'
import Home from './pages/Home/Home'
import Footer from './components/footer/Footer'

import './App.css'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
