
import React from 'react';

const InformationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Qué son los Humedales Urbanos?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in varius lacus. Pellentesque dapibus ultricies fringilla. Sed semper non nunc eget varius. Nullam posuere tellus et euismod convallis. Ut ac suscipit felis. Quisque a sapien a urna vestibulum consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <div className="w-full h-64 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: "url('https://picsum.photos/seed/infohumedal/1000/400')"}}></div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Importancia para Temuco</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Aenean lobortis odio eget justo rutrum, sit amet laoreet erat maximus. Donec suscipit nec odio sagittis consequat. Cras non mauris in nulla efficitur dictum at sed neque. Suspendisse pulvinar auctor sapien, in placerat diam varius nec. Nullam rutrum sem convallis arcu ultrices, ac malesuada ante porttitor. Suspendisse potenti. Pellentesque id nisl ante. Maecenas massa nulla, tristique vel ipsum sit amet, lobortis commodo neque.
        </p>
      </div>
    </div>
  );
};

export default InformationPage;
