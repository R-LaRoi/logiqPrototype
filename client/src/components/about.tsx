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
        <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', gridGap: '60px', alignItems: 'start' }}>
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-sm font-medium mb-4 tracking-wide uppercase">
              About Us
            </p>
            <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Mastering The Art And <br />
              Science Of Accounting
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The profession also upholds ethical standards and often requires continuing education to stay abreast of changes in accounting principles, tax laws, and technology.
            </p>
            
            {/* Bullet Points in Two Columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }} className="mb-8">
              <div>
                <p className="text-gray-800 mb-3">
                  <span className="text-blue-600 font-bold">&gt;&gt;</span> Financial Analysis
                </p>
                <p className="text-gray-800 mb-3">
                  <span className="text-blue-600 font-bold">&gt;&gt;</span> Real Clients
                </p>
              </div>
              <div>
                <p className="text-gray-800 mb-3">
                  <span className="text-blue-600 font-bold">&gt;&gt;</span> Safe & Secure
                </p>
                <p className="text-gray-800 mb-3">
                  <span className="text-blue-600 font-bold">&gt;&gt;</span> 100% Guarantee
                </p>
              </div>
            </div>

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
              About Us
            </button>
          </div>

          {/* Right Content - Image with Blue Overlay Box */}
          <div className="relative" style={{ height: '400px' }}>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional business meeting"
              className="w-full h-full object-cover"
              style={{ 
                objectFit: 'cover'
              }}
            />
            
            {/* Blue Overlay Box */}
            <div 
              className="text-white p-6"
              style={{
                backgroundColor: '#115cef',
                marginTop: '-60px',
                position: 'relative',
                zIndex: 10
              }}
            >
              <p className="text-white leading-relaxed">
                By analyzing historical financial data and projecting future trends, businesses can create realistic budgets, set financial goals, and plan for future growth.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
