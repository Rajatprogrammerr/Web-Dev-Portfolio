// import React from 'react'

// const Experience = () => {
//   return (
//     <>
//       <div className="w-screen max-h-fit overflow-x-hidden bg-yellow-950">
//         <div className="flex justify-center items-center">
//           <h1 className="text-5xl font-bold text-center">Education/Experience</h1>
//         </div>
//         <div className="flex items-center justify-center mt-8 relative">
//           <div className="min-h-screen w-px bg-gray-500"></div>
//           <div className="flex flex-col absolute gap-56 ">
//             <div className="rounded-full w-2 h-2 bg-gray-600"></div>
//             <div className="rounded-full w-2 h-2 bg-gray-600"></div>
//             <div className="rounded-full w-2 h-2 bg-gray-600"></div>
//             <div className="rounded-full w-2 h-2 bg-gray-600"></div>
//           </div>
//           <div className="flex flex-col  gap-56 absolute ">
//             <div className=' '>
//               <div className='rounded-xl border border-gray-500 p-4 w-[400px] h-[200px] absolute left-1/2 ml-3'>
//                 <p>-2014 - 10th - 10 CGPA - RLB (CBSE)</p>
//                 <p>-2016 - 12th - 91% - RLB (CBSE) - PCM</p>
//               </div>
//             </div>
//             <div className=' '>
//               <div className='rounded-xl border border-gray-500 p-4 w-[400px] h-[200px] absolute right-1/2 mr-3'>
//               <p>2017 -2021 </p>
//               <p>-B.Tech - CSE</p>
//               <p>9.6 CGPA</p>

//               </div>
//             </div>
//             <div className=''>
//               <div className='rounded-xl border border-gray-500 p-4 w-[400px] h-[200px] absolute left-1/2 ml-3'>
//               <p>2021 - 2024 (March)</p>
//               <p>Worked as System Engineer at TCS</p>
//               </div>
//             </div>
//             <div className=' '>
//               <div className='rounded-xl border border-gray-500 p-4 w-[400px] h-[200px] absolute right-1/2 mr-3'>
//               <p>2024 - Present</p>
//               <p>Learning Web Development</p>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>

//     </>
//   )
// }

// export default Experience






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
  }


  )

  return (
    <div className="w-screen overflow-x-hidden md:mt-16 mt-20">
  <div className="flex justify-center items-center">
    {/* <h1 className="text-5xl font-bold text-center text-white font">Education/Experience</h1> */}
    <div className="flex lg:flex-row md:flex-col flex-col justify-center items-center gap-8" ref={textRef}>
      <div className="flex justify-center items-center">
        <img ref={el => letterRefs.current[0] = el} className="sm:size-32 md:size-44 size-20" src={e} alt="A" />
        <img ref={el => letterRefs.current[1] = el} className="sm:size-12 md:size-16 size-10" src={d} alt="B" />
        <img ref={el => letterRefs.current[2] = el} className="sm:size-12 md:size-16 size-10" src={u} alt="O" />
        <img ref={el => letterRefs.current[3] = el} className="sm:size-12 md:size-16 size-10" src={c} alt="U" />
        <img ref={el => letterRefs.current[4] = el} className="sm:size-12 md:size-16 size-10" src={a} alt="T" />
        <img ref={el => letterRefs.current[5] = el} className="sm:size-12 md:size-16 size-10" src={t} alt="T" />
        <img ref={el => letterRefs.current[6] = el} className="sm:size-12 md:size-16 size-10" src={i} alt="T" />
        <img ref={el => letterRefs.current[7] = el} className="sm:size-12 md:size-16 size-10" src={o} alt="T" />
        <img ref={el => letterRefs.current[8] = el} className="sm:size-12 md:size-16 size-10" src={n} alt="T" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={el => letterRefs.current[9] = el} className="sm:size-28 md:size-36 size-20" src={E} alt="M" />
        <img ref={el => letterRefs.current[10] = el} className="sm:size-12 md:size-16 size-10" src={x} alt="E" />
        <img ref={el => letterRefs.current[11] = el} className="sm:size-12 md:size-16 size-10" src={p} alt="P" />
        <img ref={el => letterRefs.current[12] = el} className="sm:size-12 md:size-16 size-10" src={e} alt="P" />
        <img ref={el => letterRefs.current[13] = el} className="sm:size-12 md:size-16 size-10" src={r} alt="P" />
        <img ref={el => letterRefs.current[14] = el} className="sm:size-12 md:size-16 size-10" src={i} alt="P" />
        <img ref={el => letterRefs.current[15] = el} className="sm:size-12 md:size-16 size-10" src={E} alt="P" />
        <img ref={el => letterRefs.current[16] = el} className="sm:size-12 md:size-16 size-10" src={n} alt="P" />
        <img ref={el => letterRefs.current[17] = el} className="sm:size-12 md:size-16 size-10" src={c} alt="P" />
        <img ref={el => letterRefs.current[18] = el} className="sm:size-12 md:size-16 size-10" src={e} alt="P" />
      </div>
    </div>
  </div>

  <div className="flex items-center gap-10 justify-center w-screen">
    {/* Timeline content */}
    <div className="flex md:justify-around justify-center items-center gap-10 m-10 sm:m-6 md:m-0 w-full max-w-[1200px]">
      {/* Education - School */}
      <div className="flex flex-col gap-10 md:justify-start  justify-center items-center">
        <div className="cursor-pointer" ref={el => boxRef.current[0] = el}>
          <div className="rounded-xl border-2 border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] sm:h-[200px] md:h-[200px] hover:scale-110 transition duration-500 ease-in-out backdrop-blur-sm relative text-white shadow-lg">
            <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
              <p className="text-center">2014 - 2016</p>
            </div>
            <h3 className="sm:text-xl md:text-2xl text-xl font-bold mb-4 text-center">School Education</h3>
            <p className="mb-2">• 10th Grade - 10 CGPA - RLB (CBSE)</p>
            <p>• 12th Grade - 91% - RLB (CBSE)</p> 
            <p>Stream: PCM</p>
          </div>
        </div>

        {/* Education - College */}
        <div className="cursor-pointer" ref={el => boxRef.current[1] = el}>
          <div className="rounded-xl relative border-2 border-gray-500 p-6 w-[200px] sm:w-[250px] md:w-[400px] hover:scale-110 transition duration-500 ease-in-out sm:h-[200px] md:h-[200px] backdrop-blur-sm text-white shadow-lg">
            <div className="rounded-lg bg-blue-900 w-32 h-8 flex justify-center items-center absolute top-[-20px]">
              <p className="text-center">2021 - 2024</p>
            </div>
            <h3 className="sm:text-xl md:text-2xl text-xl font-bold text-center mb-4">Professional Experience</h3>
            <p className="mb-2">System Engineer at TCS</p>
            <p>• 2 years of industry experience</p>
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
            <h3 className="sm:text-xl md:text-2xl text-xl text-center font-bold mb-4">Current</h3>
            <p>
              • Full Stack Web Development
              <br />
              <br />
              Building modern web applications
            </p>
            <p>• Building modern web applications</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Experience;