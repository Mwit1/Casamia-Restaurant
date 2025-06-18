import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Restaurant = () => {
  return (
    <>
      <section id="restaurant" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-cinzel smd:text-5xl font-bold text-[#1582b4] mb-4">
              Ristorante
            </h2>
            <div className="text-lg  font-playfair text-gray-600 max-w-4xl mx-auto space-y-4">
              <p>
                At Casamia we bring the flavors of Italy to the beautiful shores of Diani Beach, Kenya. Our restaurant is a true culinary gem, offering a unique blend of authentic Italian cuisine and fresh seafood straight from the ocean.
              </p>
              <p>
                At Casamia, we believe that the best dishes start with the freshest ingredients, which is why we source our seafood directly from local fishermen. From succulent prawns to flavorful lobster, our seafood dishes are sure to tantalize your taste buds and leave you craving more.
              </p>
              <p>
                And it's not just seafood – our Italian dishes are equally impressive, with classic recipes and modern twists that showcase the very best of Italian cuisine. From handmade pasta to pizzas, our chefs are masters of their craft and will take you on a culinary journey that you won't soon forget.
              </p>
              <p>
                But Casamia is more than just a restaurant – it's a dining experience. Our elegant decor, attentive service, and stunning ambience create a truly unforgettable atmosphere. We can't wait to welcome you to our table and share our passion for fresh Indian Ocean seafood and authentic Italian cuisine.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="/pics/Casamia-Restaurant-Diani-Beach-15.avif"
                alt="Elegant restaurant interior"
                className="rounded-lg shadow-2xl hover-scale"
              />
            </div>
            <div className="text-lg font-playfair text-gray-600 max-w-4xl mx-auto space-y-4">
              <p>
                At Casamia we believe that exceptional service is just as important as the food we serve. That's why we take great care in selecting and training our team of professional waiters, who are dedicated to providing an unforgettable dining experience for every guest.
              </p>
              <p>
                Our waiters are knowledgeable, friendly, and always eager to go above and beyond to ensure that every detail of your dining experience is just right. From helping you select the perfect wine to recommending a dish that perfectly suits your tastes, our team is committed to making your visit to our restaurant as enjoyable as possible.
              </p>
              <p>
                We are proud to have Chef Maurizio at the helm of our kitchen. With over 15 years of experience in the culinary world, Chef Maurizio brings a wealth of knowledge and expertise to our restaurant. Born and raised in Italy, Chef Maurizio learned to cook at a young age from his grandmother, who instilled in him a love of traditional Italian cuisine. Over the years, he has honed his skills through extensive training and experience working in some of the world's top restaurants.
              </p>
              <PicsR />
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;

export const PicsR = () => {
  const images = [
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-14.avif",
      alt: 'Elegant dining room'
    },
    
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-64.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-74.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-71.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-68.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-50.avif",
      
    },
    {
      src: "/pics/Casamia-Restaurant-Diani-Beach-65.avif",
      
    },   
  ];

  return (
    <section id="Restaurant" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
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
            Swipe or use the arrows to browse through our Restaurant
          </p>
        </div>
      </div>
    </section>
  );
};
