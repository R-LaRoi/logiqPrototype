import { FileText, Users, CheckCircle } from "lucide-react";

export default function Services() {
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            We Provide Best <br />Career Service
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Resume Review */}
          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Free Resume Review
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get professional analysis of your current resume with expert feedback and recommendations. Completely free with no obligation required for our comprehensive review service.
            </p>
          </div>

          {/* Career Coaching */}
          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Career Coaching
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Comprehensive 60-90 minute sessions to identify your interests, talents, and career desires with strategic planning guidance and personalized support.
            </p>
          </div>

          {/* Resume Writing & Interview Coaching */}
          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Professional Services
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional resume writing with ATS optimization plus interview coaching with mock sessions and confidence building techniques for career success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
