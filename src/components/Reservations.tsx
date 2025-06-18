
import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'Edwin',       // Replace with your actual service ID
    'template_mcg7sao',  // Replace with your template ID
    formData,                // This must match your template vars
    'f2fJ4mDgiBPpGLNrZ'        // From EmailJS account (NOT the secret key)
  )
  .then(() => {
    alert('Reservation sent successfully! We’ll contact you shortly.');
  })
  .catch((error) => {
    console.error('EmailJS Error:', error);
    alert('Something went wrong. Please try again.');
  });
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#1582b4] mb-4">
            Reservations
          </h2>
          <div className="text-lg text-gray-600 font-cinzel max-w-4xl mx-auto space-y-4">
            <p>
              To make a reservation, kindly give us a call. Our team will be happy to assist you in selecting the perfect table for your occasion, whether you're looking for an intimate dinner for two or a larger group celebration.
            </p>
            <p>
              At Casamia Italian Fine Dining Restaurant, we pride ourselves on providing exceptional service and creating an atmosphere that is both comfortable and refined. From the moment you walk through our doors, you'll be greeted with a warm welcome and made to feel like a valued guest.
            </p>
            <p>
              So whether you're celebrating a special occasion or simply looking for a night out, we invite you to reserve a table and experience the best that Diani Beach has to offer. We look forward to welcoming you soon.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline w-4 h-4 mr-1" />
                    Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Dietary restrictions, special occasions, seating preferences..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1582b4] text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-800 transition-colors duration-200 hover-scale"
              >
                Submit Reservation 
              </button>
            </form>
          </div>

          <div className="animate-fade-in space-y-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1582b4] mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#1582b4] mr-3" />
                  <span className="text-gray-700">+254 714 392 724</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#1582b4] mr-3" />
                  <span className="text-gray-700">info@casamiadiani.com</span>
                </div>
              </div>
            </div>

          <div className="bg-[#1582b4] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Location</h3>
            <p className="text-white mb-4">
              Diani Beach Road, Ukunda<br />
              Kenya<br />
              
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Casamia Map"
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15956.722949437375!2d39.5750008!3d-4.3114575!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x184049b7106d1bd5%3A0x1980433109ee50d!2sCasamia%20Diani%20Beach!5e1!3m2!1sen!2ske!4v1718729745273!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>


          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Reservations;
