import React from 'react';

const doctors = [
  { name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Dr. Mike Johnson', specialty: 'Pediatrician', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;