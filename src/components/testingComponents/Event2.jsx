import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

// Sample past events data - replace with your actual events
const pastEvents = [
  {
    id: 1,
    title: "TEDx Innovation Summit",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "University Main Auditorium",
    description: "A day of inspiring talks featuring renowned speakers sharing groundbreaking ideas and innovations.",
    attendance: "850+ attendees",
    category: "Academic",
    imageUrl: "/api/placeholder/800/450"
  },
  {
    id: 2,
    title: "Annual Cultural Festival",
    date: "July 8, 2024",
    time: "11:00 AM - 10:00 PM",
    location: "University Campus Grounds",
    description: "Our biggest cultural celebration with performances, art exhibitions, and food stalls from diverse cultures.",
    attendance: "2000+ attendees",
    category: "Cultural",
    imageUrl: "/api/placeholder/800/450"
  },
  {
    id: 3,
    title: "Hackathon 2024",
    date: "September 22, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "Tech Innovation Hub",
    description: "A 12-hour coding marathon where students build innovative solutions to real-world problems.",
    attendance: "120 teams",
    category: "Technical",
    imageUrl: "/api/placeholder/800/450"
  },
  {
    id: 4,
    title: "Inter-College Sports Meet",
    date: "October 10, 2024",
    time: "8:00 AM - 6:00 PM",
    location: "University Sports Complex",
    description: "Annual sports competition featuring basketball, football, cricket, and athletics with teams from 15 colleges.",
    attendance: "500+ participants",
    category: "Sports",
    imageUrl: "/api/placeholder/800/450"
  }
];

export default function EventShowcase() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  const goToNext = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setCurrentEvent((prev) => (prev + 1) % pastEvents.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setCurrentEvent((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToEvent = (index) => {
    if (isTransitioning || index === currentEvent) return;
    setDirection(index > currentEvent ? 'next' : 'prev');
    setIsTransitioning(true);
    setCurrentEvent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-rotation with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100"></div>
        <div className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-blue-50"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-50"></div>
        <svg className="absolute top-0 left-0 w-full opacity-20" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,1000 C600,800 800,600 1000,0 L1000,1000 Z" fill="rgba(59, 130, 246, 0.1)"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Signature Events</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            Relive the highlights of our most memorable events that define our society's legacy
          </p>
        </div>

        {/* Events Showcase */}
        <div className="relative">
          {/* Main Event Display */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 relative">
            <div className="relative h-full">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`${
                    currentEvent === index 
                      ? "opacity-100 z-10" 
                      : "opacity-0 absolute inset-0 z-0"
                  } transition-all ease-in-out duration-500 transform ${
                    isTransitioning && currentEvent === index 
                      ? direction === 'next' ? "translate-x-0" : "translate-x-0" 
                      : ""
                  } ${
                    isTransitioning && currentEvent !== index 
                      ? direction === 'next' ? "-translate-x-full" : "translate-x-full" 
                      : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Event Image (2 columns) */}
                    <div className="lg:col-span-2 relative h-72 lg:h-auto">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <span className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                    
                    {/* Event Details (3 columns) */}
                    <div className="lg:col-span-3 p-8 lg:p-12">
                      {/* Floating Event Number */}
                      <div className="relative mb-4">
                        <span className="absolute -top-20 -left-8 text-9xl font-bold text-blue-100 z-0 opacity-80">
                          {index + 1}
                        </span>
                        <h3 className="text-3xl font-bold text-blue-900 relative z-10">{event.title}</h3>
                      </div>
                      
                      <p className="text-blue-800 text-lg mb-8 max-w-2xl">
                        {event.description}
                      </p>
                      
                      {/* Event Details Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div className="flex items-start">
                          <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="block text-sm text-blue-500 font-medium">Date</span>
                            <span className="block text-blue-800">{event.date}</span>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="block text-sm text-blue-500 font-medium">Time</span>
                            <span className="block text-blue-800">{event.time}</span>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="block text-sm text-blue-500 font-medium">Location</span>
                            <span className="block text-blue-800">{event.location}</span>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="block text-sm text-blue-500 font-medium">Attendance</span>
                            <span className="block text-blue-800">{event.attendance}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-md">
                          View Gallery
                        </button>
                        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors flex items-center gap-2">
                          Event Details
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            {/* Navigation Dots */}
            <div className="flex items-center space-x-3">
              {pastEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToEvent(index)}
                  className={`rounded-full transition-all focus:outline-none ${
                    currentEvent === index 
                      ? "w-10 h-3 bg-blue-600" 
                      : "w-3 h-3 bg-blue-300 hover:bg-blue-400"
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrow Navigation */}
            <div className="flex space-x-2">
              <button 
                onClick={goToPrev}
                className="p-3 rounded-full bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                aria-label="Previous event"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={goToNext}
                className="p-3 rounded-full bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                aria-label="Next event"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Event Quick Access */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {pastEvents.map((event, index) => (
              <button
                key={event.id}
                onClick={() => goToEvent(index)}
                className={`p-4 rounded-xl transition-all ${
                  currentEvent === index 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-white text-blue-800 hover:bg-blue-50 shadow-md"
                }`}
              >
                <div className="text-left">
                  <h4 className={`font-medium mb-1 ${currentEvent === index ? "text-white" : "text-blue-900"}`}>
                    {event.title}
                  </h4>
                  <p className={`text-sm ${currentEvent === index ? "text-blue-100" : "text-blue-500"}`}>
                    {event.date}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}