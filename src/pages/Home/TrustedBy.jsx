// src/components/TrustedBy.jsx
import React from 'react';

export default function TrustedBySection() {
  const companies = [
    { 
      name: 'Google', 
      logo: 'https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0',
    },
    { 
      name: 'Microsoft', 
      logo: 'https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0',
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    { 
      name: 'TCS', 
      logo: 'https://images.ctfassets.net/7xz1x21beds9/4cTq1jt8uh8jnBgvWbpKOV/663b48744791bd4e5ca178ae503d4916/Tata_Consultancy_Services_Logo.svg.png?w=1029&h=1029&q=90&fm=png',
    },
    { 
      name: 'TCS', 
      logo: 'https://www.pngmart.com/files/23/Deloitte-Logo-PNG-Picture.png',
    },
    { 
      name: 'Infosys', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
    },
  ];

  // Fallback for image loading errors
  const handleImageError = (e, companyName) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/120x40/1565c0/white?text=${companyName.charAt(0)}`;
  };

  return (
    <section className="py-12 md:py-16 bg-[#1565c0] relative overflow-hidden">
      {/* Background Pattern - White dots for subtle texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean and Simple */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted By Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Join 500+ companies building their teams with CareerHubIndia
          </p>
        </div>

        {/* Companies Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 md:p-5 transition-all duration-300 flex items-center justify-center group"
            >
              <div className="h-12 md:h-14 flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="max-h-full w-auto max-w-[100px] md:max-w-[120px] object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => handleImageError(e, company.name)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8 md:mt-10">
          <span className="inline-flex items-center gap-2 text-white/60 text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
            Premium Partner Network
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
          </span>
        </div>
      </div>
    </section>
  );
}