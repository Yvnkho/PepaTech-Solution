import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <span className="text-white font-bold text-xl">Pepatech Solutions</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Professional electrical, internet, and home technology services for residential and small business
              clients in Zomba, Malawi.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+265888955330" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +265 888 955 330
              </a>
              <a href="mailto:patelpeterson@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                patelpeterson@gmail.com
              </a>
              <div className="text-gray-400 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Zomba, Malawi
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home Gadgets Repairing</li>
              <li>Electrical Wiring</li>
              <li>Internet Installation</li>
              <li>Power Backup</li>
              <li>Lighting Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pepatech Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
