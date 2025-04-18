

import { useState, useEffect } from 'react';
import { ExternalLink, Info, ArrowRight, ArrowLeft } from 'lucide-react';

export default function PartnersHome() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const societies = [
    {
      id: 1,
      name: "Computer Science Society",
      genre: "Technology",
      college: "University of Technology",
      info: "Bridging theory and practice through innovative tech workshops, hackathons, and networking events.",
      logoUrl: "https://picsum.photos/200/300",
      accentColor: "bg-blue-500"
    },
    {
      id: 2,
      name: "Business Club",
      genre: "Finance & Entrepreneurship",
      college: "Business School of Economics",
      info: "Empowering future business leaders through case competitions and professional development.",
      logoUrl: "https://picsum.photos/200/300",
      accentColor: "bg-green-500"
    },
    {
      id: 3,
      name: "Arts Collective",
      genre: "Creative Arts",
      college: "Fine Arts Academy",
      info: "Bringing creative minds together for exhibitions, performances, and artistic collaboration.",
      logoUrl: "https://picsum.photos/200/300",
      accentColor: "bg-purple-500"
    },
    {
      id: 4,
      name: "Engineering Society",
      genre: "Engineering",
      college: "College of Engineering",
      info: "Building tomorrow's solutions through design competitions and technical innovation.",
      logoUrl: "https://picsum.photos/200/300",
      accentColor: "bg-red-500"
    },
    {
      id: 5,
      name: "Debate Union",
      genre: "Public Speaking",
      college: "Liberal Arts University",
      info: "Fostering intellectual discourse and critical thinking through competitive debate.",
      logoUrl: "https://picsum.photos/200/300",
      accentColor: "bg-amber-500"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % societies.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovering, societies.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % societies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + societies.length) % societies.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-300 blur-3xl"></div>
        <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-amber-300 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">Our Partners</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Collaborating with the brightest minds across disciplines to create extraordinary opportunities
        </p>
        
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main showcase */}
          <div className="relative h-96 mb-8 rounded-xl shadow-2xl overflow-hidden">
            {societies.map((society, index) => (
              <div 
                key={society.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="w-1/2 relative overflow-hidden">
                  <div className={`absolute inset-0 ${society.accentColor} opacity-20`}></div>
                  <div className="flex items-center justify-center h-full p-10">
                    <img 
                      src={society.logoUrl} 
                      alt={`${society.name} logo`}
                      className="max-w-full max-h-48 object-contain" 
                    />
                  </div>
                </div>
                
                <div className="w-1/2 p-12 flex flex-col justify-center bg-white">
                  <div className={`h-1 w-20 ${society.accentColor} mb-6`}></div>
                  <h3 className="text-3xl font-bold mb-2">{society.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">{society.genre}</p>
                  <p className="text-gray-500 text-sm mb-2">{society.college}</p>
                  <p className="mt-4 mb-6">{society.info}</p>
                  
                  <div className="flex items-center">
                    <a 
                      href="#" 
                      className="flex items-center text-gray-800 hover:text-black font-medium group mr-6"
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <button 
                      onClick={() => setShowInfo(society.id)}
                      className={`flex items-center justify-center rounded-full p-2 ${society.accentColor} text-white hover:opacity-90 transition-opacity`}
                    >
                      <Info size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Info modal */}
                {showInfo === society.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                      <h4 className="text-xl font-bold mb-3">{society.name} Partnership</h4>
                      <p className="mb-4">Our collaboration with {society.name} has enabled students to access unique opportunities and experiences in the field of {society.genre.toLowerCase()}.</p>
                      <p className="mb-6">Through this partnership, we've successfully organized 5 major events and established 3 ongoing programs benefiting over 500 students.</p>
                      <button 
                        onClick={() => setShowInfo(false)}
                        className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg opacity-70 hover:opacity-100 transition-opacity z-10"
            >
              <ArrowLeft size={20} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg opacity-70 hover:opacity-100 transition-opacity z-10"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center space-x-3">
            {societies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-gray-800 w-8' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Society logos strip */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
          {societies.map((society) => (
            <div key={society.id} className="w-16 h-16 flex-shrink-0">
              <img 
                src={society.logoUrl} 
                alt={`${society.name} logo`}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" 
                onClick={() => goToSlide(societies.findIndex(s => s.id === society.id))}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
