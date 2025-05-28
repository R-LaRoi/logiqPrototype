import { Twitter, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    // Newsletter subscription logic would go here
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail("");
      alert("Thank you for subscribing to our newsletter!");
    }, 1000);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Side - Company Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold mb-4">Logiq Careers</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Customized Career Services targeted toward those seeking more. Professional
              career coaching, resume writing, and interview preparation for success.
            </p>
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            
            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated with Logiq Careers</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter email"
                  className="flex-1 px-4 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 font-semibold transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubscribing ? "..." : "Connect"}
                </button>
              </form>
            </div>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Free Resume Review
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Career Coaching
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Resume Writing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Interview Coaching
                  </button>
                </li>
              </ul>
            </div>
          </div>


        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Logiq Careers. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}
