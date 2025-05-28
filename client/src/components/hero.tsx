import heroVideo from "@assets/360logiq.mp4";

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
      className="relative text-white overflow-hidden"
      style={{ backgroundColor: "#050c35", height: "100vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="z-10 pt-20">
            <h1
              className="font-normal mb-6 leading-none text-white"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "68px",
                fontWeight: 400,
                lineHeight: "1em",
              }}
            >
              Your Future Awaits{" "}
            </h1>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed max-w-lg">
              Professional career coaching, resume writing, and interview
              preparation designed to help you excel in today's competitive job
              market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                style={{ color: "#050c35" }}
              >
                Free Resume Review
              </button>
            </div>
          </div>

          {/* Right Video - Full Height */}
          <div className="relative h-full flex items-end">
            <video
              className="w-full h-full object-cover object-center"
              style={{ height: "100vh" }}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
