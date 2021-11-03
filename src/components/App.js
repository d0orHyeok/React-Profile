import React, { Suspense } from 'react';

// CSS Files
import './reset.css';
import './App.module.css';

// Components
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import About from './views/About/About';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import Footer from './views/Footer/Footer';

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
