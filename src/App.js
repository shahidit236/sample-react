import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contacts from './components/pages/Contacts'
import Login from './components/pages/Login'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/' element={<Blog/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App