import React from 'react'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Sushi from './Sushi'
import Chivito from './Chivito'



const App = () => {
  return (
    <div>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/amma' element={<Sushi/>}></Route>
          <Route path='/nana' element={<Chivito/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App