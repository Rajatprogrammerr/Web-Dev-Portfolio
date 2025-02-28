// src/components/Skills.jsx

import React from 'react';
import html from '../assets/HTML.png';
import css from '../assets/css.png';
import js from '../assets/Js.png';
import reactImg from '../assets/React.png';
import tailwind from '../assets/tailwind.png';
import git from '../assets/github.png';
import './Skills.css';
import s from '../assets/S6.png';
import k from '../assets/K2.png';
import i from '../assets/I3.png';
import l from '../assets/L9.png';

const Skills = () => {
  return (
    // <div className="w-screen    h-screen flex flex-col justify-center items-center relative ">
    //   <div className="banner relative ">
    //     <div className="slider" style={{ '--quantity': 5 }}>
    //       <div className="item" style={{ '--position': 1 }}><img src={html} alt="HTML" /></div>
    //       <div className="item" style={{ '--position': 2 }}><img src={css} alt="CSS" /></div>
    //       <div className="item" style={{ '--position': 3 }}><img src={js} alt="JavaScript" /></div>
    //       <div className="item" style={{ '--position': 4 }}><img src={reactImg} alt="React" /></div>
    //       <div className="item" style={{ '--position': 5 }}><img src={tailwind} alt="Tailwind" /></div>
    //       <div className="item" style={{ '--position': 6 }}><img src={git} alt="GitHub" /></div>
    //     </div>
    //   </div>
    //   <div className='flex justify-center items-center absolute '>

    //   <h1 className='font-bold text-5xl ' >SKILLS</h1>
    //   </div>
    // </div>

    <div className="w-screen h-screen flex flex-col justify-center items-center relative">
      {/* Banner Section */}
      <div className="banner ">
        <div className="slider" style={{ '--quantity': 6 }}>
          <div className="item" style={{ '--position': 1 }}>
            <img src={js} alt="HTML" />
          </div>
          <div className="item" style={{ '--position': 2 }}>
            <img src={css} alt="CSS" />
          </div>
          <div className="item" style={{ '--position': 3 }}>
            <img src={html} alt="JavaScript" />
          </div>
          <div className="item" style={{ '--position': 4 }}>
            <img src={reactImg} alt="React" />
          </div>
          <div className="item" style={{ '--position': 5 }}>
            <img src={tailwind} alt="Tailwind" />
          </div>
          <div className="item" style={{ '--position': 6 }}>
            <img src={git} alt="GitHub" />
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <div className="absolute top-[60%] transform -translate-y-1/2 flex  justify-center items-center ">
        {/* <h1 id='box' className="font-bold text-5xl text-center font">SKILLS</h1> */}
        <img className='lg:size-16 size-10' src={s} alt="" />
        <img className='lg:size-16 size-10' src={k} alt="" />
        <img className='lg:size-16 size-10' src={i} alt="" />
        <img className='lg:size-16 size-10' src={l} alt="" />
        <img className='lg:size-16 size-10' src={l} alt="" />
        <img className='lg:size-16 size-10' src={s} alt="" />
      </div>
    </div>

  );
};

export default Skills;

