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
      className="relative bg-primary text-white pt-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              The Complete Guide <br />
              of <span className="text-accent">Career & <br />Financial Success</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-lg">
              Professional career coaching, resume writing, and interview preparation designed to help you excel in today's competitive job market.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
              alt="Professional woman working at desk"
              className="rounded-2xl w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
