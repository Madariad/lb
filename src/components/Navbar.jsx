import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип и название */}
        <div className="flex items-center">
          {/* <img
            src="../assets/logo.svg"
            alt="Algorithmic Lab Logo"
            className="h-8 w-8 mr-2"
          /> */}
          <span className="text-xl font-bold text-gray-800">
          Algorithmic Lab
          </span>
        </div>
        {/* Основное меню для десктопа */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* <Link to="/" className="text-gray-600 hover:text-gray-800">
            Главная
          </Link>
          <Link to="/modules" className="text-gray-600 hover:text-gray-800">
            Модули
          </Link> */}
          {/* {/* <Link to="/courses" className="text-gray-600 hover:text-gray-800">
            Курсы
          </Link> */}
          {/* <a   href="#contact" className="text-gray-600 hover:text-gray-800">
            Контакты
          </a>  */}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition"
          >
            Главная
          </Link>
          <Link
            to="/modules"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Модули
          </Link>
        </div>
        {/* Кнопка мобильного меню */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Мобильное меню */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2 w-full">
            {/* <Link to="/" className="block text-gray-600 hover:text-gray-800">
              Главная
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-gray-800">
              О платформе
            </Link>
            <Link to="/courses" className="block text-gray-600 hover:text-gray-800">
              Курсы
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-gray-800">
              Контакты
            </Link> */}
          <div className='pt-2 pb-6 '>
          <Link to="/modules" 
          className= "block w-full text-center px-4 py-2 border text-gray-600 hover:text-gray-800   bg-amber-500 rounded-sm p-2">
            Модули
          </Link>
          </div>
            {/* <div className="pt-2">
              <Link
                to="/register"
                className="block w-full text-center px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition"
              >
                Регистрация
              </Link>
              <Link
                to="/login"
                className="block w-full text-center mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Вход
              </Link>
            </div> */}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
