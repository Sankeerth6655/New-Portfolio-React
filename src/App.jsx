import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bg from './assets/3407044.jpg';

function App() {
  return (
    <div className="bg-black" style={{backgroundImage:`
    linear-gradient(
      rgba(0,0,0,0.6),
      rgba(0,0,0,0.9)
    ),
    url(${bg})
  `,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  backgroundAttachment: `fixed`,
  backgroundRepeat: `no-repeat`,}}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
