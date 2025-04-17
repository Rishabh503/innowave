import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

import logo from '../public/logo.jpg'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <Waves className="h-8 w-8 text-indigo-600" /> */}
              <img className='h-full w-24 mt-2 object-cover rounded-sm' src={logo} alt="logo" />
              {/* <span className="text-2xl font-bold text-indigo-600">InnoWave</span> */}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2">About</Link>
            <Link to="/partners" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Partners</Link>
            <Link to="/sponsors" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Sponsors</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Contact</Link>
            <Link to="/auth" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
