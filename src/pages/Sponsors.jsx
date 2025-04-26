import React, { useState } from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const societiesData = [
  {
    name: 'TechSoc',
    description: 'TechSoc is focused on tech innovation, coding competitions, and workshops.',
    work: 'Organizes national-level hackathons, tech quizzes, and mentorship programs.',
    events: [
      {
        name: 'HackRush',
        date: '2024-09-15',
        location: 'Auditorium A, MAIT',
        participation: 120,
        image: 'https://images.unsplash.com/photo-1581091012184-1c7817f03f5c', // Replace with real image
      },
      {
        name: 'CodeMania',
        date: '2024-12-03',
        location: 'Main Hall, MAIT',
        participation: 90,
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692', // Replace
      },
    ],
  },
  {
    name: 'ArtNest',
    description: 'ArtNest promotes creativity through painting, sketching, and design.',
    work: 'Conducts art exhibitions, creative workshops, and mural painting events.',
    events: [
      {
        name: 'ColorFest',
        date: '2025-01-20',
        location: 'Cultural Block, MAIT',
        participation: 75,
        image: 'https://images.unsplash.com/photo-1589578527966-2b3e6f92a12f', // Replace
      },
    ],
  },
];

export default function PartnerSocieties() {
  const [selectedSocietyIndex, setSelectedSocietyIndex] = useState(0);
  const society = societiesData[selectedSocietyIndex];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Menu */}
      <aside className="w-1/4 bg-white border-r border-gray-200 p-4 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Partner Societies</h2>
        {societiesData.map((s, index) => (
          <button
            key={index}
            onClick={() => setSelectedSocietyIndex(index)}
            className={`block w-full text-left px-3 py-2 rounded-lg transition ${
              index === selectedSocietyIndex
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            {s.name}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6 overflow-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">{society.name}</h1>
          <p className="text-gray-600">{society.description}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">How They Work</h2>
          <p className="text-gray-700">{society.work}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Events with Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {society.events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-xl transition"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <div className="text-gray-600 text-sm flex items-center gap-2">
                    <FaCalendarAlt /> {event.date}
                  </div>
                  <div className="text-gray-600 text-sm flex items-center gap-2">
                    <FaMapMarkerAlt /> {event.location}
                  </div>
                  <div className="text-gray-600 text-sm flex items-center gap-2">
                    <FaUsers /> {event.participation} participants
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
