
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const WineCellar = () => {
 

  return (
   <> 
    <section id="wine-cellar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-cinzel md:text-5xl font-bold text-[#1582b4] mb-4">
            Wine Cellar
          </h2>
          <div className="text-lg text-gray-600 font-playfair max-w-4xl mx-auto space-y-4">
            <p>
              We take our love of fine food and drink to the next level with our underground glass top wine cellar. Located under the restaurant floor, our wine cellar is a truly amazing feature.
            </p>
            <p>
              It's surrounded by a stunning collection of the world's finest wines, each hand-selected by our knowledgeable sommeliers. Our collection includes an array of reds, whites, and sparkling wines, all stored in optimal conditions and to ensure the perfect taste and temperature.
            </p>
            <p>
              Our wine cellar isn't just a place to store our collection – it's an experience in and of itself. The glass top allows you to gaze down at the stunning collection of bottles as you enjoy your meal, adding a touch of elegance and sophistication to your dining experience.
            </p>
            <p>
              And speaking of dining, our menu is perfectly complemented by our extensive wine list. Our sommeliers are on hand to help you select the perfect bottle to pair with your meal, ensuring that every sip and every bite is a perfect match.
            </p>
            <p>
              So whether you're a wine connoisseur or simply looking to enjoy a glass of something special with your meal, Casamia's underground glass top wine cellar is a must-see attraction in Diani Beach. Come join us and discover the perfect pairing of food and wine.
            </p>
          </div>
          <PicsWC />
        </div>
      
      </div>
      
    </section>
      
    </>
  );
};

export default WineCellar;
export const PicsWC = () => {
  const images = [
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-43.avif",
      alt: 'Wine Cellar'
    },
    
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-42.avif",
      alt: 'UnderGround Wine Cellar'
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-41.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-2.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-44.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-45.avif",
      
    },   
  ];

  return (
    <section id="Wine" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
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
            Swipe or use the arrows to browse through our Wine Cellar
          </p>
        </div>
      </div>
    </section>
  );
};