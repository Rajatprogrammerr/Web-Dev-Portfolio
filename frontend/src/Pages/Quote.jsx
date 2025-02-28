import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const CreativeText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Initial animation
    gsap.from(textRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();

      // Calculate relative position
      const x = (clientX - left - width / 2) / 50;
      const y = (clientY - top - height / 2) / 50;

      // Apply transform with smooth transition
      gsap.to(text, {
        duration: 0.5,
        x: x,
        y: y,
        rotateX: -y,
        rotateY: x,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      // Reset position when mouse leaves
      gsap.to(text, {
        duration: 0.5,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    // On mobile: full width and auto height; on md and up: use your custom w-dvw and h-dvh
    <div
      ref={containerRef}
      className="w-full h-full min-h-screen flex items-center justify-center overflow-hidden perspective-1000 px-4"
    >
      <div ref={textRef} className="relative flex flex-col gap-3 items-center justify-center text-center">
        {/* Dynamic font sizes for different screens */}
        <h1
          id='box'
          className="text-[10vw] sm:text-[8vw] md:text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-default select-none"
        >
          CREATIVE
        </h1>
        <h1
          id='box'
          className="text-[10vw] sm:text-[8vw] md:text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 cursor-default select-none -mt-2 sm:-mt-4 md:-mt-10"
        >
          DEVELOPER
        </h1>
        {/* Responsive Border Corners */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -left-2 -top-2 sm:-left-4 sm:-top-4 w-4 h-4 sm:w-8 sm:h-8 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-blue-400"></div>
          <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 w-4 h-4 sm:w-8 sm:h-8 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-blue-400"></div>
          <div className="absolute -left-2 -bottom-2 sm:-left-4 sm:-bottom-4 w-4 h-4 sm:w-8 sm:h-8 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-blue-400"></div>
          <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 w-4 h-4 sm:w-8 sm:h-8 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-blue-400"></div>
        </div>
      </div>
    </div>

  );
};

export default CreativeText;
