import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/github.jpg';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linkedin.png';
import resume from "../assets/resume.jpeg"
import f from '../assets/F10.png';
import r from '../assets/R11.png';
import o from '../assets/O10.png';
import n from '../assets/N6.png';
import t from '../assets/T6.png';
import e from '../assets/E18.png';
import d from '../assets/D5.png';
import E from '../assets/E2.png';
import v from '../assets/V5.png';
import l from '../assets/L9.png';
import O from '../assets/O3.png';
import p from '../assets/P10.png';
import gsap from 'gsap';
import webDevResume from '../files/webDevResume.pdf'

const Hero = () => {
    const frontendRefs = useRef([]);
    const developerRefs = useRef([]);
    const textRef = useRef(null);
    const socialRefs = useRef([]);

    useEffect(() => {
        // Initial setup - hide elements
        gsap.set([frontendRefs.current, developerRefs.current], {
            opacity: 0,
            y: 100
        });
        gsap.set(textRef.current, {
            opacity: 0,
            y: 50
        });
        gsap.set(socialRefs.current, {
            opacity: 0,
            scale: 0.5
        });

        // Create main timeline
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        // Animate "FRONTEND" letters
        tl.to(frontendRefs.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
                each: 0.1,
                ease: "power2.out"
            }
        });

        // Animate "DEVELOPER" letters
        tl.to(developerRefs.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
                each: 0.1,
                ease: "power2.out"
            }
        }, "-=0.4"); // Start slightly before FRONTEND finishes

        // Animate description text
        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1
        }, "-=0.3");

        // Animate social icons
        tl.to(socialRefs.current, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: {
                each: 0.2,
                ease: "back.out(1.7)"
            }
        }, "-=0.5");

        // Add hover animations for letters
        const addHoverAnimation = (refs) => {
            refs.current.forEach((letter) => {
                if (letter) {
                    letter.addEventListener('mouseenter', () => {
                        gsap.to(letter, {
                            scale: 1.3,
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
        };

        addHoverAnimation(frontendRefs);
        addHoverAnimation(developerRefs);

        // Cleanup
        return () => {
            const removeListeners = (refs) => {
                refs.current.forEach((letter) => {
                    if (letter) {
                        letter.removeEventListener('mouseenter', () => { });
                        letter.removeEventListener('mouseleave', () => { });
                    }
                });
            };

            removeListeners(frontendRefs);
            removeListeners(developerRefs);
        };
    }, []);

    return (
        <div className="h-screen  flex justify-center items-center w-full ">
            <div className="w-screen mx-4 md:mx-20 overflow-x-hidden relative">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex lg:flex-row  md:flex-col flex-col mt-20 md:mt-0 justify-center items-center  ">
                                <div className="flex justify-center items-center">
                                    <img ref={el => frontendRefs.current[0] = el} className="md:size-44 size-14" src={f} alt="F" />
                                    <img ref={el => frontendRefs.current[1] = el} className="md:size-16 size-10" src={r} alt="R" />
                                    <img ref={el => frontendRefs.current[2] = el} className="md:size-16 size-10" src={o} alt="O" />
                                    <img ref={el => frontendRefs.current[3] = el} className="md:size-16 size-10" src={n} alt="N" />
                                    <img ref={el => frontendRefs.current[4] = el} className="md:size-16 size-10" src={t} alt="T" />
                                    <img ref={el => frontendRefs.current[5] = el} className="md:size-16 size-10" src={e} alt="E" />
                                    <img ref={el => frontendRefs.current[6] = el} className="md:size-16 size-10" src={d} alt="D" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img ref={el => developerRefs.current[0] = el} className="md:size-44 size-10" src={d} alt="D" />
                                    <img ref={el => developerRefs.current[1] = el} className="md:size-16 size-10" src={e} alt="E" />
                                    <img ref={el => developerRefs.current[2] = el} className="md:size-16 size-10" src={v} alt="V" />
                                    <img ref={el => developerRefs.current[3] = el} className="md:size-16 size-10" src={E} alt="E" />
                                    <img ref={el => developerRefs.current[4] = el} className="md:size-16 size-10" src={l} alt="L" />
                                    <img ref={el => developerRefs.current[5] = el} className="md:size-16 size-10" src={O} alt="O" />
                                    <img ref={el => developerRefs.current[6] = el} className="md:size-16 size-10" src={p} alt="P" />
                                    <img ref={el => developerRefs.current[7] = el} className="md:size-16 size-10" src={E} alt="E" />
                                    <img ref={el => developerRefs.current[8] = el} className="md:size-16 size-10" src={r} alt="R" />
                                </div>
                            </div>
                            <p id='box' ref={textRef} className="mt-10 font4 md:w-[75%] w-full text-center md:text-lg text-md text-white">
                                I'm a Frontend Developer, excited about building websites and bringing ideas to life online. I work with technologies like HTML, CSS, JavaScript, Tailwind CSS, and React to create websites that look great and are easy to use. I enjoy learning and exploring new ways to make websites faster, more responsive, and user-friendly.
                            </p>
                        </div>

                        <div className=" flex md:flex-row  lg:flex-row my-16 md:gap-14 gap-6 justify-center items-center">
                            <div ref={el => socialRefs.current[0] = el} className="relative group">
                                <Link to={"https://github.com/Rajatprogrammerr"} target="_blank" >
                                    <button className="p-2 rounded-full md:size-32 size-16">
                                        <img src={github} alt="github" className='' />
                                    </button>
                                </Link>
                                <span className="absolute md:top-full top-1/2 md:left-1/2 left-1/3 transform md:-translate-x-1/2 mt-2 text-lg font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500">
                                    Github
                                </span>
                            </div>
                            <div ref={el => socialRefs.current[1] = el} className="relative group">
                                <Link to={"https://mail.google.com/mail/?view=cm&to=rpurpose81@gmail.com&su=SUBJECT&body=BODY"} target='_blank'>
                                    <button className="p-2 rounded-full md:size-32 size-16">
                                        <img src={gmail} alt="gmail" />
                                    </button>
                                </Link>
                                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-lg font-bold text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500">
                                    Gmail
                                </span>
                            </div>
                            <div ref={el => socialRefs.current[2] = el} className="relative group">
                                <Link to={"https://www.linkedin.com/in/rajat-singh-77548916b/"} target="_blank">
                                    <button className="p-2 rounded-full md:size-32 size-16">
                                        <img src={linkedin} alt="linkedin" />
                                    </button>
                                </Link>
                                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-lg font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Linked<span className="text-white">In</span>
                                </span>
                            </div>
                            <div ref={el => socialRefs.current[3] = el} className="relative group">
                                <Link to={webDevResume}  download={true}>
                                    <button className="p-2 rounded-full md:size-32 size-16" onClick={d}>
                                        <img src={resume} alt="Resume" />
                                    </button>
                                </Link>
                                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Resume
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;