import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/Component/Navbar';
import Home from './assets/Pages/Home';
import Contact from './assets/Pages/Contact';
import About from './assets/Pages/About';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="flex">
          <Navbar />
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;