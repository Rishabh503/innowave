import { useState } from 'react';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const societies = [
  {
    name: "CSI Innowave",
    description: "Focused on tech innovation, workshops, and student empowerment.",
    working: "Conducts regular tech talks, coding contests, and collaborative projects.",
    events: [
      {
        name: "Smart-o-Hack",
        date: "Feb 15, 2025",
        location: "MAIT Delhi",
        participants: 350,
        images: [
          "https://source.unsplash.com/random/300x200?coding",
          "https://source.unsplash.com/random/300x200?hackathon"
        ]
      },
      {
        name: "CodeBurst",
        date: "Jan 10, 2025",
        location: "MAIT Auditorium",
        participants: 200,
        images: [
          "https://source.unsplash.com/random/300x200?developer",
          "https://source.unsplash.com/random/300x200?code"
        ]
      }
    ]
  },
  {
    name: "DebSoc MAIT",
    description: "Society for passionate debaters and public speakers.",
    working: "Organizes MUNs, debate tournaments, and critical thinking workshops.",
    events: [
      {
        name: "Verbal Combat",
        date: "Mar 5, 2025",
        location: "MAIT Block A",
        participants: 150,
        images: [
          "https://source.unsplash.com/random/300x200?debate",
          "https://source.unsplash.com/random/300x200?mic"
        ]
      }
    ]
  }
];

export default function PartnerSocieties() {
  const [active, setActive] = useState(0);

  return (
    <div className="p-6 max-w-screen-xl mx-auto text-gray-800">
      {/* Horizontal menu edit for a save comment*/}
      <div className="flex overflow-x-auto gap-4 mb-6">
        {societies.map((society, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition ${
              active === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
            }`}
            onClick={() => setActive(index)}
          >
            {society.name}
          </button>
        ))}
      </div>

      {/* Society Info */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">{societies[active].name}</h2>
        <p className="text-lg mb-2">{societies[active].description}</p>
        <p className="italic text-gray-600 mb-4">{societies[active].working}</p>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {societies[active].events.map((event, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">{event.name}</h3>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <FaCalendarAlt /> {event.date}
              <FaMapMarkerAlt className="ml-4" /> {event.location}
              <FaUsers className="ml-4" /> {event.participants} participants
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Event ${i}`}
                  className="rounded-lg object-cover h-32 w-full hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
