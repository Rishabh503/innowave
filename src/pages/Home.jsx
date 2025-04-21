import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, Rocket, Award, TrendingUp } from 'lucide-react';

import audi from '../public/audi.jpg'

import { AboutHero } from '../components/AboutHero';
import PartnersHome from '../components/PartnersHome';
import SponsorCarousel from '../components/SponosrCaraousel';
import EventShowcase from '../components/EventShowCase';
import CollegeEventShowcase from '../components/testingComponents/Event3';
import { FullScreenEventShowcase1 } from '../components/testingComponents/EventDisplay';
import PastEventsSection from '../components/testingComponents/Event4';
import EventDisplay from '../components/testingComponents/Event2';
import BenefitsShowcasePreview from '../components/Benifits';
import {SponsorBenefits, SponsorBenefits2, SponsorBenefits3 } from '../components/SponosrBenifits';
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
      <PartnersHome/>

      
        <CollegeEventShowcase/>
        
      <BenefitsShowcasePreview/>
 
      <SponsorBenefits2/>
     
      <SponsorCarousel/>
    </div>
  );
};

export default Home;