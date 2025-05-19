import React from 'react';
import e from '../assets/E18.png';
import E from '../assets/E2.png';
import d from '../assets/D5.png';
import u from '../assets/U13.png';
import c from '../assets/C3.png';
import a from '../assets/A25.png';
import t from '../assets/T6.png';
import i from '../assets/I3.png';
import o from '../assets/O3.png';
import n from '../assets/N6.png';
import x from '../assets/X3.png';
import p from '../assets/P3.png';
import r from '../assets/R11.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  const letterRefs = useRef([]);
  const textRef = useRef(null);
  const boxRef = useRef([]);
  const box2Ref = useRef([])

  useEffect(() => {
    gsap.set(letterRefs.current, {
      opacity: 0,
      y: 100
    })
    gsap.set(textRef.current, {
      opacity: 0,
      scale: 0.5,

    })
    gsap.set(boxRef.current, {
      opacity: 0,
      scale: 0.1

    })
    gsap.set(box2Ref.current, {
      opacity: 0,
      scale: 0.1

    })

    gsap.to(textRef.current, {
      opacity: 1,

      scale: 1,
      duration: 5,
      ease: "elastic.out(1, 0.5)"
    })


    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });

    tl.to(letterRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: {
        each: 0.1,
        ease: "power2.out"
      }
    })
    const t2 = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });
    t2.to(boxRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      stagger: {
        each: 0.4,
        ease: "power3.out"
      }
    })
    t2.to(box2Ref.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      stagger: {
        each: 0.4,
        ease: "power3.out"
      }
    })

    // Optional: Add hover animations for letters
    letterRefs.current.forEach((letter) => {
      if (letter) {
        letter.addEventListener('mouseenter', () => {
          gsap.to(letter, {
            scale: 1.2,
            rotation: 10,
            duration: 0.3
          });
        });

        letter.addEventListener('mouseleave', () => {
          gsap.to(letter, {
            scale: 1,
            rotation: 0,
            duration: 0.3
          });
        });
      }
    });

    // Cleanup function
    return () => {
      letterRefs.current.forEach((letter) => {
        if (letter) {
          letter.removeEventListener('mouseenter', () => { });
          letter.removeEventListener('mouseleave', () => { });
        }
      });
    };
  }, [])

  return (
    <div className="w-screen overflow-x-hidden md:mt-16 mt-24 ">
      <div className="flex justify-center items-center">
        {/* <h1 className="text-5xl font-bold text-center text-white font">Education/Experience</h1> */}
        <div className="flex lg:flex-row md:flex-col flex-col  justify-center items-center gap-4" ref={textRef}>
          <div className="flex justify-center items-center">
            <img ref={el => letterRefs.current[0] = el} className="sm:size-32 md:size-44 size-10" src={e} alt="E" />
            <img ref={el => letterRefs.current[1] = el} className="sm:size-12 md:size-16 size-10" src={d} alt="D" />
            <img ref={el => letterRefs.current[2] = el} className="sm:size-12 md:size-16 size-10" src={u} alt="U" />
            <img ref={el => letterRefs.current[3] = el} className="sm:size-12 md:size-16 size-10" src={c} alt="C" />
            <img ref={el => letterRefs.current[4] = el} className="sm:size-12 md:size-16 size-10" src={a} alt="A" />
            <img ref={el => letterRefs.current[5] = el} className="sm:size-12 md:size-16 size-10" src={t} alt="T" />
            <img ref={el => letterRefs.current[6] = el} className="sm:size-12 md:size-16 size-10" src={i} alt="I" />
            <img ref={el => letterRefs.current[7] = el} className="sm:size-12 md:size-16 size-10" src={o} alt="O" />
            <img ref={el => letterRefs.current[8] = el} className="sm:size-12 md:size-16 size-10" src={n} alt="N" />
          </div>
          <div className="flex justify-center items-center">
            <img ref={el => letterRefs.current[9] = el} className="sm:size-28 md:size-36 size-8" src={E} alt="E" />
            <img ref={el => letterRefs.current[10] = el} className="sm:size-12 md:size-16 size-8" src={x} alt="X" />
            <img ref={el => letterRefs.current[11] = el} className="sm:size-12 md:size-16 size-8" src={p} alt="P" />
            <img ref={el => letterRefs.current[12] = el} className="sm:size-12 md:size-16 size-8" src={e} alt="E" />
            <img ref={el => letterRefs.current[13] = el} className="sm:size-12 md:size-16 size-8" src={r} alt="R" />
            <img ref={el => letterRefs.current[14] = el} className="sm:size-12 md:size-16 size-8" src={i} alt="I" />
            <img ref={el => letterRefs.current[15] = el} className="sm:size-12 md:size-16 size-8" src={E} alt="E" />
            <img ref={el => letterRefs.current[16] = el} className="sm:size-12 md:size-16 size-8" src={n} alt="N" />
            <img ref={el => letterRefs.current[17] = el} className="sm:size-12 md:size-16 size-8" src={c} alt="C" />
            <img ref={el => letterRefs.current[18] = el} className="sm:size-12 md:size-16 size-8" src={e} alt="E" />
          </div>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className="flex items-center gap-10 justify-center w-screen ">
          {/* Timeline content */}
          <div className=" flex md:justify-around justify-center items-center gap-10 m-10 sm:m-6 md:m-0 w-full max-w-[1200px]">
            {/* Education - School */}
            <div className="flex flex-col gap-10 md:justify-start  justify-center items-center">
              <div className="cursor-pointer" ref={el => boxRef.current[0] = el}>
                <div className="rounded-xl border-2 border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] sm:h-[200px] md:h-[200px] hover:scale-110 transition duration-500 ease-in-out backdrop-blur-sm relative text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2014 - 2016</p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl font-bold mb-4 text-center">School Education</h3>
                  <p className="mb-2">• 10th Grade - 10 CGPA - (CBSE)</p>
                  <p>• 12th Grade - 91% - (CBSE)</p>
                  <p className="ml-3">Stream: PCM</p>
                </div>
              </div>

              {/* Education - College */}
              <div className="cursor-pointer" ref={el => boxRef.current[1] = el}>
                <div className="rounded-xl relative border-2 border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] hover:scale-110 transition duration-500 ease-in-out sm:h-[200px] md:h-[200px] backdrop-blur-sm text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2021 - 2024</p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl font-bold text-center mb-4">Professional Experience</h3>

                  <p>Worked as a System Engineer, contributing to a Warehouse Management System(WMS) project. </p>
                </div>
              </div>
            </div>

            {/* Work Experience - TCS */}
            <div className="flex flex-col gap-10 md:justify-start justify-center items-center mb-8">
              <div className="cursor-pointer" ref={el => boxRef.current[2] = el}>
                <div className="rounded-xl border-2 relative border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] hover:scale-110 transition duration-500 ease-in-out  md:h-[200px] h-[200px] backdrop-blur-sm text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2017 - 2021</p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl font-bold text-center mb-4">Bachelor's Degree</h3>
                  <p className="mb-2">B.Tech in Computer Science Engineering</p>
                  <p>• CGPA: 9.6</p>
                </div>
              </div>

              {/* Current */}
              <div className="cursor-pointer" ref={el => boxRef.current[3] = el}>
                <div className="rounded-xl border-2 relative border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] hover:scale-110 transition duration-500 ease-in-out sm:h-[200px] md:h-[200px] h-auto backdrop-blur-sm text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2024 - Present</p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl text-center font-bold mb-4">Present</h3>
                  <p>
                    Actively learning HTML, CSS, and JavaScript while exploring React and Tailwind CSS, and building projects to apply and strengthen my skills.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='block lg:hidden'>
        <div className="flex items-center gap-10 justify-center w-screen">
          {/* Timeline content */}
          <div className="flex-col md:flex-row flex md:justify-around justify-center items-center gap-10 m-10 sm:m-6 md:m-0 w-full max-w-[1200px]">

            <div className="flex flex-col gap-10 md:justify-start  justify-center items-center">
              <div className="cursor-pointer" ref={el => box2Ref.current[0] = el}>
                <div className="rounded-xl border-2 border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] sm:h-[200px] md:h-[200px] hover:scale-110 transition duration-500 ease-in-out backdrop-blur-sm relative text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2014 - 2016</p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl font-bold mb-4 text-center">School Education</h3>
                  <p className="mb-2 text-emerald-50">• 10th Grade - 10 CGPA - (CBSE)</p>
                  <p className='text-md'>• 12th Grade - 91% - (CBSE)</p>
                  <p className='mr-3 text-emerald-50'>Stream: PCM</p>
                </div>
              </div>


              <div className="cursor-pointer" ref={el => box2Ref.current[1] = el}>
                <div className="rounded-xl relative border-2 border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] hover:scale-110 transition duration-500 ease-in-out sm:h-[200px] md:h-[200px] backdrop-blur-sm text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2017 - 2021</p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl font-bold text-center mb-4">Bachelor's Degree</h3>
                  <p className="mb-2 text-md">B.Tech in Computer Science Engineering</p>
                  <p className='text-md'>• CGPA: 9.6</p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-10 md:justify-start justify-center items-center mb-8">
              <div className="cursor-pointer" ref={el => box2Ref.current[2] = el}>
                <div className="rounded-xl border-2 relative border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] hover:scale-110 transition duration-500 ease-in-out  md:h-[200px] h-[300px] backdrop-blur-sm text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2021 - 2024 </p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl font-bold text-center mb-4"> Professional Experience</h3>
                  <p className='text-md'> Worked as a System Engineer, contributing to a Warehouse Management System(WMS) project.</p>

                </div>
              </div>


              <div className="cursor-pointer" ref={el => box2Ref.current[3] = el}>
                <div className="rounded-xl border-2 relative border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] hover:scale-110 transition duration-500 ease-in-out sm:h-[200px] md:h-[200px] h-auto backdrop-blur-sm text-white shadow-lg">
                  <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
                    <p className="text-center">2024 - Present</p>
                  </div>
                  <h3 className="sm:text-xl md:text-2xl text-xl text-center font-bold mb-4">Present</h3>
                  <p className='text-md'>
                    Actively learning HTML, CSS, and JavaScript while exploring React and Tailwind CSS, and building projects to apply and strengthen my skills.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Experience;