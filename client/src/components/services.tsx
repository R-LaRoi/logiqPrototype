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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            We Provide Best <br />Career Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional career coaching, resume writing, and interview preparation designed to help you excel in today's competitive job market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Resume Review */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Free Resume Review
            </h3>
            <p className="text-muted-foreground mb-6">
              Get professional analysis of your current resume with expert feedback and recommendations. Completely free with no obligation.
            </p>
            <ul className="text-muted-foreground text-sm space-y-2 mb-6 text-left">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                Professional analysis
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                Expert recommendations
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                No obligation required
              </li>
            </ul>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 w-full"
            >
              Get Free Review
            </button>
          </div>

          {/* Career Coaching */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Career Coaching
            </h3>
            <p className="text-muted-foreground mb-6">
              Comprehensive 60-90 minute sessions to identify your interests, talents, and career desires with strategic planning guidance.
            </p>
            <ul className="text-muted-foreground text-sm space-y-2 mb-6 text-left">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                60-90 minute sessions
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                Strategic career planning
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                Personalized guidance
              </li>
            </ul>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 w-full"
            >
              Schedule Session
            </button>
          </div>

          {/* Resume Writing & Interview Coaching */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Resume & Interview Prep
            </h3>
            <p className="text-muted-foreground mb-6">
              Professional resume writing with ATS optimization plus interview coaching with mock sessions and confidence building techniques.
            </p>
            <ul className="text-muted-foreground text-sm space-y-2 mb-6 text-left">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                ATS-optimized resumes
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                Mock interview sessions
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                Three free revisions
              </li>
            </ul>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
