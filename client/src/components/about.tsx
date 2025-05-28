import { CheckCircle } from "lucide-react";

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional team collaborating in modern office"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Logiq Careers, we address unmet needs in career services with
              comprehensive personalized career services for individuals and companies
              in an increasingly competitive economy.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our tagline says it all:{" "}
              <strong>"Customized Career Services targeted toward those seeking more."</strong>{" "}
              We understand that every professional's journey is unique, and we provide
              the personalized guidance and expertise needed to help you achieve your
              career goals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Personalized Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Every service is tailored to your unique needs and career goals
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Professional career counselors and recruiters with industry experience
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Results-Driven</h3>
                  <p className="text-muted-foreground">
                    Focused on helping you achieve measurable career advancement
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
