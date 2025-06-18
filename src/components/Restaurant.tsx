
import React from 'react';

const Restaurant = () => {
  const specialties = [
    {
      name: 'Osso Buco alla Milanese',
      description: 'Slow-braised veal shanks with saffron risotto',
      price: '€32'
    },
    {
      name: 'Linguine alle Vongole',
      description: 'Fresh clams with white wine and parsley',
      price: '€24'
    },
    {
      name: 'Tiramisu della Casa',
      description: 'Traditional recipe with espresso and mascarpone',
      price: '€12'
    }
  ];

  return (
    <section id="restaurant" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Ristorante
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our chef brings the authentic flavors of Italy to your table, using only the finest 
            ingredients sourced from local markets and traditional Italian suppliers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Elegant restaurant interior"
              className="rounded-lg shadow-2xl hover-scale"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Chef's Specialties</h3>
              <div className="space-y-6">
                {specialties.map((dish, index) => (
                  <div key={index} className="border-b border-amber-100 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{dish.name}</h4>
                      <span className="text-amber-700 font-bold">{dish.price}</span>
                    </div>
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-amber-800 mb-2">Opening Hours</h4>
              <div className="space-y-1 text-gray-700">
                <p>Monday - Thursday: 12:00 PM - 11:00 PM</p>
                <p>Friday - Saturday: 12:00 PM - 12:00 AM</p>
                <p>Sunday: 12:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
