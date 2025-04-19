import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

// Sample past events data - replace with your actual events
const pastEvents = [
  {
    id: 1,
    title: "Annual Tech Conference 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Grand Convention Center",
    description: "Our flagship technology conference featuring industry leaders and innovative workshops.",
    attendees: 850,
    imageUrl: "/api/placeholder/600/400" // Replace with your actual image
  },
  {
    id: 2,
    title: "Summer Charity Gala",
    date: "July 22, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Riverside Gardens",
    description: "An elegant evening fundraiser supporting local community initiatives.",
    attendees: 320,
    imageUrl: "/api/placeholder/600/400" // Replace with your actual image
  },
  {
    id: 3,
    title: "Product Launch Summit",
    date: "September 5, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Innovation Hub",
    description: "Unveiling our latest product line with demonstrations and networking opportunities.",
    attendees: 500,
    imageUrl: "/api/placeholder/600/400" // Replace with your actual image
  },
  {
    id: 4,
    title: "Winter Workshop Series",
    date: "December 10, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Creative Campus",
    description: "Hands-on workshops focused on skill development and creative collaboration.",
    attendees: 200,
    imageUrl: "/api/placeholder/600/400" // Replace with your actual image
  }
];

export default function PastEventsSection() {
  const [activeEvent, setActiveEvent] = useState(0);
  
  // Auto-rotate events every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % pastEvents.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">Our Memorable Events</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Look back at some of our most successful gatherings and celebrations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Event Navigation */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 mb-6 lg:mb-0 justify-center lg:justify-start">
            {pastEvents.map((event, index) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(index)}
                className={`relative px-4 py-3 text-left transition-all duration-300 rounded-lg ${
                  activeEvent === index 
                    ? "bg-indigo-600 text-white shadow-lg" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="block font-medium truncate">{event.title}</span>
                <span className="block text-sm truncate">
                  {activeEvent === index 
                    ? event.date 
                    : event.location}
                </span>
                {activeEvent === index && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Event Display */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Event Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  {pastEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        activeEvent === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.attendees} Attendees
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Event Details */}
                <div className="p-6 md:p-8">
                  {pastEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className={`transition-all duration-500 ${
                        activeEvent === index 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-4 absolute pointer-events-none"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="text-indigo-600 w-5 h-5 mr-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="text-indigo-600 w-5 h-5 mr-3" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="text-indigo-600 w-5 h-5 mr-3" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="text-indigo-600 w-5 h-5 mr-3" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-md">
                          View Gallery
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}