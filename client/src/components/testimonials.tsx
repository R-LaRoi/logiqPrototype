import { Star } from "lucide-react";

export default function Testimonials() {
  const services = [
    {
      title: "Compliance Services",
      description: "Professional compliance and regulatory guidance to ensure your career moves align with industry standards and best practices."
    },
    {
      title: "Payroll Processing", 
      description: "Strategic salary negotiation and compensation analysis to maximize your earning potential in your chosen field."
    },
    {
      title: "Bookkeeping",
      description: "Comprehensive career record keeping and progress tracking to monitor your professional development journey."
    },
    {
      title: "Auditing",
      description: "In-depth career audits and assessments to identify strengths, gaps, and opportunities for advancement."
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      testimonial: "The career coaching sessions were incredibly insightful. I was able to identify my true passions and land a senior developer role.",
      rating: 5
    },
    {
      name: "Sarah Johnson", 
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      testimonial: "My new resume got me interviews at three Fortune 500 companies. The interview coaching gave me the confidence to succeed.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional team meeting"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>

          {/* Right - Services List */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              You Can Trust Us
            </h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            What Our Satisfied Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
