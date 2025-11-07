
import React, { useState } from 'react';
import { Humedal, FloraFauna, Testimonio, PageView } from '../types';

type Tab = 'general' | 'flora' | 'testimonios' | 'galeria';

const TabButton: React.FC<{ activeTab: Tab; tabName: Tab; label: string; onClick: (tab: Tab) => void }> = ({ activeTab, tabName, label, onClick }) => (
  <button
    onClick={() => onClick(tabName)}
    className={`px-3 sm:px-4 py-2 text-base sm:text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
      activeTab === tabName
        ? 'border-b-2 border-[#4A6C4A] text-[#4A6C4A]'
        : 'text-gray-500 hover:text-gray-800'
    }`}
  >
    {label}
  </button>
);

const GeneralTab: React.FC<{ humedal: Humedal }> = ({ humedal }) => (
  <div>
    <h3 className="text-2xl font-bold text-gray-700 mb-4">Descripción</h3>
    <p className="text-gray-600 leading-relaxed mb-6">{humedal.descripcionLarga}</p>
    <h3 className="text-2xl font-bold text-gray-700 mb-4">Ubicación</h3>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-gray-700">{humedal.ubicacion}</p>
    </div>
  </div>
);

const FloraFaunaTab: React.FC<{ items: FloraFauna[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {items.map((item, index) => (
      <div key={index} className="flex items-start space-x-4">
        <img src={item.imagenUrl} alt={item.nombreComun} className="w-24 h-24 object-cover rounded-lg shadow-md flex-shrink-0" />
        <div>
          <h4 className="text-xl font-bold">{item.nombreComun}</h4>
          <p className="text-sm text-gray-500 italic mb-1">{item.nombreCientifico}</p>
          <p className="text-gray-600">{item.descripcion}</p>
        </div>
      </div>
    ))}
  </div>
);

const TestimoniosTab: React.FC<{ testimonios: Testimonio[] }> = ({ testimonios }) => (
  <div className="space-y-6">
    {testimonios.map(testimonio => (
      <div key={testimonio.id} className="bg-gray-100 p-4 rounded-lg border-l-4 border-[#5a8a5a]">
        <p className="text-gray-700 italic">"{testimonio.texto}"</p>
        <p className="text-right font-semibold text-gray-600 mt-2">- {testimonio.autor}</p>
      </div>
    ))}
  </div>
);

const GaleriaTab: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((img, index) => (
      <img key={index} src={img} alt={`Galería ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer" />
    ))}
  </div>
);

interface HumedalDetailPageProps {
  humedal: Humedal;
  setCurrentView: (view: PageView) => void;
}

const HumedalDetailPage: React.FC<HumedalDetailPageProps> = ({ humedal, setCurrentView }) => {
  const [activeTab, setActiveTab] = useState<Tab>('general');

  return (
    <div className="container mx-auto px-6 py-12">
      <button 
        onClick={() => setCurrentView({ page: 'home' })}
        className="mb-8 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
      >
        &larr; Volver a Humedales
      </button>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{humedal.nombre}</h2>
        <p className="text-md sm:text-lg text-gray-500 mb-8">{humedal.subtitulo}</p>
        
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex flex-wrap -mb-px gap-x-2 sm:gap-x-4">
            <TabButton activeTab={activeTab} tabName="general" label="General" onClick={setActiveTab} />
            <TabButton activeTab={activeTab} tabName="flora" label="Flora y Fauna" onClick={setActiveTab} />
            <TabButton activeTab={activeTab} tabName="testimonios" label="Testimonios" onClick={setActiveTab} />
            <TabButton activeTab={activeTab} tabName="galeria" label="Galería" onClick={setActiveTab} />
          </nav>
        </div>
        
        <div>
          {activeTab === 'general' && <GeneralTab humedal={humedal} />}
          {activeTab === 'flora' && <FloraFaunaTab items={humedal.floraYFauna} />}
          {activeTab === 'testimonios' && <TestimoniosTab testimonios={humedal.testimonios} />}
          {activeTab === 'galeria' && <GaleriaTab images={humedal.galeria} />}
        </div>
      </div>
    </div>
  );
};

export default HumedalDetailPage;
