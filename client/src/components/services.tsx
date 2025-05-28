import { Edit, Cog, Shield } from "lucide-react";

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
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Edit className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Financial Analysis
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
            </p>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Software Integration
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
            </p>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Compliance Services
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
            </p>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
