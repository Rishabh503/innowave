import React from "react";

const events = [
  {
    name: "ESPORTS-VISPHOT",
    date: "Nov 10, 2024",
    college: "MAIT Delhi",
    about:
      "A Diwali-themed gaming night featuring BGMI, Among Us, Ludo, and more. It's an electrifying night full of competition and fun.",
    images: [
      "https://images.unsplash.com/photo-1609655649769-10c6a4396f7e", // gaming
      "https://images.unsplash.com/photo-1607460353679-d4d5bfe87504", // esports
      "https://images.unsplash.com/photo-1638931153706-cd94ba7fd9db", // diwali lights
    ],
  },
  {
    name: "Zypher Orientation",
    date: "Aug 5, 2024",
    college: "MAIT Delhi",
    about:
      "The flagship orientation event for 700+ students. Filled with energy, keynote speakers, and student performances to kickstart the journey.",
    images: [
      "https://images.unsplash.com/photo-1592768530719-10efaa195609", // college crowd
      "https://images.unsplash.com/photo-1611320046470-7e015106d72b", // stage talk
      "https://images.unsplash.com/photo-1614850523458-3fdbfdd89853", // interaction
    ],
  },
  {
    name: "UNCHATTARED Hackathon",
    date: "Oct 15, 2024",
    college: "MAIT Delhi",
    about:
      "One of the most intense and innovative hackathons with 24 hours of coding, team collaboration, and building solutions.",
    images: [
      "https://images.unsplash.com/photo-1562187643-df70b8490ad0", // hackathon coding
      "https://images.unsplash.com/photo-1521747116042-5a10a02d2f68", // team collaboration
      "https://images.unsplash.com/photo-1563890145-c9ca717056a6", // coding session
    ],
  },
];

const EventDisplay = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-r from-indigo-100 to-white">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Events at Glimpse
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-6 flex flex-col hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Event Image Gallery */}
            <div className="relative h-56 mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 rounded-xl"></div>
              <img
                src={event.images[0]}
                alt={event.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Event Info */}
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-semibold text-indigo-600">
                {event.name}
              </h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-base text-gray-700">{event.about}</p>
              <p className="text-sm text-gray-400 italic">Hosted at {event.college}</p>
            </div>

            {/* Event Gallery */}
            <div className="flex justify-center mt-6 space-x-4">
              {event.images.slice(1).map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`event-img-${imgIndex}`}
                  className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300 hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDisplay;
