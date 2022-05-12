import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'

import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Service from './component/Services';
import Navbar from './component/Navbar'
import './index.css'
 function App() {
  return (
   <>
     <BrowserRouter>
     <Navbar />
        <Routes>
          
          <Route  exact  path='/' element = {<Home/>}/>
          <Route  path='/contact' element = {<Contact/>} />
          <Route  path='/service' element = {<Service />} />
          <Route  path='/about' element = {<About />}/>

          <Route path = '*' element =  {<Home />} />
        </Routes>
     </BrowserRouter>
   </>
  )
}

export default App;