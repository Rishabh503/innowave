import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Mail } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    {
      tier: "Platinum",
      companies: [
        {
          name: "TechCorp Global",
          logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
          description: "Leading technology solutions provider",
          website: "https://techcorp.com"
        },
        {
          name: "InnovateTech",
          logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
          description: "Innovation and research leader",
          website: "https://innovatetech.com"
        }
      ]
    },
    {
      tier: "Gold",
      companies: [
        {
          name: "Future Systems",
          logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80",
          description: "Next-generation computing solutions",
          website: "https://futuresystems.com"
        },
        {
          name: "Digital Dynamics",
          logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
          description: "Digital transformation experts",
          website: "https://digitaldynamics.com"
        },
        {
          name: "Smart Solutions",
          logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
          description: "Intelligent business solutions",
          website: "https://smartsolutions.com"
        }
      ]
    },
    {
      tier: "Silver",
      companies: [
        {
          name: "Tech Ventures",
          logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
          description: "Venture capital for tech startups",
          website: "https://techventures.com"
        },
        {
          name: "Cloud Nine",
          logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
          description: "Cloud computing solutions",
          website: "https://cloudnine.com"
        },
        {
          name: "Data Dynamics",
          logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
          description: "Data analytics and insights",
          website: "https://datadynamics.com"
        },
        {
          name: "AI Solutions",
          logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
          description: "Artificial intelligence innovations",
          website: "https://aisolutions.com"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h1>
          <p className="text-lg text-gray-600">Partners in Innovation and Growth</p>
        </motion.div>

        {sponsors.map((tier, tierIndex) => (
          <div key={tier.tier} className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: tierIndex * 0.2 }}
              className="flex items-center mb-8"
            >
              <Award className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{tier.tier} Sponsors</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier.companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                    <p className="text-gray-600 mb-4">{company.description}</p>
                    
                    <div className="flex space-x-4">
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-600 hover:text-indigo-800"
                      >
                        <Globe className="h-5 w-5 mr-2" />
                        <span>Website</span>
                      </a>
                      <a
                        href={`mailto:contact@${company.name.toLowerCase().replace(/\s+/g, '')}.com`}
                        className="flex items-center text-indigo-600 hover:text-indigo-800"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        <span>Contact</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Sponsor</h2>
          <p className="text-gray-600 mb-6">
            Join our community of innovative sponsors and help shape the future of college culture.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;