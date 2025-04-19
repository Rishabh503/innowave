import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

// Sample past events data - replace with your actual events
const pastEvents = [
  {
    id: 1,
    title: "HORIZON 2024: Technology Summit",
    date: "March 15, 2024",
    location: "Main Campus Auditorium",
    description: "A two-day technology conference featuring industry leaders, interactive workshops, and networking opportunities for students passionate about innovation.",
    attendance: 850,
    imageUrl: "/api/placeholder/1920/1080",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  },
  {
    id: 2,
    title: "RHYTHM: Annual Cultural Festival",
    date: "July 8, 2024",
    location: "University Central Plaza",
    description: "Our flagship cultural extravaganza showcasing performances, art exhibitions, and competitions with participation from over 25 colleges across the region.",
    attendance: 2000,
    imageUrl: "/api/placeholder/1920/1080",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  },
  {
    id: 3,
    title: "CODE QUEST: 36-Hour Hackathon",
    date: "September 22, 2024",
    location: "Innovation Hub",
    description: "An intense coding marathon where participants built innovative solutions addressing real-world problems, with mentorship from tech industry professionals.",
    attendance: 350,
    imageUrl: "/api/placeholder/1920/1080",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  },
  {
    id: 4,
    title: "SPORTATHON: Inter-College Championships",
    date: "October 10, 2024",
    location: "University Sports Complex",
    description: "Annual sports meet featuring various competitions including basketball, football, cricket, and athletics with participation from colleges across the state.",
    attendance: 1200,
    imageUrl: "/api/placeholder/1920/1080",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  }
];

export  function FullScreenEventShowcase1() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  
  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setActiveEvent((prev) => (prev + 1) % pastEvents.length);
    setTimeout(() => setTransitioning(false), 600);
  };
  
  const handlePrev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setActiveEvent((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
    setTimeout(() => setTransitioning(false), 600);
  };
  
  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [transitioning]);

  return (
    <section className="relative w-full min-h-screen bg-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,0 L100,0 L100,100 L0,100 Z" 
              fill="url(#blue-gradient)" 
              fillOpacity="0.03"
            />
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Past Events Showcase</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">
            Explore the highlights from our most memorable and successful society events
          </p>
        </div>

        {/* Main Event Display */}
        <div className="relative mb-16">
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              className={`transition-all duration-700 ease-in-out ${
                activeEvent === index 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-0 absolute inset-0 transform translate-y-8 pointer-events-none"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 xl:grid-cols-2">
                  {/* Full-height image section */}
                  <div className="relative h-96 xl:h-auto">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
                    
                    {/* Event title overlay for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/90 to-transparent xl:hidden">
                      <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center text-blue-100">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-8 xl:p-12">
                    {/* Event title (desktop) */}
                    <div className="hidden xl:block mb-6">
                      <h3 className="text-4xl font-bold text-blue-900 mb-3">{event.title}</h3>
                      <div className="h-1 w-16 bg-blue-600"></div>
                    </div>
                    
                    {/* Event details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center">
                        <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                        <div>
                          <span className="block text-sm text-blue-500">Date</span>
                          <span className="block text-lg text-blue-800 font-medium">{event.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                        <div>
                          <span className="block text-sm text-blue-500">Location</span>
                          <span className="block text-lg text-blue-800 font-medium">{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-6 h-6 text-blue-600 mr-3" />
                        <div>
                          <span className="block text-sm text-blue-500">Attendance</span>
                          <span className="block text-lg text-blue-800 font-medium">{event.attendance}+ participants</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Event description */}
                    <div className="mb-10">
                      <h4 className="text-xl font-semibold text-blue-800 mb-3">About This Event</h4>
                      <p className="text-blue-700 text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    
                    {/* Event gallery */}
                    <div className="mb-10">
                      <h4 className="text-xl font-semibold text-blue-800 mb-4">Event Gallery</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {event.gallery.map((img, i) => (
                          <div key={i} className="rounded-lg overflow-hidden h-24 bg-blue-50">
                            <img src={img} alt={`Event photo ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-right">
                        <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                          View Full Gallery
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md">
                        Event Details
                      </button>
                      <button className="px-6 py-3 border border-blue-200 bg-white hover:bg-blue-50 text-blue-600 rounded-lg font-medium transition-colors flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Event Page
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-3 shadow-md transition-all focus:outline-none z-20"
            aria-label="Previous event"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-3 shadow-md transition-all focus:outline-none z-20"
            aria-label="Next event"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Event Navigation Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pastEvents.map((event, index) => (
            <button
              key={event.id}
              onClick={() => {
                if (transitioning) return;
                setTransitioning(true);
                setActiveEvent(index);
                setTimeout(() => setTransitioning(false), 600);
              }}
              className={`relative overflow-hidden rounded-xl transition-all ${
                activeEvent === index 
                  ? "ring-4 ring-blue-500 shadow-lg" 
                  : "hover:shadow-md"
              }`}
            >
              <img 
                src={event.imageUrl} 
                alt={event.title}
                className="w-full h-32 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/20 flex flex-col justify-end p-4 ${
                activeEvent === index ? "bg-opacity-70" : "bg-opacity-50"
              }`}>
                <h5 className="text-white font-medium text-sm md:text-base line-clamp-1">{event.title}</h5>
                <p className="text-blue-100 text-xs">{event.date}</p>
              </div>
            </button>
          ))}
        </div>
        
        {/* Upcoming events callout */}
        <div className="mt-16 py-10 px-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-xl text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Excited for what's coming next?</h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Check out our upcoming events calendar to stay updated on all the latest happenings and registration deadlines.
          </p>
          <button className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-colors shadow-lg">
            Upcoming Events Calendar
          </button>
        </div>
      </div>
    </section>
  );
}

