export default function Hero() {
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

  return (
    <section
      id="home"
      className="relative bg-blue-600 text-white pt-20 overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-12">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 leading-[1.1]">
              The Complete Guide <br />
              of <span className="text-green-400">Career &<br />Financial Success</span>
            </h1>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed max-w-lg">
              Professional career coaching, resume writing, and interview preparation designed to help you excel in today's competitive job market.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600"
                alt="Professional woman working at desk"
                className="rounded-lg w-full max-w-md lg:max-w-lg h-auto shadow-2xl relative z-10"
              />
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gray-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
