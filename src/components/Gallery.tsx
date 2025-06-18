
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
     {
      src: "/pics/Casamia-Restaurant-Diani-Beach-3.avif",
      alt: 'Arial View'
    },
    
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-1.avif",
      alt: 'Casamia'
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-5.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-59.avif",
       
    },
    
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-60.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-55.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-47.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-46.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-37.avif",
      
    },
     {
      src: "/pics/Casamia-Restaurant-Diani-Beach-28.avif",
      
    },
    
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-22.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-23.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-19.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-20.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-34.avif",
      
    },
     
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-cinzel md:text-5xl font-bold text-[#1582b4] mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 font-playfair max-w-3xl mx-auto">
            Take a visual journey through our restaurant and discover the elegant atmosphere 
            that makes Casania the perfect destination for any occasion.
          </p>
        </div>

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
            Swipe or use the arrows to browse through our Gallery
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
