
import React from 'react';

const ConservationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Conservación Urbana</h2>
        <div className="w-full h-64 bg-cover bg-center rounded-lg mb-6" style={{backgroundImage: "url('https://picsum.photos/seed/conservacion/1000/400')"}}></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Praesent rhoncus nisl nec viverra egestas. Etiam convallis risus porta, aliquam arcu sit amet, cursus enim. Vestibulum quis vehicula augue. Ut vel sem non tellus tristique pulvinar at eget sapien. Duis a lorem turpis. Mauris ut justo venenatis, accumsan turpis quis, aliquet massa. Cras a feugiat tellus. Aliquam erat volutpat.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Vivamus lectus justo, elementum at facilisis vel, vulputate a neque. Sed et pharetra ligula. Nulla dapibus egestas bibendum. Praesent placerat aliquet orci, vel euismod eros finibus vitae. Mauris porttitor nisi at augue ultricies gravida. Nam venenatis congue ante.
        </p>
      </div>
    </div>
  );
};

export default ConservationPage;
