
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 animate-fade-in">
          Bella Vita
        </h1>
        <p className="text-xl md:text-2xl text-amber-800 mb-4 italic animate-fade-in">
          Ristorante & Lounge Bar
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
          Experience the authentic taste of Italy in an elegant atmosphere. 
          From traditional cuisine to carefully crafted cocktails, every moment is a celebration.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a
            href="#reservations"
            className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 hover-scale"
          >
            Make a Reservation
          </a>
          <a
            href="#restaurant"
            className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 hover:text-white transition-all duration-200 hover-scale"
          >
            Explore Menu
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-700 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
