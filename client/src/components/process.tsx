export default function Process() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures you get the personalized career support you
            need
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Initial Consultation
            </h3>
            <p className="text-muted-foreground">
              We start with understanding your career goals, background, and aspirations
              through a detailed consultation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Comprehensive Analysis
            </h3>
            <p className="text-muted-foreground">
              Our experts analyze your current materials and identify areas for
              improvement and optimization.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Customized Strategy
            </h3>
            <p className="text-muted-foreground">
              We develop a personalized action plan tailored to your specific industry
              and career objectives.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Implementation & Support
            </h3>
            <p className="text-muted-foreground">
              We implement the strategy and provide ongoing support with revisions and
              follow-up guidance.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8 text-foreground">
            Typical Timeline
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24-48 Hours</div>
              <p className="text-muted-foreground font-medium">
                Free Resume Review Response
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3-5 Days</div>
              <p className="text-muted-foreground font-medium">
                Resume Writing Completion
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1-2 Weeks</div>
              <p className="text-muted-foreground font-medium">
                Full Career Coaching Program
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
