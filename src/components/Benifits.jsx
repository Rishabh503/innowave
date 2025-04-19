
import { Calendar, DollarSign, Mic, Users, Layers } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Complete Event Management",
    description: "InnoWave streamlines every stage of event execution—covering planning, coordination, and delivery—saving time and reducing stress for societies.",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    title: "Reliable Sponsorship Access",
    description: "It connects societies with potential sponsors, helping them fund initiatives without having to chase leads or compromise on quality.",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: 3,
    title: "Seamless Talent Booking",
    description: "The platform offers direct access to a network of renowned speakers and performers, enhancing the appeal and professionalism of any event.",
    icon: Mic,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: 4,
    title: "Inter-Society Partnerships",
    description: "InnoWave encourages collaboration between societies from different campuses, creating larger audiences and more engaging experiences.",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: 5,
    title: "Unified Digital Ecosystem",
    description: "With all tools and stakeholders in one place, societies can plan, promote, and manage events without switching platforms or losing efficiency.",
    icon: Layers,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100"
  }
];

const BenefitsShowcasePreview = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-8xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join InnoWave?</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
        </div>
        
        {/* Benefits cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${benefit.bgColor} ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              
              <p className="text-gray-600 flex-grow">{benefit.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a 
                  href="#learn-more" 
                  className={`inline-flex items-center ${benefit.color} font-medium`}
                >
                  Learn how it works
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to transform your society's event management?
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Join InnoWave Today
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                Schedule a Demo
              </button>
            </div>
            <p className="text-gray-600">
              Join 500+ college societies already using InnoWave
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsShowcasePreview;