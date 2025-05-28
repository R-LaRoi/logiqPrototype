import aboutVideo from "@assets/360logiq.mp4";

export default function About() {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium mb-4 tracking-wide uppercase" style={{ color: "#050c35" }}>
              About Us
            </p>
            <h2 
              className="font-normal mb-6 leading-none text-gray-800"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "68px",
                fontWeight: 400,
                lineHeight: "1em",
              }}
            >
              Your Career. <br />
              Your Success Defined.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Recognizing an unmet need in career services, Logiq Careers was established to deliver clearly structured, personalized support. Our comprehensive offerings are designed to help individuals and companies effectively navigate and succeed in an increasingly competitive economic landscape.
            </p>
            
            {/* Bullet Points in Two Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mb-8">
              <div>
                <p className="text-gray-800 mb-3">
                  <span className="font-bold" style={{ color: "#050c35" }}>&gt;&gt;</span> Cover Letters
                </p>
                <p className="text-gray-800 mb-3">
                  <span className="font-bold" style={{ color: "#050c35" }}>&gt;&gt;</span> ATS Resume
                </p>
              </div>
              <div>
                <p className="text-gray-800 mb-3">
                  <span className="font-bold" style={{ color: "#050c35" }}>&gt;&gt;</span> Career Coaching
                </p>
                <p className="text-gray-800 mb-3">
                  <span className="font-bold" style={{ color: "#050c35" }}>&gt;&gt;</span> LinkedIn Optimization
                </p>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="inline-block transition-all duration-200"
              style={{
                border: '1px solid #ffffff',
                backgroundColor: '#050c35',
                color: '#ffffff',
                textAlign: 'center',
                letterSpacing: '0.2px',
                borderRadius: '100px',
                padding: '16px 28px',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.5em'
              }}
            >
              About Us
            </button>
          </div>

          {/* Right Content - Video with Blue Overlay Box */}
          <div className="relative h-80 lg:h-96">
            <video
              className="w-full h-full object-cover"
              style={{ 
                objectFit: 'cover'
              }}
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src={aboutVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Blue Overlay Box */}
            <div 
              className="text-white p-6"
              style={{
                backgroundColor: '#050c35',
                marginTop: '-60px',
                position: 'relative',
                zIndex: 10
              }}
            >
              <p className="text-white leading-relaxed italic" style={{ fontSize: "0.85em" }}>
                More than just a document, your resume is a powerful summary of your professional journey. It highlights your qualifications, skills, and key accomplishments, providing future employers with a clear picture of your value and what you can achieve.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
