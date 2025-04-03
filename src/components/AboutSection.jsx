import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Иллюстрация платформы */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
  <img 
    src="https://img.freepik.com/free-photo/3d-student-graduation-cap-books-stack_107791-15667.jpg?ga=GA1.1.1799459352.1740832846&semt=ais_hybrid" 
    alt="Интерактивное обучение" 
    className="w-full h-auto rounded-2xl" 
  />
</div>
          {/* Текстовое описание */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              О платформе
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Algorithmic  Lab — это  образовательная платформа, которая объединяет проверенные методики с современными цифровыми инструментами. Мы уверены, что алгоритмическая компетентность — ключ к будущему, а интерактивное обучение делает математику доступной и увлекательной для  учеников.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Интерактивные задания с использованием GeoGebra и Desmos</li>
              <li>Удобный и адаптивный интерфейс для работы учителей и учеников</li>
              <li>Моментальная проверка знаний </li>
            </ul>
            <Link 
              to="/modules" 
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              посмотреть
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
