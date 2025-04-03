import React from 'react';

export default function Navbar({ title = 'Algorithmic Lab' }) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 text-white py-3 border-b-2" style={{backgroundColor: 'oklch(0.82 0 0 / 0.69)', color: 'black'}}>
            <div className="container mx-auto flex items-center justify-between px-4">
                <button 
                    onClick={() => window.history.back()} 
                    className="mr-4 focus:outline-none cursor-pointer text-2xl"
                >
                    &#8592; {/* Символ стрелки назад */}
                </button>
                <h1 className="text-lg font-semibold">{title}</h1>
            </div>
        </nav>
    );
}
