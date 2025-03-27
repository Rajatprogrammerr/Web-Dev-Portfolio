import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import p from '../assets/P10.png'
import r from '../assets/R11.png'
import o from '../assets/O10.png'
import j from '../assets/J3.png'
import e from '../assets/E18.png'
import t from '../assets/T6.png'
import c from '../assets/C3.png'
import s from '../assets/S6.png'


import image_slider_1 from '../assets/Netflix.png'
import image_slider_2 from '../assets/Recipe.png'
import image_slider_3 from '../assets/Youtube.png'
import image_slider_4 from '../assets/localStore.png'


import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const Projects = () => {

    const textRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.set(textRef.current, {
            opacity: 0,
            scale: 2,
        })
        gsap.set(boxRef.current, {
            opacity: 0,
            y: 50,
        })

        gsap.to(textRef.current, {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "elastic.out(1, 0.5)",
        });
        gsap.to(boxRef.current, {
            opacity: 1,
            duration: 4,
            y: 0,
            ease: "power3.out",
        })
    }, [])
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center md:gap-0 gap-10'>
                <div className='md:mt-10  flex justify-center items-center' ref={textRef}>
                    {/* <h1 className='font-bold text-5xl font'>PROJECTS</h1> */}
                    <img className='sm:size-28 md:size-32 size-20' src={p} alt="p" />
                    <img className='sm:size-12 md:size-16 size-10' src={r} alt="r" />
                    <img className='sm:size-12 md:size-16 size-10' src={o} alt="o" />
                    <img className='sm:size-12 md:size-16 size-10' src={j} alt="j" />
                    <img className='sm:size-12 md:size-16 size-10' src={e} alt="e" />
                    <img className='sm:size-12 md:size-16 size-10' src={t} alt="c" />
                    <img className='sm:size-12 md:size-16 size-10' src={c} alt="t" />
                    <img className='sm:size-12 md:size-16 size-10' src={s} alt="s" />
                </div>
                <div className='flex w-full justify-center items-center' ref={boxRef}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'2'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 20,
                            depth: 100,
                            modifier: 3,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container w-full"
                    >

                        <SwiperSlide>
                            <Link to={"https://netflix-clone-mern-sm6w.onrender.com/"} target='_blank'>
                                <img src={image_slider_1} alt="image_slider_1" className='w-[200px] sm:w-[400px] md:w-[700px] h-[100px] sm:h-[300px] md:h-[500px] cursor-pointer object-contain rounded-2xl' />
                            </Link>
                            {/* <div className="w-[200px] sm:w-[400px] md:w-[700px] h-[100px] sm:h-[300px] md:h-[500px] bg-gray-500 cursor-pointer"></div> */}

                        </SwiperSlide>

                        <SwiperSlide>
                            <Link to={"https://recipe-finder-rho-five.vercel.app/"} target='_blank'>
                                <img src={image_slider_2} alt="image_slider_1" className='w-[200px] sm:w-[400px] md:w-[700px] h-[100px] sm:h-[300px] md:h-[500px] cursor-pointer object-contain rounded-2xl' />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link to={"https://youtube-clone-aqgl.onrender.com/"} target='_blank'>
                                <img src={image_slider_3} alt="image_slider_1" className='w-[200px] sm:w-[400px] md:w-[700px] h-[100px] sm:h-[300px] md:h-[500px] cursor-pointer object-contain rounded-2xl' />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"https://local-store-mern.onrender.com/"} target='_blank'>
                                <img src={image_slider_4} alt="image_slider_1" className='w-[200px] sm:w-[400px] md:w-[700px] h-[100px] sm:h-[300px] md:h-[500px] cursor-pointer object-contain rounded-2xl' />
                            </Link>

                        </SwiperSlide>

                        <div className="slider-controller">
                            <div className="swiper-button-prev slider-arrow">
                                <ArrowLeft />
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ArrowRight />
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default Projects
