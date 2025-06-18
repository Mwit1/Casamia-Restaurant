
import React from 'react';

const WineCellar = () => {
  const wineSelection = [
    {
      name: 'Barolo DOCG 2018',
      region: 'Piedmont',
      description: 'Full-bodied red with notes of cherry and truffle',
      price: '€85'
    },
    {
      name: 'Chianti Classico Riserva 2019',
      region: 'Tuscany',
      description: 'Elegant red with balanced tannins and fruit',
      price: '€45'
    },
    {
      name: 'Prosecco di Valdobbiadene DOCG',
      region: 'Veneto',
      description: 'Crisp sparkling wine with floral notes',
      price: '€35'
    }
  ];

  return (
    <section id="wine-cellar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Wine Cellar
          </h2>
          <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Wine cellar with wooden barrels"
              className="rounded-lg shadow-2xl hover-scale"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Featured Selections</h3>
              <div className="space-y-6">
                {wineSelection.map((wine, index) => (
                  <div key={index} className="border-b border-amber-100 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{wine.name}</h4>
                        <p className="text-amber-600 text-sm font-medium">{wine.region}</p>
                      </div>
                      <span className="text-amber-700 font-bold">{wine.price}</span>
                    </div>
                    <p className="text-gray-600">{wine.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-amber-800 mb-2">Wine Tasting</h4>
              <p className="text-gray-700 mb-2">Every Saturday: 4:00 PM - 6:00 PM</p>
              <p className="text-gray-600">Join our sommelier for guided tastings featuring rotating selections from our cellar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineCellar;
