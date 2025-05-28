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
            Accounting Service
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="text-center relative">
            <div className="bg-white rounded p-8 pt-16 shadow-sm border border-gray-100 relative h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Financial Analysis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 mt-4 inline-block text-sm font-normal"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="text-center relative">
            <div className="bg-white rounded p-8 pt-16 shadow-sm border border-gray-100 relative h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Software Integration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 mt-4 inline-block text-sm font-normal"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="text-center relative">
            <div className="bg-white rounded p-8 pt-16 shadow-sm border border-gray-100 relative h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Compliance Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                These services are designed to help manage financial processes, ensure compliance with regulations, and provide accurate financial information for decision-making.
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 mt-4 inline-block text-sm font-normal"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
