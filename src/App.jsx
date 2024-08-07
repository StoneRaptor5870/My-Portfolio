import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Project from "./pages/Project";
import Scrollbar from 'smooth-scrollbar';
import { useEffect, useState } from "react";
import { BsArrowUp } from 'react-icons/bs'



const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        {/* <Navbar /> */}
      </div>
      <Routes>
        <Route exact path="/" element={(
          <>
            <div className='relative z-0 main_section_ps'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />

              <Works />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </>
        )} />
        <Route exact path="/project" element={(
          <div className="proj_page">
            <Project />
          </div>
        )} />

      </Routes>

      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 shadow cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  )
}

export default App;
