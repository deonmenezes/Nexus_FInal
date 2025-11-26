import React from "react";
import { Truck, Bike, Building2, Home } from "lucide-react";
import { Images } from "@/constants";
import { GlowCard } from "./GlowCard";
import { GlowEffect } from "./GlowEffect";

const services = [
  {
    title: "Quick Commerce",
    description: "Ultra-fast charging solutions for quick commerce vehicles",
    icon: Truck,
    image: "/quick commerce.png",
    features: [
      "Ultra-fast charging, compact form-factors",
      "Rugged design for high throughput and reliability in last-mile delivery and logistics fleets",
      "Plug-and-play compatibility with e-cargo Vehicles & Scooters",
    ],
  },
  {
    title: "Material handling Equipments",
    description:
      "Robust battery solutions for forklifts, stackers, and material handling equipment",
    icon: Bike,
    image: Images.eMobility,
    features: [
      "Heavy-duty design for industrial applications",
      "Quick swap capability for continuous operations",
      "IoT monitoring for fleet management",
    ],
  },
  {
    title: "Grid Scale Energy Storage Systems (ESS)",
    description:
      "Industrial battery utility-operating renewable integration and powerSoft batteries & backup applications",
    icon: Building2,
    image: "/grid scale.png",
    features: [
      "Modular battery racks supporting renewable integration",
      "Smart fleet management powered by AI for predictive maintenance",
      "Flexible configurations: from microgrid installations to large utility-scale storage",
    ],
  },
  {
    title: "Residential & Commercial Storage",
    description:
      "Self-contained and efficient solutions for homes and businesses with comprehensive products and functionality",
    icon: Home,
    image: "/residential and commerical.png",
    features: [
      "Smart monitoring and energy optimization",
      "Backup power during outages",
      "Solar integration capabilities",
    ],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From material handling to renewable energy storage, our cutting-edge battery solutions are transforming industries across the globe.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image Side */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className={`relative w-full h-64 sm:h-72 md:h-80 lg:h-64 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden ${
                  index === 1 || index === 2 ? "" : "flex items-center justify-center p-4"
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full ${index === 1 || index === 2 ? "object-cover" : "object-contain"}`}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Card Side */}
              <div className={`h-full ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <GlowCard
                  glowColor="green"
                  customSize={true}
                  className="h-full bg-white border border-gray-100 shadow-sm p-4 md:p-5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent" />
                    <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"></div>
                        <p className="text-gray-700 text-xs md:text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


