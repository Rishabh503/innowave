import React from 'react';
import {
  FaUsers,
  FaChalkboardTeacher,
  FaPalette,
  FaNewspaper,
  FaRobot,
  FaShapes,
} from 'react-icons/fa';


export const SponsorBenefits = () => {
  const benefits = [
    {
      title: "Dedicated Event Strategy Team",
      description:
        "Get your own expert team to help brainstorm, plan, and scale events. From ideation to execution, we’re with you every step of the way.",
    },
    {
      title: "Exclusive Access to Career Workshops & Tech Talks",
      description:
        "Top-tier workshops, speaker sessions, and industry talks to boost your members’ profiles and placement prep.",
    },
    {
      title: "Professional Branding Kit for Your Society",
      description:
        "Custom-designed logos, posters, and reels templates to give your society a professional and aesthetic identity.",
    },
    {
      title: "Guaranteed Feature on InnoWave’s Digital Magazine",
      description:
        "Get featured in our monthly digital magazine circulated across colleges — boost your society’s presence beyond campus.",
    },
    {
      title: "AI-powered Event Feedback & Analytics",
      description:
        "Get smart insights on how your events performed, audience sentiment, and ways to improve future initiatives.",
    },
    {
      title: "Pre-designed Templates & Design Support",
      description:
        "Get access to premium design resources and templates to make your promotions quick and appealing.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16" id="sponsor-benefits">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          InnoWave x College Societies
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Here’s what we bring to power up your college society journey!
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SponsorBenefits2 = () => {
  const benefits2 = [
    {
      icon: <FaUsers className="text-blue-600 text-3xl" />,
      title: "Dedicated Event Strategy Team",
      desc: "Work with our strategic mentors to ideate, plan, and execute stunning events with ease.",
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-3xl" />,
      title: "Exclusive Career Workshops & Talks",
      desc: "Upskill your members through curated sessions by industry leaders and influencers.",
    },
    {
      icon: <FaPalette className="text-blue-600 text-3xl" />,
      title: "Branding Kit for Societies",
      desc: "Elevate your society’s look with posters, logos, and reel templates designed by pros.",
    },
    {
      icon: <FaNewspaper className="text-blue-600 text-3xl" />,
      title: "Digital Magazine Feature",
      desc: "Be seen across campuses with a dedicated feature in our widely shared e-magazine.",
    },
    {
      icon: <FaRobot className="text-blue-600 text-3xl" />,
      title: "Smart Analytics & Feedback",
      desc: "Leverage AI-based feedback systems to track event success and student sentiment.",
    },
    {
      icon: <FaShapes className="text-blue-600 text-3xl" />,
      title: "Design Resources & Templates",
      desc: "Save time with ready-made editable designs for social media, invites, and more.",
    },
  ];
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-4 md:px-20" id="sponsor-benefits-2">
      <div className=" mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-4">Sponsor Benefits</h2>
        <p className="text-center text-gray-600 text-lg mb-12">Your society deserves more — and we’re here to deliver.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits2.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-blue-600 p-6 rounded-xl shadow-md hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="bg-blue-100 p-3 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SponsorBenefits3 = () => {
  const benefits3 = [
    {
      icon: <FaUsers />,
      title: "Event Strategy Experts",
      desc: "Collaborate with pros to make your event planning smart, efficient and impactful.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Workshops & Talks",
      desc: "Access curated industry sessions that educate, empower and excite your members.",
    },
    {
      icon: <FaPalette />,
      title: "Branding Booster Kit",
      desc: "We craft your digital identity — posters, reels, and templates that stand out.",
    },
    {
      icon: <FaNewspaper />,
      title: "Magazine Highlights",
      desc: "Be featured across college circles in our official digital magazine editions.",
    },
    {
      icon: <FaRobot />,
      title: "AI-Powered Analytics",
      desc: "Smart tools to analyze reach, impact and feedback of every campaign you run.",
    },
    {
      icon: <FaShapes />,
      title: "Creative Vault Access",
      desc: "Get plug-n-play design templates, animations, and transitions for events.",
    },
  ];

  return (
    <section className="bg-gradient-to-tr from-white via-blue-50 to-white py-20 px-4 md:px-20" id="sponsor-benefits-3">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">
          What We Offer to College Societies
        </h2>
        <p className="text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
          A partnership that powers your society’s growth, engagement and impact — both online and on ground.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits3.map((benefit, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/80 shadow-xl border border-blue-100 p-6 rounded-3xl flex flex-col items-center transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="bg-blue-100 text-blue-800 p-4 rounded-full shadow-md mb-4 text-3xl">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-700 text-sm text-center">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
