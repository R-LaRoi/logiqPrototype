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
            gridTemplateColumns: "50% 50%",
            gridGap: "60px",
            alignItems: "start",
          }}
        >
          {/* Left Column - Content Blocks */}
          <div className="space-y-6">
            {/* Block 1 - Interview Coaching */}
            <div
              className="relative p-8"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="absolute top-6 right-6 text-4xl font-light text-gray-300">
                01
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Interview Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pr-12">
                Great interviews are a combination of your confidence, strategy, preparation, and practice. If you want to develop a winning interview strategy and prepare great answers to interview questions, contact us today for a no-cost initial consultation.
              </p>
            </div>

            {/* Block 2 - Career Coaching (Highlighted) */}
            <div
              className="relative p-8"
              style={{ backgroundColor: "#115cef" }}
            >
              <div className="absolute top-6 right-6 text-4xl font-light text-blue-300">
                02
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Career Coaching
              </h3>
              <p className="text-white text-sm leading-relaxed pr-12">
                Our Career coaches are experts in skills such as career planning, resume building, negotiation and interviewing. While you may only search for a new gig or switch careers a handful times in your life, our professionals are up to date with current hiring practices because they're constantly working to help job seekers.
              </p>
            </div>

            {/* Block 3 - Executive Career Coaching */}
            <div
              className="relative p-8"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="absolute top-6 right-6 text-4xl font-light text-gray-300">
                03
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Executive Career Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pr-12">
                Our seasoned executive coaches help guide corporate officers gain self-awareness, clarify goals, achieve their development objectives, unlock their potential, and act as a sounding board and provide guidance.
              </p>
            </div>
          </div>

          {/* Right Column - Advantages Content */}
          <div className="pl-8">
            <p className="text-blue-600 text-sm font-medium mb-4 tracking-wide uppercase">
              Advantages
            </p>
            <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Empowering Decisions <br />
              With Financial Precision
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In summary, accounting is an essential tool for maintaining
              financial order, supporting decision-making, and fostering
              transparency and accountability in both individual and business
              financial activities.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-block transition-all duration-200"
              style={{
                border: "1px solid #ffffff",
                backgroundColor: "#115cef",
                color: "#ffffff",
                textAlign: "center",
                letterSpacing: "0.2px",
                borderRadius: "100px",
                padding: "16px 28px",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "1.5em",
              }}
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-8 mt-20 text-center">
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">6K+</div>
          <p className="text-gray-600 text-sm">Satisfied Clients</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
          <p className="text-gray-600 text-sm">Satisfied Clients</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
          <p className="text-gray-600 text-sm">Satisfied Clients</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">64</div>
          <p className="text-gray-600 text-sm">Satisfied Clients</p>
        </div>
      </div>
      
    </section>
  );
}
