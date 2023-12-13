import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <div>
      <BrowserRouter>

      <Header />

      <Routes>

          <Route 
          path='/'
          element={<Home />}/>

          <Route 
          path='/projects'
          element={<Projects />}/>
      
          <Route 
          path='/contact'
          element={<Contact />}/>

      </Routes>

      <Footer />

      </BrowserRouter>
    </div>
  );
}
