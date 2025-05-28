export default function Process() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Right Column - Coaching Summary (appears first on mobile) */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium mb-4 tracking-wide uppercase" style={{ color: "#050c35" }}>
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Comprehensive Career <br />
              Coaching Solutions
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              From interview preparation and career planning to executive coaching, our experienced professionals provide personalized guidance to help you achieve your career goals. Whether you're seeking a new position, changing careers, or advancing to executive leadership, we offer the expertise and support you need to succeed.
            </p>
            
            <button
              onClick={scrollToContact}
              className="inline-block transition-all duration-200 hover:opacity-90"
              style={{
                border: "1px solid #050c35",
                backgroundColor: "#050c35",
                color: "#ffffff",
                textAlign: 'center',
                letterSpacing: "0.2px",
                borderRadius: "100px",
                padding: "16px 28px",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "1.5em",
              }}
            >
              Schedule Your Consultation
            </button>
          </div>

          {/* Left Column - Content Blocks (appears second on mobile) */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Block 1 - Interview Coaching */}
            <div
              className="relative p-8 shadow-sm" // Removed rounded-lg
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="absolute top-6 right-6 text-4xl font-light text-gray-300">
                01
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Interview Coaching {/* Original text */}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pr-12">
                Great interviews are a combination of your confidence, strategy, preparation, and practice. If you want to develop a winning interview strategy and prepare great answers to interview questions, contact us today for a no-cost initial consultation. {/* Original text */}
              </p>
            </div>

            {/* Block 2 - Career Coaching (Highlighted) - Added indentation */}
            <div
              className="relative p-8 shadow-md" // Removed rounded-lg
              style={{ backgroundColor: "#050c35", marginLeft: "10%" }} // Added marginLeft for indentation
            >
              <div className="absolute top-6 right-6 text-4xl font-light" style={{ color: "rgba(255, 255, 255, 0.3)" }}>
                02
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Career Coaching {/* Original text */}
              </h3>
              <p className="text-white text-sm leading-relaxed pr-12">
                Our Career coaches are experts in skills such as career planning, resume building, negotiation and interviewing. While you may only search for a new gig or switch careers a handful times in your life, our professionals are up to date with current hiring practices because they're constantly working to help job seekers. {/* Original text */}
              </p>
            </div>

            {/* Block 3 - Executive Career Coaching */}
            <div
              className="relative p-8 shadow-sm" // Removed rounded-lg
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="absolute top-6 right-6 text-4xl font-light text-gray-300">
                03
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Executive Career Coaching {/* Original text */}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pr-12">
                Our seasoned executive coaches help guide corporate officers gain self-awareness, clarify goals, achieve their development objectives, unlock their potential, and act as a sounding board and provide guidance. {/* Original text */}
              </p>
            </div>
          </div>
        </div>

        {/* Removed the Stats Section */}
      </div>
    </section>
  );
}