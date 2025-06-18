
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Lounge = () => {
  
  return (
  <>
    <section id="lounge" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#1582b4] mb-4">
            Lounge 
          </h2>
          <div className="text-lg font-playfair text-gray-600 max-w-4xl mx-auto space-y-4">
            <p>
              Welcome to the lounge area at Casamia Restaurant, where we offer a luxurious and comfortable space for you to relax and unwind in the heart of Diani Beach, Kenya. With swaying palm trees, comfortable sofas, and a laid-back atmosphere, our lounge area is the perfect spot to enjoy a cocktail and some delicious bitings.
            </p>
            <p>
              Our lounge area is designed to be both elegant and inviting, with plush seating options and stunning views of our tropical garden. Whether you're looking for a place to unwind after a long day at the beach or to start your evening off right, our lounge area has everything you need.
            </p>
            <p>
              Our talented mixologists are on hand to create handcrafted cocktails made with only the freshest ingredients. Whether you prefer a classic martini or something more adventurous, we have something to suit every taste.
            </p>
            <p>
              And no lounge experience is complete without some delicious bitings to nibble on. Our chefs have crafted a menu of small bites and appetizers that are the perfect accompaniment to your cocktail. From crispy calamari to bruschetta and everything in between, our bitings are sure to satisfy your cravings.
            </p>
            <p>
              So whether you're looking for a romantic evening out or a place to catch up with friends, Casamia Italian Fine Dining Restaurant's lounge area has it all. Come join us among the palm trees and comfortable sofas and experience the best that Diani Beach has to offer.
            </p>
          </div>
          <PicsL />
        </div>
      </div>
    </section>
     
  </>
  
  );
};

export default Lounge;

export const PicsL = () => {
  const images = [
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-28.avif",
      alt: 'Lounge Area'
    },
    
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-58.avif",
      alt: 'Guest at Lounge Area'
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-29.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-11.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-48.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-31.avif",
      
    },   
  ];

  return (
    <section id="lounge" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover-scale animate-fade-in">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-blue-600 text-blue-600 hover:text-blue-700" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white border-blue-600 text-blue-600 hover:text-blue-700" />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Swipe or use the arrows to browse through our Lounge
          </p>
        </div>
      </div>
    </section>
  );
};