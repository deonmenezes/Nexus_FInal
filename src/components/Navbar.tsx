import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Helmet } from "react-helmet-async";
import { div } from "three/src/nodes/TSL.js";
import { Logo } from "@/components/Logo";

const SITE_URL = "https://nexusenergy.com";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const solutionsStructure = [
  {
    category: "Commercial",
    path: "/solutions/commercial",
    subcategories: [
      { name: "Road Passenger Transport", path: "/solutions/commercial#road-passenger-transport" },
      { name: "Urban Delivery", path: "/solutions/commercial#urban-delivery" },
      { name: "Heavy-duty Transport", path: "/solutions/commercial#heavy-duty" },
      { name: "Urban Street Cleaning", path: "/solutions/commercial#street-cleaning" },
      { name: "Construction", path: "/solutions/commercial#construction-machinery" },
      { name: "Two-wheeled Vehicle", path: "/solutions/commercial#two-wheeled" },
      { name: "Special Vehicle", path: "/solutions/commercial#special-vehicle" },
    ]
  },
  {
    category: "Drones",
    path: "/solutions/drones",
    subcategories: [
      { name: "Agricultural Drones", path: "/solutions/drones#agri" },
      { name: "Defence Drones", path: "/solutions/drones#defence" },
    ]
  },
  {
    category: "Energy Storage Systems",
    path: "/solutions/energystorage",
    subcategories: [
      { name: "Power Generation", path: "/solutions/energystorage#bess" },
      { name: "Transmission & Distribution", path: "/solutions/energystorage#ups" },
      { name: "Power Consumption", path: "/solutions/energystorage#ups" },
    ]
  },
  {
    category: "Railways",
    path: "/solutions/railways",
    subcategories: [
      { name: "Vande Bharat Coach", path: "/solutions/railways#vande-bharat-coach" },
      { name: "Shunt Locomotive", path: "/solutions/railways#shunt-locomotive" },
    ]
  }
];

type NavbarProps = {
  title?: string;
  description?: string;
};

export const Navbar = ({
  title = "Nexus Energy - Advanced Battery Storage Solutions",
  description = "Leading provider of advanced battery storage solutions for residential, commercial, and industrial applications. Transform your energy future with our cutting-edge technology.",
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're on the home page
      const isHomePage = location.pathname === "/";

      if (isHomePage) {
        // On home page, check if we've scrolled past the hero section (3D model)
        // Hero section is typically 100vh, so we check if we've scrolled past that
        const heroHeight = window.innerHeight;
        setScrolled(window.scrollY > heroHeight - 100); // Start transition 100px before leaving hero
      } else {
        // On other pages, use the original behavior
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Also trigger on location change to reset state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Reset mobile submenu and close mobile menu when location changes
  useEffect(() => {
    setMobileSubMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setHoveredCategory(null);
    setExpandedCategories({});
  }, [location.pathname]);

  const openWhatsAppBooking = () => {
    const message =
      "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    const phoneNumber = "918104796542";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Create page-specific metadata based on current path
  const getPageMetadata = () => {
    const path = location.pathname;
    let pageTitle = title;
    let pageDescription = description;
    let pageKeywords =
      "battery storage, indigenous lithium packs, BMS, energy storage systems, EV batteries, rail batteries";

    switch (path) {
      case "/solutions":
        pageTitle =
          "Solutions - Nexus Energy | Advanced Battery Storage Solutions";
        pageDescription =
          "Explore our comprehensive range of battery storage solutions including residential systems, commercial installations, and industrial energy storage";
        pageKeywords =
          "battery storage, energy solutions, residential batteries, commercial energy storage, industrial power systems";
        break;
      case "/portfolio":
        pageTitle = "Portfolio - Nexus Energy | Our Projects & Case Studies";
        pageDescription =
          "View our portfolio of successful battery storage installations and energy solutions delivered to residential and commercial clients";
        pageKeywords =
          "portfolio, projects, case studies, battery installations, energy projects, storage solutions";
        break;
      case "/about":
        pageTitle = "About Us - Nexus Energy | Our Story & Values";
        pageDescription =
          "Learn about our team of energy experts, mission, values and our journey to becoming a leading battery storage solutions provider";
        pageKeywords =
          "about us, company story, mission, values, team, energy company";
        break;
      case "/contact":
        pageTitle = "Contact Us - Nexus Energy | Get in Touch";
        pageDescription =
          "Contact our team for inquiries, quotes or to discuss your energy storage needs. Get expert consultation for your project.";
        pageKeywords =
          "contact, support, inquiry, consultation, energy consultation, project discussion";
        break;
      default:
        // Home page or fallback
        pageTitle = "Nexus Energy | Advanced Battery Storage Solutions";
        pageDescription =
          "Leading provider of advanced battery storage solutions for residential, commercial, and industrial applications. Transform your energy future with our cutting-edge technology.";
        pageKeywords =
          "battery storage, energy solutions, renewable energy, power systems, energy independence";
    }

    return { pageTitle, pageDescription, pageKeywords };
  };

  const { pageTitle, pageDescription, pageKeywords } = getPageMetadata();

  // Create structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexus Energy",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo footer.png`,
    description: "Indigenous lithium battery systems, AI-powered BMS, and immersion-cooled packs for mobility, drones, railways, and energy storage.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918104796542",
      contactType: "customer service",
      email: "deonmenezescodes@gmail.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/nexusenergy",
      "https://www.instagram.com/nexusenergy",
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`${SITE_URL}${location.pathname}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${SITE_URL}${location.pathname}`}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content={`${SITE_URL}/images/logo footer.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${SITE_URL}${location.pathname}`}
        />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta
          property="twitter:image"
          content={`${SITE_URL}/images/logo footer.png`}
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Nexus Energy" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <header
        style={{ position: "fixed" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          location.pathname === "/" && !scrolled
            ? "py-4 bg-transparent"
            : "py-4 bg-white opacity-90 shadow-sm border-b border-gray-200"
        )}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 flex items-center justify-between max-w-7xl"
          role="navigation"
          aria-label="Main Navigation"
        >
          <Logo 
            size="md" 
            variant={scrolled || location.pathname !== '/' ? 'dark' : 'light'}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-2 px-4 rounded-full group",
                  scrolled || location.pathname !== '/'
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-200",
                  location.pathname === item.path
                    ? "font-semibold"
                    : ""
                )}
                role="menuitem"
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setIsDropdownOpen(true);
                setHoveredCategory(null);
              }}
              onMouseLeave={() => {
                setIsDropdownOpen(false);
                setHoveredCategory(null);
              }}
            >
              <button
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-2 px-4 rounded-full flex items-center gap-1",
                  scrolled || location.pathname !== '/'
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-200",
                  location.pathname.startsWith('/solutions')
                    ? "font-semibold"
                    : ""
                )}
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-300",
                    isDropdownOpen ? "rotate-180" : ""
                  )}
                />
              </button>

              {/* Dropdown Menu - CATL Style */}
              <div
                className={cn(
                  "absolute top-full left-0 right-0 mt-0 bg-white shadow-lg border-t border-gray-200 z-50 transition-all duration-200 ease-out",
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                )}
                style={{
                  width: "110vw",
                  left: "50%",
                  transform: "translateX(-50%)"
                }}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="container mx-auto px-4 max-w-7xl">
                  {/* Main Categories - Horizontal Row (CATL Style) */}
                  <div className="flex items-center justify-center py-3">
                    <div className="flex items-center space-x-6">
                      {solutionsStructure.map((category) => (
                        <div
                          key={category.category}
                          className="relative"
                          onMouseEnter={() => {
                            if (category.subcategories.length > 0) {
                              setHoveredCategory(category.category);
                            }
                          }}
                        >
                          <Link
                            to={category.path}
                            className={cn(
                              "flex items-center justify-center px-4 text-sm font-medium transition-colors duration-200 min-h-[28px] min-w-[120px]",
                              category.subcategories.length > 0
                                ? hoveredCategory === category.category
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            )}
                          >
                            {category.category}
                          </Link>

                          {/* Bottom border indicator for active category */}
                          {category.subcategories.length > 0 && hoveredCategory === category.category && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subcategories Section - Only show if category has subcategories */}
                  {hoveredCategory && (() => {
                    const category = solutionsStructure.find(cat => cat.category === hoveredCategory);
                    return category && category.subcategories.length > 0;
                  })() && (
                      <div
                        className="border-t border-gray-100 py-[6px] bg-gray-50/50"
                        onMouseEnter={() => {
                          // Keep the hovered category active when hovering over subcategories
                          const category = solutionsStructure.find(cat => cat.category === hoveredCategory);
                          if (category && category.subcategories.length > 0) {
                            setHoveredCategory(category.category);
                          }
                        }}
                      >
                        <div className="animate-in fade-in duration-200">
                          {(() => {
                            const category = solutionsStructure.find(cat => cat.category === hoveredCategory);
                            return (
                              <div className="text-center">
                                <div className="flex justify-center space-x-3">
                                  {category.subcategories.map((subcategory) => {
                                    const isCurrentPage = location.pathname + location.hash === subcategory.path || (location.pathname === subcategory.path.split('#')[0] && location.hash === '#' + subcategory.path.split('#')[1]);
                                    return (
                                      <a
                                        key={subcategory.name}
                                        href={subcategory.path}
                                        onClick={e => {
                                          const [base, hash] = subcategory.path.split('#');
                                          if (location.pathname === base && hash) {
                                            e.preventDefault();
                                            const el = document.getElementById(hash);
                                            if (el) {
                                              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                            setIsDropdownOpen(false);
                                          }
                                        }}
                                        className="group flex items-center justify-center px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 min-h-[32px] min-w-[160px] rounded-md border border-transparent hover:border-blue-200 hover:shadow-sm"
                                      >
                                        <div className="text-center">
                                          <div className="font-medium">
                                            {subcategory.name}
                                          </div>
                                        </div>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* Technology */}
            <Link
              to="/technology"
              className={cn(
                "text-sm font-medium transition-all duration-300 relative py-2 px-4 rounded-full group",
                scrolled || location.pathname !== '/'
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200",
                location.pathname === "/technology"
                  ? "font-semibold"
                  : ""
              )}
              role="menuitem"
              aria-current={location.pathname === "/technology" ? "page" : undefined}
            >
              Technology
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="transition-all duration-300 px-6 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg"
              aria-label="Get in touch with us"
            >
              <Link to="/contact">Get Contact</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden duration-300 p-2 hover:bg-gray-100 relative"
                aria-label="Open navigation menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <linearGradient id="menuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path stroke="url(#menuGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <nav
                className="flex flex-col h-full pt-6"
                aria-label="Mobile Navigation"
              >
                <div className="pb-6 border-b border-gray-200">
                  <Logo size="sm" />
                </div>
                <div className="flex flex-col gap-1 py-6" role="menu">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={cn(
                        "text-base py-3 px-4 rounded-full transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                        location.pathname === item.path
                          ? "font-semibold text-blue-600 bg-blue-50"
                          : ""
                      )}
                      role="menuitem"
                      aria-current={
                        location.pathname === item.path ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Solutions Dropdown */}
                  <div>
                    <button
                      onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                      className={cn(
                        "w-full text-left text-base py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                        location.pathname.startsWith('/solutions')
                          ? "font-semibold text-blue-600 bg-blue-50"
                          : ""
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          mobileSubMenuOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {mobileSubMenuOpen && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4 animate-in slide-in-from-left-2 duration-200">
                        {solutionsStructure.map((category) => (
                          <div key={category.category} className="space-y-1">
                            {/* Main Category */}
                            <div className="flex flex-col">
                              <Link
                                to={category.path}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className={cn(
                                  "block text-sm py-2 px-3 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-blue-300 font-medium",
                                  location.pathname === category.path
                                    ? "bg-blue-50 text-blue-600 border-blue-500"
                                    : "text-gray-700 hover:text-gray-900 hover:bg-blue-50/50"
                                )}
                              >
                                {category.category}

                                 {category.subcategories.length > 0 && (
                                <div onClick={() => setExpandedCategories(prev => ({
                                  ...prev,
                                  [category.category]: !prev[category.category]
                                }))} className="flex justify-between flex-row items-center">
                                  <button

                                    className="flex w-[90%] items-center justify-between text-xs text-gray-500 py-1 px-3 hover:text-gray-700 transition-colors"
                                  >


                                  </button>
                                  <ChevronDown
                                    className={cn(
                                      "h-3 w-3 transition-transform duration-200",
                                      expandedCategories[category.category] ? "rotate-180" : ""
                                    )}
                                  />
                                </div>

                              )}
                              </Link>

                              {/* Subcategories Toggle */}
                             
                            </div>

                            {/* Subcategories */}
                            {category.subcategories.length > 0 && expandedCategories[category.category] && (
                              <div className="ml-3 space-y-1 border-l border-gray-200 pl-3">
                                {category.subcategories.map((subcategory) => (
                                  <Link
                                    key={subcategory.name}
                                    to={subcategory.path}
                                    onClick={(e) => {
                                      const [base, hash] = subcategory.path.split('#');
                                      if (location.pathname === base && hash) {
                                        e.preventDefault();
                                        const el = document.getElementById(hash);
                                        if (el) {
                                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                      }
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className={cn(
                                      "block text-xs py-1.5 px-2 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-blue-300",
                                      location.pathname === subcategory.path
                                        ? "bg-blue-50 text-blue-600 font-medium border-blue-500"
                                        : "text-gray-600 hover:text-gray-800 hover:bg-blue-50/30"
                                    )}
                                  >
                                    {subcategory.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technology */}
                  <Link
                    to="/technology"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={cn(
                      "text-base py-3 px-4 rounded-full transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                      location.pathname === "/technology"
                        ? "font-semibold text-blue-600 bg-blue-50"
                        : ""
                    )}
                    role="menuitem"
                    aria-current={
                      location.pathname === "/technology" ? "page" : undefined
                    }
                  >
                    Technology
                  </Link>
                </div>
                <div className="mt-auto pb-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Get in touch with us"
                  >
                    <Link 
                      to="/contact"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Get Contact
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
};
