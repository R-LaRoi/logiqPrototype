import { FileText, Users, MessageSquare } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium mb-4 tracking-wide uppercase">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
            We Provide Best <br />
            Career Service
          </h2>
        </div>

        <div className="flex justify-center gap-4">
          {/* Service 1 */}
          <div className="relative" style={{ width: '31%' }}>
            <div 
              className="relative flex flex-col"
              style={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '30px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '60px',
                display: 'flex',
                boxShadow: '0 5px 12px #10182826'
              }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Free Resume Review
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
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
          <div className="relative" style={{ width: '31%' }}>
            <div 
              className="relative flex flex-col"
              style={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '30px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '60px',
                display: 'flex',
                boxShadow: '0 5px 12px #10182826'
              }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Career Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
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
          <div className="relative" style={{ width: '31%' }}>
            <div 
              className="relative flex flex-col"
              style={{
                backgroundColor: '#ffffff',
                textAlign: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '30px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '60px',
                display: 'flex',
                boxShadow: '0 5px 12px #10182826'
              }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Interview Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
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
