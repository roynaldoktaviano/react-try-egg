import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-16">
                Eggcelent
            </h1>
            <Link className="px-2 py-1 bg-yellow-500 flex items-center rounded-md shadow-sm md:px-4 md:py-3 hover:bg-yellow-600 hover:shadow-md transition duration-200 ease-in-out animate-bounce">
            <p className="text-md font-bold md:text-lg">Order Now</p>
            <svg className="w-4 h-4 ml-2 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </Link>
        </div>
    )
}

export default Hero
