import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';
import './index.css';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <main className="overflow-hidden">
    <Hero />
    <TechStack />
    <Projects />
    <Contact />
  </main>
);

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-pink-500/30 bg-slate-950 text-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>

        <footer className="py-24 border-t border-white/5 text-center text-slate-400">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-10">
              <span className="text-4xl font-black tracking-tighter text-white">
                Thais Flores<span className="text-pink-400">.</span>
              </span>
              <p className="max-w-md text-xl font-light leading-relaxed text-balance text-slate-500 italic">
                "Diseñando experiencias digitales con creatividad y innovación"
              </p>
              <div className="h-[2px] w-20 bg-pink-500/20 rounded-full"></div>
              
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
