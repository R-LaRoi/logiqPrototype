import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "J. Harris",
      role: "Business Owner",
      testimonial: "David is one of the best coaches around. He helped me see opportunities in my conflict that helped my business grow! I highly recommend David and his team (Logiq Careers) for coaching or resume writing. Get professionals on your team.",
      rating: 5
    },
    {
      name: "Professional Client", 
      role: "Career Transition",
      testimonial: "Logiqcareers coached me during several professional transitions. Their guidance was invaluable in helping me navigate career changes and find the right opportunities that aligned with my goals.",
      rating: 5
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Header */}
          <div>
            <p className="text-sm font-medium mb-4 tracking-wide uppercase" style={{ color: "#050c35" }}>
              Testimonials
            </p>
            <h2 className="text-5xl font-serif font-bold text-gray-800 mb-8 leading-tight">
              What Our Satisfied <br />
              Clients Say
            </h2>
            
            {/* Navigation arrows */}
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:opacity-80 transition-colors" style={{ borderColor: "#050c35", backgroundColor: "#050c35", color: "#ffffff" }}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:opacity-80 transition-colors" style={{ borderColor: "#050c35", backgroundColor: "#050c35", color: "#ffffff" }}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 relative"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 5px 12px #10182826'
                }}
              >
                {/* Header with name and stars */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold" style={{ color: "#050c35" }}>
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#050c35" }} />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
