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
      className="relative bg-primary text-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              The Complete Guide <br />
              to <span className="text-accent">Career Success</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-lg">
              Professional career coaching, resume writing, and interview preparation
              designed to help you excel in today's competitive job market.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional career coaching session"
                className="rounded-xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
