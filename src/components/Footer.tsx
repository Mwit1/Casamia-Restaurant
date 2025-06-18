
import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100089095086602', label: 'Facebook', target:'_blank' },
    { icon: Instagram, href: 'https://www.instagram.com/casamiadiani/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@Casamia-Restaurant-Diani', label: 'YouTube' },
    { icon: MapPin, href: 'https://www.google.com/maps/place/Casamia+Diani+Beach/@-4.3114575,39.5750008,69m/data=!3m1!1e3!4m14!1m7!3m6!1s0x184049b7106d1bd5:0x1980433109ee50d!2sCasamia+Diani+Beach!8m2!3d-4.3114454!4d39.5751667!16s%2Fg%2F11tnnj61_b!3m5!1s0x184049b7106d1bd5:0x1980433109ee50d!8m2!3d-4.3114454!4d39.5751667!16s%2Fg%2F11tnnj61_b?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D', label: 'Location' },
  ];

  return (
    <footer className="bg-[#1582b4] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <img 
              src="\pics\Casamia Logo (1).png" 
              alt="Casamia Italian Restaurant Lounge Bar" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-blue-100 mb-4">
              Experience authentic Italian cuisine in an elegant atmosphere. 
              From traditional dishes to modern interpretations, every meal is a celebration.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-blue-100">+254 714 392 724</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-blue-100">info@casamiadiani.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100">
                  80401<br />
                  Diani Beach Road, Kenya
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
            <div className="space-y-1 text-blue-100">
              <p>Monday - Friday: 4:00 PM - 11:30 PM</p>
              <p>Saturday - Sunday: 12:00 PM - 11:30 PM</p>
              
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
                  className="text-blue-200 hover:text-white transition-colors duration-200 hover-scale"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-blue-200 mt-4 text-sm">
              Stay connected for special events, seasonal menus, and exclusive offers.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 Casamia Italian Restaurant & Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
