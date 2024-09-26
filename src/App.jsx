
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'

import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory  from './pages/WatchHistory'
import { useState } from 'react'


function App() {




  return (
    <>
   
   <Header/>

   <Routes>
     <Route path='/' element={  <LandingPage/>  }/>
     <Route path='/home' element={  <Home/>  }/>
     <Route path='/watch-history' element={  <WatchHistory/>  }/>

   </Routes>

   <Footer/>

    </>
  )
}

export default App
