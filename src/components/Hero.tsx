import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to City General Hospital</h2>
        <p className="text-xl mb-8">Providing compassionate care and cutting-edge medical services</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default Hero;