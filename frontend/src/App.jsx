import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contactme from "./Pages/Contactme";
import { Toaster } from 'react-hot-toast';
import About from "./Pages/About";
import { useEffect, useRef, useState } from "react";
import Quote from "./Pages/Quote";
import "./App.css";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import {  Navigate, Route, Routes, useNavigate,useLocation } from "react-router-dom";

function App() {
  const cursorRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading state with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        // Update cursor position
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        // Toggle the active class
        if (e.target.id === "box" || e.target.closest("#box")) {
          cursorRef.current.classList.add("active");
        } else {
          cursorRef.current.classList.remove("active");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (loading) {
      const titles = gsap.utils.toArray("#intro");
      const tL = gsap.timeline();

      titles.forEach((title) => {
        const splitText = new SplitTextJS(title);
        tL.from(splitText.chars, {
          opacity: 0,
          y: 40,
          rotateX: -90,
          stagger: 0.02,
        }, "<");

        tL.to(splitText.chars, {
          opacity: 1,
          y: -40,
          rotateX: 90,
          stagger: 0.02,
        }, "<1");

        tL.eventCallback("onComplete", () => {
          splitText.revert(); // Revert split text after animation
        });
      });

      
    }
  }, [loading]);

  

  return (
    
      <main className="relative h-screen overflow-x-hidden">
        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="cursor hidden lg:block w-[20px] h-[20px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-white fixed mix-blend-difference pointer-events-none z-[100] transition-transform duration-300 ease-in-out"
        ></div>

        {loading ? (
          <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center relative">
              <p id="intro" className="text-5xl font-bold text-[#5f0f40] font3 text-center absolute">
                Eat
              </p>
              <p id="intro" className="text-5xl font-bold text-[#9a031e] font3 text-center absolute">
                Sleep
              </p>
              <p id="intro" className="text-5xl font-bold text-[#fb8b24] font3 text-center absolute">
                Code
              </p>
              <p id="intro" className="text-5xl font-bold text-[#e36414] font3 text-center absolute">
                Repeat
              </p>
              <p id="intro" className="text-5xl font-bold text-[#0f4c5c] font3 text-center">
                Rajat Singh Portfolio
              </p>
            </div>
          </div>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Quote />} />
              <Route path="/start" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contactme />} />
            </Routes>
            <Toaster />
          </>
        )}
      </main>
    
  );
}

export default App;
