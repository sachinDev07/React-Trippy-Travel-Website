import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Service from './pages/Service';

const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
     <Footer/> 
    </Router>
  )
}

export default App
