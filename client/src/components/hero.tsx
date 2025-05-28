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
      className="relative bg-blue-600 text-white overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="z-10 pt-20">
            <h1 
              className="font-normal mb-6 leading-none text-white"
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                fontSize: '68px',
                fontWeight: 400,
                lineHeight: '1em'
              }}
            >
              The Complete Guide <br />
              of <span className="text-green-400">Career &<br />Financial Success</span>
            </h1>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed max-w-lg">
              Professional career coaching, resume writing, and interview preparation designed to help you excel in today's competitive job market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Request a Consultation
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Info Flat
              </button>
            </div>
          </div>

          {/* Right Image - Full Height */}
          <div className="relative h-full flex items-end">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
              alt="Professional woman working at desk"
              className="w-full h-full object-cover object-center"
              style={{ height: "100vh" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
