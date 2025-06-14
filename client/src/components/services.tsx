import { FileText, Users, MessageSquare } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-4 tracking-wide uppercase" style={{ color: "#050c35" }}>
            Our Services
          </p>
          <h2
            className="font-normal mb-6 leading-none text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              marginTop: "10px",
              marginBottom: "10px",

              fontWeight: 400,
              lineHeight: "1em",
            }}
          >
            Expert Career Guidance <br />
            & Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
          {/* Service 1 */}
          <div className="relative">
            <div
              className="relative flex flex-col h-full"
              style={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingBottom: '30px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '60px',
                display: 'flex',
                boxShadow: '0 5px 12px #10182826',
                minHeight: '400px'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2" style={{ backgroundColor: "#050c35" }}>
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Resume Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                From creation to strategic updating, our resume services help you summarize your qualifications, skills, and achievements effectively. We ensure your resume clearly details your experience, education, and key accomplishments, making a strong impression on prospective employers.
              </p>
              <button
                className="inline-block transition-all duration-200 mt-4"
                style={{
                  border: '1px solid #ffffff',
                  backgroundColor: '#f0f5ff',
                  color: '#1e344b',
                  textAlign: 'center',
                  letterSpacing: '0.2px',
                  borderRadius: '100px',
                  padding: '16px 28px',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.5em'
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative">
            <div
              className="relative flex flex-col h-full"
              style={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingBottom: '30px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '60px',
                display: 'flex',
                boxShadow: '0 5px 12px #10182826',
                minHeight: '400px'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2" style={{ backgroundColor: "#050c35" }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Strategic Career Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Our 60-90 minute Career Coaching Sessions provide a comprehensive framework for career discovery. We help you identify your interests, talents, and desires, then integrate your past education and experiences with relevant career options to build a clear and actionable career plan.
              </p>
              <button
                className="inline-block transition-all duration-200 mt-4"
                style={{
                  border: '1px solid #ffffff',
                  backgroundColor: '#f0f5ff',
                  color: '#1e344b',
                  textAlign: 'center',
                  letterSpacing: '0.2px',
                  borderRadius: '100px',
                  padding: '16px 28px',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.5em'
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative">
            <div
              className="relative flex flex-col h-full"
              style={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingBottom: '30px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '60px',
                display: 'flex',
                boxShadow: '0 5px 12px #10182826',
                minHeight: '400px'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2" style={{ backgroundColor: "#050c35" }}>
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Executive Navigator Program
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Fast-track your executive job search with our 90-day Executive Navigator Program. This highly personalized service offers twice-weekly 1-on-1 coaching, comprehensive leadership and branding development, critical industry insights, and strategic networking. We provide exclusive access to executive job openings, customized resumes, mock interview preparation, and actively market you to target companies, ensuring a guided and efficient path to your ideal executive role.
              </p>
              <button
                className="inline-block transition-all duration-200 mt-4"
                style={{
                  border: '1px solid #ffffff',
                  backgroundColor: '#f0f5ff',
                  color: '#1e344b',
                  textAlign: 'center',
                  letterSpacing: '0.2px',
                  borderRadius: '100px',
                  padding: '16px 28px',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.5em'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
