import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      testimonial: "The career coaching sessions were incredibly insightful. I was able to identify my true passions and land a senior developer role at a top tech company within 6 weeks!",
      result: "40% salary increase",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      testimonial: "My new resume got me interviews at three Fortune 500 companies. The interview coaching gave me the confidence to nail my dream job!",
      result: "Dream job achieved",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional team meeting"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              You Can Trust Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our personalized career services have helped hundreds of professionals achieve their goals and advance their careers.
            </p>

            {/* Testimonials */}
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-3">
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
      </div>
    </section>
  );
}
