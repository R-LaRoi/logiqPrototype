export default function Process() {
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
    <section className="py-20" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', gridGap: '60px', alignItems: 'start' }}>
          
          {/* Left Column - Content Blocks */}
          <div className="space-y-6">
            
            {/* Block 1 - Financial Clarity */}
            <div className="relative p-8" style={{ backgroundColor: '#ffffff' }}>
              <div className="absolute top-6 right-6 text-4xl font-light text-gray-300">
                01
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Financial Clarity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pr-12">
                Accounting provides a clear and organized record of financial transactions, enabling individuals and businesses to understand their financial position at any given time.
              </p>
            </div>

            {/* Block 2 - Decision Support (Highlighted) */}
            <div className="relative p-8" style={{ backgroundColor: '#115cef' }}>
              <div className="absolute top-6 right-6 text-4xl font-light text-blue-300">
                02
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Decision Support
              </h3>
              <p className="text-white text-sm leading-relaxed pr-12">
                This information is crucial for making strategic decisions, setting goals, and planning for the future. Financial statements and reports generated through accounting help.
              </p>
            </div>

            {/* Block 3 - Resource Allocation */}
            <div className="relative p-8" style={{ backgroundColor: '#ffffff' }}>
              <div className="absolute top-6 right-6 text-4xl font-light text-gray-300">
                03
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Resource Allocation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pr-12">
                Businesses use accounting information to allocate resources efficiently. This includes determining the profitability of products or services.
              </p>
            </div>

          </div>

          {/* Right Column - Advantages Content */}
          <div className="pl-8">
            <p className="text-blue-600 text-sm font-medium mb-4 tracking-wide uppercase">
              Advantages
            </p>
            <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Empowering Decisions <br />
              With Financial Precision
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In summary, accounting is an essential tool for maintaining financial order, supporting decision-making, and fostering transparency and accountability in both individual and business financial activities.
            </p>
            
            <button
              onClick={scrollToContact}
              className="inline-block transition-all duration-200"
              style={{
                border: '1px solid #ffffff',
                backgroundColor: '#115cef',
                color: '#ffffff',
                textAlign: 'center',
                letterSpacing: '0.2px',
                borderRadius: '100px',
                padding: '16px 28px',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.5em'
              }}
            >
              Get a Free Consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
