import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">City General Hospital</h3>
          <p>Providing quality healthcare since 1950</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#doctors" className="hover:underline">Doctors</a></li>
            <li><a href="#appointments" className="hover:underline">Appointments</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><Phone size={18} className="mr-2" /> (123) 456-7890</li>
            <li className="flex items-center"><Mail size={18} className="mr-2" /> info@citygeneralhospital.com</li>
            <li className="flex items-center"><MapPin size={18} className="mr-2" /> 123 Hospital St, City, State 12345</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 City General Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;