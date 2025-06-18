
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
    <section id="lounge" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Lounge Bar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unwind in our sophisticated lounge with handcrafted cocktails, premium spirits, 
            and a warm, inviting atmosphere perfect for any occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Signature Cocktails</h3>
              <div className="space-y-6">
                {cocktails.map((cocktail, index) => (
                  <div key={index} className="border-b border-amber-100 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{cocktail.name}</h4>
                      <span className="text-amber-700 font-bold">{cocktail.price}</span>
                    </div>
                    <p className="text-gray-600">{cocktail.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-amber-800 mb-2">Happy Hour</h4>
              <p className="text-gray-700 mb-2">Monday - Friday: 5:00 PM - 7:00 PM</p>
              <p className="text-amber-600 font-medium">20% off all cocktails and appetizers</p>
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
