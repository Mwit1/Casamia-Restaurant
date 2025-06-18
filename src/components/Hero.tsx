
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
           backgroundImage: 'url("/pics/Casamia-Restaurant-Diani-Beach-20.avif")'
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-lg font-playfair md:text-xl text-black mb-2 max-w-2xl font-semibold mx-auto animate-fade-in">
         Welcome to Casamia Italian Restaurant and Lounge, located in the heart of Diani Beach, Kenya. A true oasis of culinary delight, offering an exquisite fine dining experience with a unique twist – an underground glass ceiling wine cellar.
        </p>
        <p className="text-lg md:text-xl font-playfair text-black mb-8 max-w-2xl mx-auto font-semibold animate-fade-in">
         From the moment you step through our doors, you’ll be transported to a world of luxury and sophistication. Our elegant decor sets the tone for an unforgettable evening, as you settle in for a culinary journey through the flavors of Italy
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a
            href="#reservations"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 hover-scale"
          >
            Make a Reservation
          </a>
          <a
            href="#gallery"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 hover-scale"
          >
            Gallery
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
