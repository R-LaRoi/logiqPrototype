export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-heading font-semibold mb-3 text-foreground">
              Schedule Assessment
            </h3>
            <p className="text-muted-foreground text-sm">
              Book a comprehensive career assessment to understand your goals and current position.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-heading font-semibold mb-3 text-foreground">
              Develop Strategy
            </h3>
            <p className="text-muted-foreground text-sm">
              Create a personalized career development plan tailored to your specific needs and objectives.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-heading font-semibold mb-3 text-foreground">
              Execute & Monitor
            </h3>
            <p className="text-muted-foreground text-sm">
              Implement your career strategy with ongoing support and progress monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
