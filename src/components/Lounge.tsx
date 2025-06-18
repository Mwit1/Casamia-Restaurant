
import React from 'react';

const Lounge = () => {
  const cocktails = [
    {
      name: 'Negroni Sbagliato',
      description: 'Campari, sweet vermouth, Prosecco',
      price: '€14'
    },
    {
      name: 'Aperol Spritz',
      description: 'Aperol, Prosecco, soda water',
      price: '€12'
    },
    {
      name: 'Limoncello Martini',
      description: 'Vodka, limoncello, fresh lemon',
      price: '€16'
    }
  ];

  return (
    <section id="lounge" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Lounge Bar
          </h2>
          <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Signature Cocktails</h3>
              <div className="space-y-6">
                {cocktails.map((cocktail, index) => (
                  <div key={index} className="border-b border-blue-100 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{cocktail.name}</h4>
                      <span className="text-blue-700 font-bold">{cocktail.price}</span>
                    </div>
                    <p className="text-gray-600">{cocktail.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Happy Hour</h4>
              <p className="text-gray-700 mb-2">Monday - Friday: 5:00 PM - 7:00 PM</p>
              <p className="text-blue-600 font-medium">20% off all cocktails and appetizers</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Elegant lounge bar with warm lighting"
              className="rounded-lg shadow-2xl hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lounge;
