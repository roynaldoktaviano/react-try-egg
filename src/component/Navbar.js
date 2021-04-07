import React from 'react';
import  { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black shadow-sm font-mono font-bold">
            <Link to="/" className="pl-8">EGG</Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/">Home</Link>
                <Link to="/" className="ml-4">About</Link>
                <Link to="/" className="ml-4">Contact</Link>
                <Link to="/" className="ml-4">Menu</Link>
            </div>
        </nav>
    )
}

export default Navbar