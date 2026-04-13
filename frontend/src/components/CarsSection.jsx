// components/CarsSection.jsx
import React from 'react';

const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    price: '45',
    type: 'Sedan',
    image: '🚗',
    features: ['AC', 'GPS', 'Auto']
  },
  {
    id: 2,
    name: 'Honda CR-V',
    price: '65',
    type: 'SUV',
    image: '🚙',
    features: ['AC', 'GPS', '4WD']
  },
  {
    id: 3,
    name: 'BMW X5',
    price: '120',
    type: 'Luxury SUV',
    image: '🚘',
    features: ['AC', 'GPS', 'Leather']
  }
];

const CarsSection = () => {
  return (
    <section id="cars" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide selection of well-maintained vehicles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100"
            >
              <div className="h-64 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{car.image}</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                <div className="text-lg text-gray-500 mb-4 font-medium">{car.type}</div>
                <div className="text-4xl font-bold text-red-500 mb-6">${car.price}<span className="text-lg text-gray-500 font-normal">/day</span></div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {car.features.map((feature, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Rent Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;