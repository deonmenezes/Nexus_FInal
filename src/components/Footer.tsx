import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  User,
  Home,
  Info,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Logo size="md" className="mb-2" variant="dark" />
            </div>
            <p className="text-gray-700 mb-6">
              Empowering the future with advanced energy storage. We provide next-generation battery systems that redefine the way businesses store and manage power.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", url: "/", icon: Home },
                { name: "About Us", url: "/about", icon: Info },
                { name: "Services", url: "/services", icon: Briefcase },
                { name: "Customers", url: "/customers", icon: User },
                { name: "Contact", url: "/contact", icon: Mail },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-300"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: "Commercial Applications", url: "/solutions/commercial" },
                { name: "Drones", url: "/solutions/drones" },
                { name: "Energy Storage Systems", url: "/solutions/energystorage" },
                { name: "Railways", url: "/solutions/railways" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-700 hover:text-green-600 transition-colors duration-300 block"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900 text-sm font-semibold mb-2">Plant - I</p>
                <p className="text-gray-700 text-sm">
                  E-5,231 Bhumi world Industrial park,<br />
                  Kalyan - Bhiwandi Rd, Naka, Bhiwandi,<br />
                  Maharashtra 421302
                </p>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-semibold mb-2">Plant - II</p>
                <p className="text-gray-700 text-sm">
                  Plot No. 69, Ladinaka, MIDC Industrial Area,<br />
                  Chikhloli, Ambernath,<br />
                  Maharashtra 421505
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 text-sm mb-1">Email : <a href="mailto:sales@nexusenergy.in" className="text-gray-700 hover:text-green-600 transition-colors duration-300">sales@nexusenergy.in</a></p>
                <p className="text-gray-700 text-sm mb-1">Contact : <a href="tel:+916280602341" className="text-gray-700 hover:text-green-600 transition-colors duration-300">+91 6280 602 341</a></p>
                <a href="tel:+919650661636" className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm">+91 9650661636</a>
              </div>
            </div>
          </div>
        </div>

        {/* Green Gradient Bar with Phone Numbers */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Phone className="w-5 h-5 text-white" />
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a href="tel:+916280602341" className="text-white font-semibold hover:underline">+91 6280 602 341</a>
              <span className="hidden md:inline text-white/70">|</span>
              <a href="tel:+919650661636" className="text-white font-semibold hover:underline">+91 9650661636</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Nexus Energy Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-green-600 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-gray-600 hover:text-green-600 text-sm transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
