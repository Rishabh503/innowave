import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Globe } from 'lucide-react';

const Partners = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const societies = {
    technical: [
      {
        name: "TechMinds Society",
        description: "Leading technical innovation and learning",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
        events: [
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80"
        ]
      },
      {
        name: "Robotics Club",
        description: "Advancing robotics and automation",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
        events: [
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1581092334247-ddef72a944d1?auto=format&fit=crop&q=80"
        ]
      }
    ],
    cultural: [
      {
        name: "Dance Society",
        description: "Expressing culture through movement",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80",
        events: [
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80"
        ]
      },
      {
        name: "Music Club",
        description: "Creating harmony through collaboration",
        image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80",
        events: [
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80"
        ]
      }
    ],
    sports: [
      {
        name: "Sports Club",
        description: "Promoting athletic excellence",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
        events: [
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80"
        ]
      },
      {
        name: "Adventure Club",
        description: "Exploring the outdoors",
        image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80",
        events: [
          "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1516398810066-c48f8e9bd92b?auto=format&fit=crop&q=80"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Societies</h1>
          <p className="text-lg text-gray-600">Collaborating with the best student organizations</p>
        </motion.div>

        {/* Society Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-1">
            {Object.keys(societies).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === type
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Society Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {societies[activeTab].map((society, index) => (
            <motion.div
              key={society.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={society.image}
                  alt={society.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{society.name}</h3>
                <p className="text-gray-600 mb-4">{society.description}</p>
                
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <Globe className="h-6 w-6" />
                  </a>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Events</h4>
                <div className="grid grid-cols-3 gap-2">
                  {society.events.map((event, i) => (
                    <div key={i} className="h-24 overflow-hidden rounded-lg">
                      <img
                        src={event}
                        alt={`Event ${i + 1}`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;