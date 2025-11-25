import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Zap, Shield, Battery, Globe, Smartphone, Gauge, Clock, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';

const Drones = () => {
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  const features = [
    {
      icon: Battery,
      title: "Optimal charge distribution",
      description: "for longer flight endurance"
    },
    {
      icon: Shield,
      title: "Thermal safety",
      description: "for operational reliability"
    },
    {
      icon: Zap,
      title: "Cell balancing",
      description: "for performance consistency"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        title="Drone Battery Solutions - Nexus Energy"
        description="Powering Bharat's Drone Future with Nexus Indigenous Energy Solutions"
      />
      <PageHero
        title="Powering Bharat's Drone Future with Nexus Indigenous Energy Solutions"
        subtitle="At Nexus, we are committed to building the backbone of Bharat's drone revolution through indigenously developed lithium battery solutions."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Solutions', path: '/solutions' },
          { label: 'Drones' }
        ]}
      />

      {/* Video Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-100">
              <video
                src="/drone part video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smart Solid-State Battery Solutions Intro */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center mb-6">
                Smart Solid-State Battery Solutions for Drones
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                Smart solid-state battery solutions for drones leverage advanced materials for higher energy density, faster charging, and improved safety, while smart features often include advanced Battery Management Systems (BMS) and mobile app connectivity. These systems provide real-time monitoring of metrics like charge, discharge rates, temperature, and cell voltage, along with remote configuration options for settings and firmware updates.
              </p>
            </div>
          </motion.div>

          {/* Key Components and Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Key Components and Features
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Solid-state Battery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Battery className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Solid-state or Semi-solid-state Battery
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Uses a solid or gel-like electrolyte instead of a liquid one for enhanced safety (less risk of leaks or overheating) and higher energy density.
                </p>
              </motion.div>

              {/* Advanced BMS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Gauge className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Advanced Battery Management System (BMS)
                </h4>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Monitors and optimizes battery performance, efficiency, and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Provides detailed information on charge and discharge rates, cycles, and temperature</span>
                  </li>
                </ul>
              </motion.div>

              {/* Mobile App Connectivity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Mobile App Connectivity
                </h4>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Connects to a smartphone app for remote monitoring and control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Allows for firmware updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Enables personalized settings, such as adjusting voltage or setting an auto-storage timer</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">High Energy Density</h5>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">400+ Wh/kg</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">Enhanced Safety</h5>
                <p className="text-gray-700 text-sm">Reduces the risk of overheating and fire compared to traditional lithium-ion batteries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-7 h-7 text-white" />
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">Longer Lifespan</h5>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">500+ Cycles</p>
                <p className="text-gray-700 text-sm">Much higher than Li-Po batteries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">Rapid Charging</h5>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">&lt;30 min</p>
                <p className="text-gray-700 text-sm">80% charge in less than 30 minutes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Designed and manufactured in Bharat, our advanced battery systems are engineered for the unique demands of Bhartiya environments and mission requirements.
            </p>
          </motion.div>

          {/* Smart Energy for Every Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center mb-8">
              Smart Energy for Every Mission
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Nexus battery packs, available in customized configurations, power drones across Agriculture, Surveillance, Industrial Solutions, Logistics, and Defense. At the heart of our technology lies our intelligent Battery Management System (BMS), delivering:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Built for Bharat, Tested for Extremes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center mb-8">
              Built for Bharat, Tested for Extremes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Unlike imported batteries & BMS, Nexus Smart Batteries are designed for Bharat's diverse terrains. From sub-zero Ladakh winters to the dust-heavy deserts of Rajasthan, our solutions deliver unmatched resilience and dependability.
            </p>
          </motion.div>

          {/* Driving Self-Reliance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center mb-8">
              Driving Self-Reliance in Critical Drone Subsystems
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              True independence in unmanned aerial systems requires more than just final assembly—it demands homegrown mastery of critical subsystems. Nexus batteries are manufactured in Bharat, giving us full control over design, testing, and customization.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nexus envisions an ecosystem where every critical drone subsystem is developed in-house, enabling Bharat to scale confidently and independently in the global drone economy. As drone adoption accelerates, the role of reliable, locally engineered battery systems becomes more vital than ever.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold">
                At Nexus, we are proud to power that change.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Drones;
