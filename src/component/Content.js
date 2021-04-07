import React from 'react';
import  { Link } from 'react-router-dom';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';

const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={ImageOne} alt="Egg Dish" className="h-full rounded mb-20 shadow"/>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">
                    Egg Blackpapper
                </h2>
                <p className="mb-2">Spicy, Delicious and Nutritious</p>
                <span>Rp.16.00</span>
                <Link to="/" className="px-4 py-1 bg-yellow-500 rounded-md mt-5 flex items-center hover:bg-yellow-600 transition duration-200 ease-in-out">
                    <p className="text-md font-bold">Buy</p>
                    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </Link>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={ImageTwo} alt="Egg Dish" className="h-full rounded mb-20 shadow"/>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">
                    Sunny Side Egg
                </h2>
                <p className="mb-2">Crispy, Delicious and Nutritious</p>
                <span>Rp.8.00</span>
                <Link to="/" className="px-4 py-1 bg-yellow-500 rounded-md mt-5 flex items-center hover:bg-yellow-600 transition duration-200 ease-in-out">
                    <p className="text-md font-bold">Buy</p>
                    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Content
