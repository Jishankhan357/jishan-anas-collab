// components/Features.jsx
import React from 'react';

const features = [
  {
    icon: 'fas fa-shield-alt',
    title: 'Safe & Secure',
    description: 'All cars are thoroughly inspected and insured',
    color: 'text-emerald-500'
  },
  {
    icon: 'fas fa-clock',
    title: '24/7 Support',
    description: 'Round the clock customer support available',
    color: 'text-blue-500'
  },
  {
    icon: 'fas fa-dollar-sign',
    title: 'Best Prices',
    description: 'Competitive rates with no hidden fees',
    color: 'text-amber-500'
  },
  {
    icon: 'fas fa-truck-pickup',
    title: 'Wide Selection',
    description: 'Choose from economy to luxury vehicles',
    color: 'text-purple-500'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
          Why Choose SpeedRent?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-indigo-100"
            >
              <div className={`w-20 h-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} ${feature.color} text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;