import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Check, Globe, Shuffle, Zap, Shield } from 'lucide-react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = -scrollY * 0.2;

  // For testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const team=[
    {
      "name": "Saksham Gupta",
      "position": "Founder",
      "image":"https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Saksham_Jain-fotor-20240805204147_tzo4za.jpg"
    },
    {
      "name": "Ansh Malik",
      "position": "Founder",
     "image":"https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871010/Ansh_Malik-fotor-20240805203113_cvukvu.jpg"
    },
    {
      "name": "Saksham Aggarwal",
      "position": "Co-founder",
     "image":"https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Saksham_Agarwal-fotor-2024080520410_g3ug6h.jpg"
    },
    {
      "name": "Vidhi Jain",
      "position": "Co-founder",
     "image" :"https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Vidhi_Jain-fotor-20240805204258_f1s3wi.jpg"
    },
   
  ]
  

  const features = [
    {
      icon: <Globe size={28} />,
      title: "Strong Student Network",
      description: "We have deep connections across multiple colleges through societies and communities. This gives us direct access to talent, trend insights and instant reach. Our student-first approach builds trust and loyalty at the grassroots level."
    },
    {
      icon: <Shuffle size={28} />,
      title: "Strategic Positioning",
      description: "We sit at the intersection of students, societies and companies.This unique position allows us to create value for all three stakeholders. No other player offers this level of integrated ecosystem support."
    },
    {
      icon: <Zap size={28} />,
      title: "Early Mover Advantage",
      description: "We are among the first to build a platform focused on college events + talentdiscovery. This head start allows us to capture market share and establish brand authority early. With proven traction, we’re setting the foundation for long-term dominance."
    }
    // {
    //   icon: <Shield size={28} />,
    //   title: "Proven Results",
    //   description: "Our solutions deliver measurable impact and sustainable growth."
    // }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section - Parallax Effect */}
      <div className="relative h-screen flex items-center overflow-hidden">
        {/* Background layers for parallax */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-0 w-full h-96 bg-contain bg-bottom bg-no-repeat"
          style={{ 
            backgroundImage: "url('/api/placeholder/1200/400')",
            transform: `translateY(${parallaxOffset * 1.5}px)` 
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="bg-blue-600 text-white py-2 px-6 rounded-full inline-block mb-8">
              Innovation Redefined
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-blue-900">
              We're <span className="text-blue-600">InnoWave</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-10 max-w-xl">
            Empowering college campuses through industrial collaborations
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Contact Us
              </button>
              <a href="#about" className="px-8 py-3 border border-blue-200 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center gap-2">
                Learn More <ChevronDown size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* "About Us" Section with cards */}
      <div id="about" className="pb-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600">
              Founded in 2023 by a team of industry veterans, InnoWave was born from a shared vision of making innovation accessible to colleges of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                01
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">The Beginning</h3>
              <p className="text-gray-600">
              A Strategic Collaboration to Elevate Student-Led Initiatives
              InnoWave partners with college societies to supercharge events, unlock opportunities, and foster vibrant student communities — all through innovative support, seamless collaboration, and shared growth.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200 md:translate-y-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                02
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
              To revolutionize the college ecosystem by enabling student-led societies, empowering talent, and bridging the gap between students, artists, and companies — through a unified platform for collaboration, creativity, and career growth.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                03
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Today & Beyond</h3>
              <p className="text-gray-600">
              In the future, InnoWave will evolve into a powerful platform connecting students with internships, jobs, and opportunities—while scaling into a professional event management company hosting large-scale experiences beyond college campuses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - With hexagon grid layout */}
      <div className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
                Our People
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Meet The Team Behind InnoWave</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our diverse team combines deep technical expertise with creative thinking and strategic insight. We're problem-solvers, innovators, and collaborators dedicated to your success.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center gap-2">
                Join Our Team <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {team.map((item) => (
                  <div key={item} className={`${item % 2 === 0 ? "md:translate-y-12" : ""}`}>
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
                      <div className="aspect-square bg-gray-100 flex items-center justify-center">
                       <img src={item.image} alt="" />
                        <p className="text-gray-400">Photo</p>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-sm text-blue-900">{item.name}</h3>
                        <p className="text-blue-600 text-sm">{item.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - With interactive hover */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">
              Our unique approach to innovation delivers measurable results and lasting impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-lg shadow-blue-50 hover:bg-blue-600 transition-all"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* "Why Choose Us" Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="aspect-square max-w-lg mx-auto bg-blue-100 rounded-full p-8">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                 <img src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745351291/WhatsApp_Image_2025-04-23_at_01.17.28_339ca0ff-removebg-preview_geqlaz.png" alt="logo" />
                  <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            Why InnoWave
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">We Do Innovation Differently</h2>
          <p className="text-lg text-gray-600 mb-8">
          Because we don't just solve problems — we connect ecosystems. InnoWave blends event management, student empowerment, talent discovery, and brand partnerships into one seamless platform. While others focus on one piece, we’re building the whole puzzle — starting at the grassroots and scaling into a future where every student, society, and company thrives through shared experiences and real opportunities.
          </p>
          
          <div className="space-y-4">
            {[
              "Complete Event Management",
              "Reliable Sponsorship Access",
              "Seamless Talent Booking",
              "Inter-Society Partnerships",
              "Unified Digital Ecosystem"
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-4 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={14} />
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>



</div>
)}