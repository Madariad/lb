import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-96 py-[300px] flex items-center justify-center text-center">
      {/* Фоновое видео – задаёт динамичный и современный вид.
          Если видео не доступно, можно использовать fallback background-image через Tailwind */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/hero-bg.mp4" // добавьте ваше видео в public/assets/videos
        autoPlay
        loop
        muted
      /> */}
  
      <div className="absolute top-0 left-0 w-full h-full " style={{backgroundColor: "oklch(0.18 0.08 258.31)"}}></div>
  
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Algorithmic  Lab
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Интерактивное обучение математике для нового поколения учеников.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link
            to="/modules"
            className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Посмотреть модули
          </Link>
          {/* <Link
            to="/login"
            className="px-8 py-3 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Вход
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
