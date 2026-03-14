import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-orange-500 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-black" />
            </div>
            <span className="text-white font-bold text-xl">Pepatech Solutions</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <a
              href="tel:+265888955330"
              className="bg-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-orange-500 py-2 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-orange-500 py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-orange-500 py-2 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-orange-500 py-2 font-medium"
            >
              Contact
            </button>
            <a
              href="tel:+265888955330"
              className="block bg-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
