import { FileText, Users, MessageSquare } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="text-center relative">
            <div className="bg-white rounded-xl p-8 pt-16 shadow-sm border border-gray-100 relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Free Resume Review
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Get professional analysis of your current resume with expert feedback and recommendations. Completely free with no obligation required for our comprehensive review service.
              </p>
              <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="text-center relative">
            <div className="bg-white rounded-xl p-8 pt-16 shadow-sm border border-gray-100 relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Career Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Comprehensive 60-90 minute sessions to identify your interests, talents, and career desires with strategic planning guidance and personalized support.
              </p>
              <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="text-center relative">
            <div className="bg-white rounded-xl p-8 pt-16 shadow-sm border border-gray-100 relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Interview Coaching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Professional interview coaching with mock sessions, question preparation strategies, and confidence building techniques for career success.
              </p>
              <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
