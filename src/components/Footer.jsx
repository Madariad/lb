import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Верхняя часть футера: логотип и навигация */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">
              Algorithmic  Lab
            </h3>
            <p className="text-sm">
              © 2025 Algorithmic  Lab. Все права защищены.
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            <Link to="/privacy" className="hover:text-white text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-white text-sm">
              Условия использования
            </Link>
            <Link to="/contact" className="hover:text-white text-sm">
              Контакты
            </Link>
          </div>
        </div>
        {/* Нижняя часть футера: ссылки на соцсети */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Следите за нами:
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 hover:text-white"
            >
              Facebook
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Twitter
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
