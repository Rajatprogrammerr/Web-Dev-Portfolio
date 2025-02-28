import React from 'react'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useForm } from "react-hook-form"
import o from '../assets/O3.png';
import n from '../assets/N6.png';
import t from '../assets/T6.png';
import c from '../assets/C3.png';
import a from '../assets/A25.png';
import m from '../assets/M2.png';
import e from '../assets/E21.png';
import toast from 'react-hot-toast';

const Contactme = () => {
    const [formState, setFormState] = useState({ form: [] });

    const {
        register,
        handleSubmit,
        reset,
        isSubmitting,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch('http://localhost:5000/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Assuming the API returns a JSON object with a "data" property
            const res = await response.json();

            // Update local state with the new submission
            setFormState((prevState) => ({
                form: [...prevState.form, res.data]

            }));

            toast.success('Form submitted successfully!')
            reset();
        } catch (error) {
            console.error('Error submitting the form:', error);
            // You might update state here to display the error to the user
        }
    };


    const textRef = useRef(null)

    useEffect(() => {
        gsap.set(textRef.current, {
            opacity: 0,
            y: 100
        })
        gsap.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "elastic.out(1, 0.5)",
        });
    }, [])

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center flex-col p-4">
                {/* Header Section */}
                <div className="flex justify-center items-center mb-8" ref={textRef}>
                    {/* <h1 className="font-bold text-4xl md:text-5xl text-center font">CONTACT ME</h1> */}
                    <img className='md:size-32 size-16' src={c} alt="c" />
                    <img className='md:size-16 size-10' src={o} alt="o" />
                    <img className='md:size-16 size-10' src={n} alt="n" />
                    <img className='md:size-16 size-10' src={t} alt="t" />
                    <img className='md:size-16 size-10' src={a} alt="a" />
                    <img className='md:size-16 size-10' src={c} alt="c" />
                    <img className='md:size-16 size-10' src={t} alt="t" />
                    <img className='md:size-32 size-10 md:ml-10 ml-4' src={m} alt="m" />
                    <img className='md:size-16 size-10' src={e} alt="e" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 glass-effect p-6 rounded-lg">
                    {/* Form Section */}
                    <div className="w-full md:w-[600px]">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Name"
                                className="p-4 rounded-lg border border-gray-500 text-black outline-none"
                            />
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Email"
                                className="p-4 rounded-lg border border-gray-500 text-black outline-none"
                            />
                            <textarea
                                {...register("messages", { required: true, message: "Field is required" })}

                                cols="30"
                                rows="5"
                                placeholder="Message"
                                className="p-4 rounded-lg border border-gray-500 text-black outline-none resize-none"

                            />
                            {errors.messages && <div className="text-red-500">{errors.messages.message}</div>}
                            <input disabled={isSubmitting}
                                type="submit"
                                className="bg-blue-900 cursor-pointer text-white p-4 rounded-lg hover:bg-blue-500 hover:text-black font-bold w-1/2 mx-auto"

                            />

                        </form>
                    </div>
                    {/* DTI1szztjk561V38 */}
                    {/* Contact Info Section */}
                    <div className="flex flex-col gap-6 text-center md:text-left">
                        <span className="text-2xl md:text-4xl font6 tracking-wider font-bold">@rpurpose81@gmail.com</span>
                        <span className="text-2xl md:text-4xl font6 tracking-wider font-bold">8076409017</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactme
