// components/Hero.jsx
import React, { useState } from "react";

const Hero = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    console.log({ pickup, dropoff, date });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white relative overflow-hidden pt-20"
    >
      {/* Background Pattern (simplified to avoid Tailwind errors) */}
      <div className="absolute inset-0 opacity-10 bg-dots"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Rent Your Dream Car{" "}
          <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Today
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-95 leading-relaxed">
          Discover thousands of cars available for rent. Best prices guaranteed!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="p-4 rounded-2xl bg-white text-gray-900"
                placeholder="Pick-up location"
              />

              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="p-4 rounded-2xl bg-white text-gray-900"
                placeholder="Drop-off location"
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-4 rounded-2xl bg-white text-gray-900"
              />

              <button
                onClick={handleSearch}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-2xl transition"
              >
                🔍 Search Cars
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;