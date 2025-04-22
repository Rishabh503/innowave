import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Music, Camera, Trophy, ArrowRight, ArrowLeft } from 'lucide-react';

// Sample past events data - replace with your actual society events
const pastEvents = [
  {
    id: 1,
    title: "Zypher'24 Orientation",
    date: "August 17, 2024",
    category: "Cultural",
    description: "The grand welcome event for first-years by CSI-Innowave, featuring society intro, keynote speeches, and creative performances.",
    highlights: ["2000+ attendees", "Founders Talk", "Pranav Sharma Performance","Singers"],
    imageUrl: "https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745345923/IMG_6797_ilm6d7.jpg",
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 2,
    title: "CODE-GENESIS",
    date: "July 22, 2024",
    category: "Technical",
    description: "24-hour coding marathon with finals at MICROSOFT office where students built innovative solutions for real-world problems. Prizes worth 5Lakhs+.",
    highlights: ["200+ teams", "Industry mentors", "FINALS AT MICRSOFT ","Live Demos"],
    imageUrl: "https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745346561/Screenshot_2025-04-22_235851_aaruzq.png",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 3,
    title: "UnCharted",
    date: "September 5, 2024",
    category: "Cultural",
    description: "Inter-college sports tournament featuring basketball, football, cricket, and athletics with fierce competition.",
    highlights: ["16 colleges", "Pro referees", "Trophy ceremony"],
    imageUrl: "/api/placeholder/800/500",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 4,
    title: "Intership Fair",
    date: "November 12, 2024",
    category: "Academic",
    description: "Inspiring speakers sharing breakthrough ideas and personal journeys that captivated the audience all day long.",
    highlights: ["8 speakers", "Live streaming", "Interactive Q&A"],
    imageUrl: "/api/placeholder/800/500",
    color: "from-red-500 to-rose-600"
  }
];

// Icons for event categories
const categoryIcons = {
  "Cultural": Music,
  "Technical": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.98h-5.99c-1.66 0-3.01-1.34-3.01-3s1.34-3 3.01-3H18"/><path d="M9 17H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2.81"/><circle cx="9" cy="13.98" r="1"/><path d="M18 22c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>,
  "Sports": Trophy,
  "Academic": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"/><path d="M4 18v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M12 18v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"/><path d="M4 6h.01"/><path d="M8 6h.01"/><path d="M4 10h.01"/><path d="M8 10h.01"/><path d="M4 14h.01"/><path d="M8 14h.01"/></svg>
};

export default function CollegeEventShowcase() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveEvent((prev) => (prev + 1) % pastEvents.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveEvent((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll('.parallax-element');
      const scrollPosition = window.scrollY;
      
      elements.forEach((el, i) => {
        const speed = 0.05 + (i * 0.02);
        const yPos = -scrollPosition * speed;
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate events
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentEvent = pastEvents[activeEvent];
  const IconComponent = typeof categoryIcons[currentEvent.category] === 'function' 
    ? categoryIcons[currentEvent.category] 
    : categoryIcons[currentEvent.category];

  return (
    <section className="relative py-16 overflow-hidden bg-gray-900" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 parallax-element"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 parallax-element"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 parallax-element"></div>
      </div>

      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Unforgettable Moments
          </h2>
          <div className="relative h-1 w-40 bg-gray-700 mx-auto">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{
                width: `${(activeEvent + 1) * 25}%`,
                transition: 'width 0.6s ease-in-out'
              }}
            ></div>
          </div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Relive our most epic society events that made campus history
          </p>
        </div>
        
        {/* Main event showcase */}
        <div className="relative">
          {/* Event cards */}
          <div className="relative h-full">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className={`transition-all duration-500 ${
                  activeEvent === index 
                    ? "opacity-100 translate-y-0 z-20" 
                    : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform transition hover:scale-[1.02] duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image section */}
                    <div className="relative overflow-hidden h-80 lg:h-auto">
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-70 mix-blend-overlay`}></div>
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      
                      {/* Event category badge */}
                      <div className="absolute top-6 left-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-4 py-2 flex items-center space-x-2">
                        {React.isValidElement(IconComponent) ? IconComponent : <IconComponent className="w-5 h-5 text-white" />}
                        <span className="text-white font-medium">{event.category}</span>
                      </div>
                      
                      {/* Event date */}
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="p-8 lg:p-10">
                      <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
                      <p className="text-gray-300 text-lg mb-6">{event.description}</p>
                      
                      {/* Highlights */}
                      <div className="bg-gray-700 bg-opacity-40 rounded-xl p-5 mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Event Highlights</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {event.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center justify-center bg-gray-800 rounded-lg p-3 text-center">
                              <span className="text-gray-200">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA buttons */}
                      <div className="flex flex-wrap gap-4 mt-8">
                        <button className={`px-6 py-3 rounded-xl font-medium text-white shadow-lg bg-gradient-to-r ${event.color} hover:opacity-90 transition-all flex items-center gap-2`}>
                          <Camera className="w-5 h-5" />
                          View Gallery
                        </button>
                        <button className="px-6 py-3 rounded-xl font-medium text-white bg-gray-700 hover:bg-gray-600 transition-all">
                          Event Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {pastEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveEvent(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeEvent === index 
                    ? "bg-white w-8" 
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow navigation */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 focus:outline-none transform transition hover:scale-110 hidden md:block"
            aria-label="Previous event"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 focus:outline-none transform transition hover:scale-110 hidden md:block"
            aria-label="Next event"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Upcoming events teaser */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready For What's Next?</h3>
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-medium hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-indigo-500/30 transform hover:-translate-y-1">
            Check Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
}