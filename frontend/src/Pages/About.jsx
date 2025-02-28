import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import a from '../assets/A25.png';
import b from '../assets/B6.png';
import o from '../assets/O3.png';
import u from '../assets/U10.png';
import t from '../assets/T6.png';
import m from '../assets/M2.png';
import e from '../assets/E21.png';

const About = () => {
    const aboutRef = useRef(null);
    const textRef = useRef(null);
    const letterRefs = useRef([]);

    useEffect(() => {
        // Initial setup - hide elements
        gsap.set(letterRefs.current, {
            opacity: 0,
            y: 100
        });
        gsap.set(textRef.current, {
            opacity: 0,
            y: 50
        });

        // Create timeline for smooth sequential animations
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        // Animate letters sequentially
        tl.to(letterRefs.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
                each: 0.1,
                ease: "power2.out"
            }
        });

        // Animate the text paragraph
        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1
        }, "-=0.5"); // Start slightly before the letters finish

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
    }, []);

    return (
        <>
            <div ref={aboutRef} className='w-screen min-h-screen overflow-x-hidden flex justify-center items-center relative'>
                <div className='flex flex-col gap-10 justify-center items-center'>
                    <div className='flex flex-row  justify-center items-center gap-8'>
                        <div className='flex justify-center gap-4 items-center'>
                            <img ref={el => letterRefs.current[0] = el} className='lg:size-44 size-20' src={a} alt="A" />
                            <img ref={el => letterRefs.current[1] = el} className='lg:size-16 size-10' src={b} alt="B" />
                            <img ref={el => letterRefs.current[2] = el} className='lg:size-16 size-10' src={o} alt="O" />
                            <img ref={el => letterRefs.current[3] = el} className='lg:size-16 size-10' src={u} alt="U" />
                            <img ref={el => letterRefs.current[4] = el} className='lg:size-16 size-10' src={t} alt="T" />


                        </div>
                        <div className='flex justify-center items-center'>
                            <img ref={el => letterRefs.current[5] = el} className='lg:size-36 size-10' src={m} alt="M" />
                            <img ref={el => letterRefs.current[6] = el} className='lg:size-16 size-10' src={e} alt="E" />
                        </div>
                    </div>

                    <p id='box'
                        ref={textRef}
                        className='lg:w-[75%] w-[90%] text-center text-white leading-relaxed font4 md:text-lg text-md'
                    >
                        Worked as a System Engineer at TCS for two years, contributing to a Warehouse Management System (WMS) project.
                        Gained hands-on experience managing various Distribution Centers (DCs) and addressing functional and technical
                        issues arising during diverse tasks. Trained in core warehouse management processes, including inbound,
                        inventory management, outbound operations, picking, receiving, shipping, and cross-docking. Demonstrated
                        problem-solving skills in resolving operational challenges while ensuring seamless workflows.
                    </p>
                </div>

               
            </div >
        </>
    );
};

export default About;