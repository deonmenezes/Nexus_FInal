import React from "react";
import { Link } from "react-router-dom";
import { GlowCard } from "./GlowCard";
import { Zap, RefreshCw } from "lucide-react";

const InnovationSection: React.FC = () => {
  const breakthroughs = [
    {
      icon: Zap,
      type: 'component' as const,
      title: "Active Thermal Management",
      description: "Precision control of battery temperatures ensures optimal performance and longevity across all operating conditions."
    },
    {
      icon: "◎",
      type: 'emoji' as const,
      title: "AI-Powered Battery Management System (BMS)",
      description: "Real-time data analytics optimize every cell's performance, predicting failures before they occur."
    },
    {
      icon: "⊞",
      type: 'emoji' as const,
      title: "Life Extension Algorithm",
      description: "Smart software predicts and mitigates cell degradation, extending battery life by up to 40%."
    },
    {
      icon: RefreshCw,
      type: 'component' as const,
      title: "Ultra-Fast Charging",
      description: "0-90% fast charging in 20mins for Commercial EVs with in-house developed Liquid Immersion Technology"
    }
  ];

  return (
    <section className="relative z-10 bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left visual panel - Battery Module */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full">
              <div className="bg-white rounded-3xl p-4 md:p-6 shadow-2xl border-2 border-gray-100 overflow-hidden">
                {/* Battery Image/Video */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                  <video 
                    src="./images/video-vmake.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-[500px] md:h-[600px] object-cover transition-all duration-300 hover:scale-105"
                  />
                  {/* Circuit board pattern overlay */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content and breakthrough cards */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full">
              {breakthroughs.map((breakthrough, idx) => {
                return (
                <Link key={idx} to="/technology" className="block h-full">
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 cursor-pointer border-2 border-gray-100 hover:border-green-200 h-full flex flex-col">
                    {/* Icon - Top Center */}
                    <div className="flex items-center justify-center w-14 h-14 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {breakthrough.type === 'component' ? (
                        <breakthrough.icon className="w-10 h-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                      ) : (
                        <span className="text-4xl text-green-600 group-hover:text-green-700 transition-colors duration-300">{breakthrough.icon}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3 group-hover:text-green-700 transition-colors duration-300 text-center leading-tight">
                      {breakthrough.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow text-center">
                      {breakthrough.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex justify-center mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;


