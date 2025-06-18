
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
          <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
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
            <p>
              At Casamia we believe that exceptional service is just as important as the food we serve. That's why we take great care in selecting and training our team of professional waiters, who are dedicated to providing an unforgettable dining experience for every guest.
            </p>
            <p>
              Our waiters are knowledgeable, friendly, and always eager to go above and beyond to ensure that every detail of your dining experience is just right. From helping you select the perfect wine to recommending a dish that perfectly suits your tastes, our team is committed to making your visit to our restaurant as enjoyable as possible.
            </p>
            <p>
              We are proud to have Chef Maurizio at the helm of our kitchen. With over 15 years of experience in the culinary world, Chef Maurizio brings a wealth of knowledge and expertise to our restaurant. Born and raised in Italy, Chef Maurizio learned to cook at a young age from his grandmother, who instilled in him a love of traditional Italian cuisine. Over the years, he has honed his skills through extensive training and experience working in some of the world's top restaurants.
            </p>
          </div>
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
