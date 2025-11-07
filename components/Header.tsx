
import React from 'react';
import { PageView } from '../types';

interface HeaderProps {
  setCurrentView: (view: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentView }) => {
  const navItems = [
    { name: 'Humedales', view: { page: 'home' } as PageView },
    { name: 'Información', view: { page: 'informacion' } as PageView },
    { name: 'Conservación', view: { page: 'conservacion' } as PageView },
  ];

  return (
    <header className="bg-[#4A6C4A] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight cursor-pointer" onClick={() => setCurrentView({ page: 'home' })}>
            Humedales Urbanos de Temuco
          </h1>
          <p className="text-sm text-gray-200">Descubre la naturaleza en nuestra ciudad</p>
        </div>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setCurrentView(item.view)}
                  className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-white"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
