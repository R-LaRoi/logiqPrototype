import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex items-center">
            <span className={`text-xl font-heading font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Logiq Careers
            </span>
          </div>

          {/* Right - Navigation & CTA */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
              >
                Contact
              </button>
            </div>



            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
