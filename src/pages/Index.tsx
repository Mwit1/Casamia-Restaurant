
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Restaurant from '../components/Restaurant';
import Lounge from '../components/Lounge';
import WineCellar from '../components/WineCellar';
import Gallery from '../components/Gallery';
import Reservations from '../components/Reservations';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Restaurant />
      <Lounge />
      <WineCellar />
      <Gallery />
      <Reservations />
      <Footer />
    </div>
  );
};

export default Index;
