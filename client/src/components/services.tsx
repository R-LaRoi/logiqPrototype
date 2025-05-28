import { FileText, Users, Edit, MessageSquare, RotateCcw, CheckCircle, Zap } from "lucide-react";

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
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive career services designed to address your unique needs and help
            you achieve your professional goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Free Resume Review */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
              Free Resume Review
            </h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Professional analysis of your current resume
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Expert feedback and recommendations
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                No obligation, completely free
              </li>
            </ul>
            <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg font-semibold text-lg">
              FREE
            </span>
          </div>

          {/* Career Coaching Sessions */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
              Career Coaching Sessions
            </h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                60-90 minute comprehensive sessions
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Identify interests, talents, and career desires
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Strategic career planning and guidance
              </li>
            </ul>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Schedule Session
            </button>
          </div>

          {/* Resume Writing */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Edit className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
              Resume Writing
            </h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Professional resume creation
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Industry-specific formatting
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                ATS-optimized content
              </li>
            </ul>
            <button
              onClick={scrollToContact}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Interview Coaching */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
              Interview Coaching
            </h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Mock interview sessions
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Question preparation strategies
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                Confidence building techniques
              </li>
            </ul>
            <button
              onClick={scrollToContact}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Book Coaching
            </button>
          </div>
        </div>

        {/* Service Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
            What's Included
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <RotateCcw className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Three Free Revisions</h4>
              <p className="text-muted-foreground text-sm">
                We include three complimentary revisions with every order
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Professional Quality</h4>
              <p className="text-muted-foreground text-sm">
                Industry-standard formatting and expert career guidance
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Fast Turnaround</h4>
              <p className="text-muted-foreground text-sm">
                Quick delivery without compromising on quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
