export default function Process() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures you get the personalized career support you need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Initial Consultation
            </h3>
            <p className="text-muted-foreground">
              Understanding your career goals, background, and aspirations through detailed consultation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Comprehensive Analysis
            </h3>
            <p className="text-muted-foreground">
              Expert analysis of your materials and identification of areas for improvement and optimization.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Implementation & Support
            </h3>
            <p className="text-muted-foreground">
              Personalized strategy implementation with ongoing support and follow-up guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
