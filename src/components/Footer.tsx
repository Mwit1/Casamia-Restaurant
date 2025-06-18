
import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: MapPin, href: '#', label: 'TripAdvisor' },
  ];

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Bella Vita</h3>
            <p className="text-amber-200 mb-4 italic">Ristorante & Lounge</p>
            <p className="text-amber-100 mb-4">
              Experience authentic Italian cuisine in an elegant atmosphere. 
              From traditional dishes to modern interpretations, every meal is a celebration.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-300" />
                <span className="text-amber-100">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-amber-300" />
                <span className="text-amber-100">info@bellavita.restaurant</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-amber-300 flex-shrink-0" />
                <span className="text-amber-100">
                  Via Roma 123<br />
                  20121 Milano, Italy
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <Clock className="inline w-4 h-4 mr-2" />
              Hours
            </h4>
            <div className="space-y-1 text-amber-100">
              <p>Monday - Thursday: 12:00 PM - 11:00 PM</p>
              <p>Friday - Saturday: 12:00 PM - 12:00 AM</p>
              <p>Sunday: 12:00 PM - 10:00 PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-amber-200 hover:text-white transition-colors duration-200 hover-scale"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-amber-200 mt-4 text-sm">
              Stay connected for special events, seasonal menus, and exclusive offers.
            </p>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 Bella Vita Ristorante & Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
