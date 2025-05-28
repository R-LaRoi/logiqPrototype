import { Check } from "lucide-react";

export default function Pricing() {
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

  const plans = [
    {
      name: "Resume Review",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Professional resume analysis",
        "Expert feedback",
        "Improvement recommendations",
        "No obligation required"
      ],
      buttonText: "Get Free Review",
      popular: false
    },
    {
      name: "Career Coaching",
      price: "$299",
      description: "Most popular choice",
      features: [
        "60-90 minute sessions",
        "Career planning guidance",
        "Skills assessment",
        "Goal setting strategies",
        "Follow-up support"
      ],
      buttonText: "Schedule Session",
      popular: true
    },
    {
      name: "Complete Package",
      price: "$599",
      description: "Everything you need",
      features: [
        "Professional resume writing",
        "Interview coaching",
        "Career guidance sessions",
        "Three free revisions",
        "ATS optimization",
        "30-day support"
      ],
      buttonText: "Get Started",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Unlock Your Career's <br />Full Potential
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our professional service plans, expertly tailored to accelerate your unique growth path.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 ${
                plan.popular
                  ? "bg-primary text-white transform scale-105"
                  : "bg-white text-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className={plan.popular ? "text-blue-100" : "text-gray-600"}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                      plan.popular ? "text-green-300" : "text-green-500"
                    }`} />
                    <span className={plan.popular ? "text-blue-100" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}