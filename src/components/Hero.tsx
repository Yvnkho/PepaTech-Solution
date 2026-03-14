import { Phone, MessageCircle, ArrowRight, Zap, Wifi, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Zap, label: 'Electrical', color: 'from-orange-500 to-red-500' },
    { icon: Wifi, label: 'Internet Setup', color: 'from-blue-500 to-cyan-500' },
    { icon: Home, label: 'Home Tech', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-600 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-orange-500 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 127, 14, .05) 25%, rgba(255, 127, 14, .05) 26%, transparent 27%, transparent 74%, rgba(255, 127, 14, .05) 75%, rgba(255, 127, 14, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 127, 14, .05) 25%, rgba(255, 127, 14, .05) 26%, transparent 27%, transparent 74%, rgba(255, 127, 14, .05) 75%, rgba(255, 127, 14, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <span className="text-orange-400 font-semibold text-sm tracking-wide">Professional Electrical & Tech Services</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Powering Your Home & Business with{' '}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 bg-clip-text text-transparent animate-gradient">Expert Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up animation-delay-200 max-w-2xl">
              From electrical installations to internet setup and home technology services, we deliver reliable, professional solutions across Zomba and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-300">
              <a
                href="tel:+265888955330"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 duration-300"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Call Now
              </a>

              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center bg-transparent border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* WhatsApp link */}
            <a
              href="https://wa.me/265999955330"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300 font-medium group animate-fade-in-up animation-delay-400"
            >
              <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Chat on WhatsApp: +265 999 955 330
            </a>
          </div>

          {/* Right side - Interactive feature cards */}
          <div className="hidden lg:flex flex-col gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer transform ${
                    isHovered
                      ? 'border-orange-500 bg-gradient-to-r from-orange-500/20 to-transparent shadow-2xl shadow-orange-500/30 scale-105'
                      : 'border-gray-700 bg-gray-900/50 hover:border-orange-500/50'
                  }`}
                  style={{
                    transform: isHovered ? `translateX(10px) scale(1.05)` : 'translateX(0) scale(1)',
                  }}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {feature.label}
                    </span>
                  </div>

                  {isHovered && (
                    <div className="absolute -right-2 -top-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
          <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
          <svg className="w-6 h-6 text-orange-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
