import React from 'react';
import { Heart, Brain, Stethoscope, Baby } from 'lucide-react';

const services = [
  { name: 'Cardiology', icon: Heart },
  { name: 'Neurology', icon: Brain },
  { name: 'General Medicine', icon: Stethoscope },
  { name: 'Pediatrics', icon: Baby },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-6 rounded-lg shadow-md text-center">
              <service.icon className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;