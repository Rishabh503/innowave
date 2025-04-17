import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, Rocket, Award, TrendingUp } from 'lucide-react';

import audi from '../public/audi.jpg'

import { AboutHero } from '../components/AboutHero';
const Home = () => {
  
  return (
    <div className="min-h-screen  bg-white">
      {/* Hero Section */}
      <section className="relative bg-white h-screen flex items-center">
        h
        <div className="absolute p-4 inset-0">
          
          <img 
            src={audi}
            alt="College Event"
            className="w-full h-full rounded-md object-cover"
          />
          <div className="absolute "></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering College Culture Through Innovation
          </h1>
          <p className="text-xl text-white  mb-8">
            Connecting societies, sponsors, and students to create unforgettable experiences
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </motion.div>
      </section>
      <AboutHero/>
      {/* Benefits Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Benefits of Joining Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Network Growth", desc: "Connect with diverse college societies and expand your network" },
              { icon: Trophy, title: "Recognition", desc: "Gain visibility across multiple college platforms" },
              { icon: Calendar, title: "Premium Events", desc: "Access to exclusive events and collaborative opportunities" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <item.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Benefits for Sponsors</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: "Brand Exposure", desc: "Reach thousands of students across multiple colleges" },
              { icon: Award, title: "Direct Impact", desc: "Support and shape the future of college culture" },
              { icon: TrendingUp, title: "ROI Growth", desc: "Measurable impact and engagement metrics" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <item.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;