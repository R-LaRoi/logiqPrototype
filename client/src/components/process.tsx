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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40% 60%", // Adjusted column widths to give more space to the right, might need further tweaking
            gridGap: "80px", // Maintained gap, can adjust if needed
            alignItems: "start",
          }}
        >
          {/* Left Column - Content Blocks */}
          <div className="space-y-6">
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
              style={{ backgroundColor: "#115cef", marginLeft: "10%" }} // Added marginLeft for indentation
            >
              <div className="absolute top-6 right-6 text-4xl font-light text-blue-300">
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

          {/* Right Column - Coaching Summary */}
          <div>
            <p className="text-blue-600 text-sm font-medium mb-4 tracking-wide uppercase">
              Our Expertise
            </p>
            <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Comprehensive Career <br />
              Coaching Solutions
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From interview preparation and career planning to executive coaching, our experienced professionals provide personalized guidance to help you achieve your career goals. Whether you're seeking a new position, changing careers, or advancing to executive leadership, we offer the expertise and support you need to succeed.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-block transition-all duration-200"
              style={{
                backgroundColor: "#115cef",
                color: "#ffffff",
                textAlign: "center",
                borderRadius: "9999px",
                padding: "16px 36px",
                fontSize: "16px", // Slightly smaller font size
                fontWeight: 500,
                lineHeight: "1.5em",
                border: "none",
              }}
            >
              Get a Free Consultation {/* Original text (from image) */}
            </button>
          </div>
        </div>

        {/* Removed the Stats Section */}
      </div>
    </section>
  );
}