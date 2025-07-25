
import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Youtube, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Restaurant', href: '#restaurant' },
    { name: 'Lounge', href: '#lounge' },
    { name: 'Wine Cellar', href: '#wine-cellar' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100089095086602', label: 'Facebook', target:'_blank' },
    { icon: Instagram, href: 'https://www.instagram.com/casamiadiani/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@Casamia-Restaurant-Diani', label: 'YouTube' },
    { icon: Star, href: 'https://www.tripadvisor.com/Restaurant_Review-g775870-d25228468-Reviews-Casamia-Diani_Beach_Ukunda_Coast_Province.html', label: 'TripAdvisor' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/pics/CasamiaLogo.png" 
              alt="Casamia Italian Restaurant Lounge Bar" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
