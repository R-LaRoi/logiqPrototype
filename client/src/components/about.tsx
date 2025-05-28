import { TrendingUp, Users, Award } from "lucide-react";

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
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Mastering The Art And <br />
              Science Of <span className="text-primary">Career Success</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Logiq Careers, we address unmet needs in career services with comprehensive personalized career services for individuals and companies in an increasingly competitive economy.
            </p>
            <p className="text-muted-foreground mb-8">
              Our tagline says it all: "Customized Career Services targeted toward those seeking more." We understand that every professional's journey is unique, and we provide the personalized guidance and expertise needed to help you achieve your career goals.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>

          {/* Right Content - Blue Box with Stats/Features */}
          <div className="bg-primary text-white rounded-2xl p-8">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional career guidance"
                className="rounded-xl w-full h-48 object-cover mb-6"
              />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Empowering Decisions <br />
                With Career Precision
              </h3>
              <p className="text-blue-100 mb-6">
                Our expert team provides comprehensive career guidance tailored to your unique professional goals and aspirations.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Client Success Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Professionals Helped</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <p className="text-muted-foreground">Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
