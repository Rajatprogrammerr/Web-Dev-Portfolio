import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [active, setActive] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (event) => {
        setActive(event);
        setIsMenuOpen(false); // Close mobile menu on link click
    }

    return (
        <div className='fixed z-50 w-screen p-4 overflow-x-hidden border-2 rounded-xl border-gray-500 bg-black'>
            <div className='flex justify-around items-center'>
                <p id='box' className='text-3xl font-extrabold tracking-wide font5 text-green-500'>
                    &lt;Rajat/&gt;
                </p>

                {/* Desktop Navigation (visible on md and up) */}
                <div className="hidden lg:block">
                    <ul>
                        <li className='flex gap-16 text-xl font-bold'>
                            <Link
                                to='/'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'home' ? 'text-[#d00000]' : 'text-white'}`}
                                onClick={() => handleClick('home')}
                            >
                                Home
                                <span className={`absolute bottom-[-4px] transition-all duration-500 origin left-0 h-[2px] w-full bg-[#d00000] ${active === 'home' ? 'scale-x-100' : 'scale-x-0'}`}>
                                    
                                </span>
                            </Link>
                            <Link
                                to='/start'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'start' ? 'text-[#3a86ff]' : 'text-white'} ${active === 'start' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('start')}
                            >
                                Start
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#3a86ff] ${active === 'start' ? 'scale-x-100' : 'scale-x-0'}`}>
                                    
                                </span>
                            </Link>
                            <Link
                                to='/about'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'about' ? 'text-[#fb8500]' : 'text-white'} ${active === 'about' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('about')}
                            >
                                about
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#fb8500] ${active === 'about' ? 'scale-x-100' : 'scale-x-0'}`}>
                                   
                                </span>
                            </Link>
                            <Link
                                to='/education'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'education' ? 'text-[#588157]' : 'text-white'} ${active === 'education' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('education')}
                            >
                                Experience
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#588157] ${active === 'education' ? 'scale-x-100' : 'scale-x-0'}`}>
                                  
                                </span>
                            </Link>
                            <Link
                                to='/skills'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'skills' ? 'text-[#b56576]' : 'text-white'} ${active === 'skills' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('skills')}
                            >
                                Skills
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#b56576] ${active === 'skills' ? 'scale-x-100' : 'scale-x-0'}`}>
                                    
                                </span>
                            </Link>
                            <Link
                                to='/projects'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'projects' ? 'text-[#bc6c25]' : 'text-white'} ${active === 'projects' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('projects')}
                            >
                                Projects
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#bc6c25] ${active === 'projects' ? 'scale-x-100' : 'scale-x-0'}`}>
                                   
                                </span>
                            </Link>
                            <Link
                                to='/contact'
                                id='box'
                                className={`relative font2 ne transition duration-300 ${active === 'contact' ? 'text-[#0a9396]' : 'text-white'} ${active === 'contact' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('contact')}
                            >
                                Contact
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#0a9396] ${active === 'contact' ? 'scale-x-100' : 'scale-x-0'}`}>
                                   
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Menu Button for Mobile (visible below md) */}
                <div className="block lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <span className="text-white text-3xl">X</span>
                        ) : (
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4">
                    <ul className="flex flex-col gap-4 text-center">
                        <li>
                            <Link
                                to='/'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'home' ? 'text-[#d00000]' : 'text-white'}`}
                                onClick={() => handleClick('home')}
                            >
                                Home
                                <span className={`absolute bottom-[-4px] transition-all duration-500 origin left-0 h-[2px] w-full bg-[#d00000] ${active === 'home' ? 'scale-x-100' : 'scale-x-0'}`}>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/start'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'start' ? 'text-[#3a86ff]' : 'text-white'} ${active === 'start' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('start')}
                            >
                                Start
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#3a86ff] ${active === 'start' ? 'scale-x-100' : 'scale-x-0'}`}>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'about' ? 'text-[#ee9b00]' : 'text-white'} ${active === 'about' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('about')}
                            >
                                about
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#ee9b00] ${active === 'about' ? 'scale-x-100' : 'scale-x-0'}`}>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/education'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'education' ? 'text-[#588157]' : 'text-white'} ${active === 'education' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('education')}
                            >
                                Experience
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-[#588157] ${active === 'education' ? 'scale-x-100' : 'scale-x-0'}`}>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/skills'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'skills' ? 'text-blue-800' : 'text-white'} ${active === 'skills' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('skills')}
                            >
                                Skills
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-blue-500 ${active === 'skills' ? 'scale-x-100' : 'scale-x-0'}`}>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/projects'
                                id='box'
                                className={`relative font2 transition duration-300 ${active === 'projects' ? 'text-blue-800' : 'text-white'} ${active === 'projects' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('projects')}
                            >
                                Projects
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-blue-500 ${active === 'projects' ? 'scale-x-100' : 'scale-x-0'}`}>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/contact'
                                id='box'
                                className={`relative font2 ne transition duration-300 ${active === 'contact' ? 'text-blue-800' : 'text-white'} ${active === 'contact' ? 'underline-0' : ''}`}
                                onClick={() => handleClick('contact')}
                            >
                                Contact
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full transition-all duration-500 origin bg-blue-500 ${active === 'contact' ? 'scale-x-100' : 'scale-x-0'}`}>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
