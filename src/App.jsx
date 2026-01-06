import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Playtests from '../components/Playtests';
import TheGame from '../components/TheGame';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app">
        <Navbar></Navbar>
        <main className="container page">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="theGame" element={<TheGame/>}/>
            <Route path="aboutUs" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="playtests" element={<Playtests/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
