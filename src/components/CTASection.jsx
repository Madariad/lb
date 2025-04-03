import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Готовы начать обучение?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к нашему сообществу  учеников, которые уже меняют подход к обучению. Время действовать и открыть новые горизонты в математике и алгоритмическом мышлении!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link
            to="/modules"
            className="px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
              Посмотрите модули
          </Link>
          {/* <Link
            to="/login"
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Вход
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
