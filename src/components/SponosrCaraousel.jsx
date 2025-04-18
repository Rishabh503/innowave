import { motion } from "framer-motion";
import {
  FaApple, FaGoogle, FaMicrosoft, FaAmazon,
  FaFacebook, FaTwitter, FaSpotify, FaUber,
 FaTwitch, FaDropbox, FaLinkedin,
  FaPinterest, FaGithub, FaSlack
} from "react-icons/fa";

const sponsors = [
  { name: "Apple", icon: FaApple, color: "bg-white text-black" },
  { name: "Google", icon: FaGoogle, color: "bg-blue-100 text-blue-600" },
  { name: "Microsoft", icon: FaMicrosoft, color: "bg-green-100 text-green-700" },
  { name: "Amazon", icon: FaAmazon, color: "bg-yellow-100 text-yellow-700" },
  { name: "Facebook", icon: FaFacebook, color: "bg-blue-200 text-blue-800" },
  { name: "Twitter", icon: FaTwitter, color: "bg-sky-200 text-sky-600" },
  { name: "Spotify", icon: FaSpotify, color: "bg-green-200 text-green-600" },
  { name: "Uber", icon: FaUber, color: "bg-gray-200 text-black" },
  { name: "Adobe", icon: FaApple, color: "bg-red-100 text-red-600" },
  { name: "Twitch", icon: FaTwitch, color: "bg-purple-200 text-purple-700" },
  { name: "Dropbox", icon: FaDropbox, color: "bg-blue-100 text-blue-600" },
  { name: "LinkedIn", icon: FaLinkedin, color: "bg-blue-100 text-blue-800" },
  { name: "Pinterest", icon: FaPinterest, color: "bg-red-200 text-red-700" },
  { name: "GitHub", icon: FaGithub, color: "bg-black text-white" },
  { name: "Slack", icon: FaSlack, color: "bg-indigo-200 text-indigo-800" },
];

const SponsorShowcase = () => {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...sponsors, ...sponsors].map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`min-w-[180px] h-[180px] rounded-2xl flex flex-col justify-center items-center ${s.color} shadow-2xl hover:scale-105 transition-transform duration-500`}
              >
                <Icon size={70} />
                <p className="mt-4 font-semibold text-lg">{s.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorShowcase;
