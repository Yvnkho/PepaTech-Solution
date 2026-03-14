import { Wrench, Home, Wifi, Zap, Lightbulb, Battery, MoreHorizontal } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Home Gadgets Repairing',
    description: 'Expert repair services for all your home electronics and appliances. Fast, reliable, and affordable.',
  },
  {
    icon: Home,
    title: 'House Electrical Wiring',
    description: 'Complete electrical wiring solutions for new builds and renovations. Safe, compliant, and professional.',
  },
  {
    icon: Wifi,
    title: 'Dish & Internet Installation',
    description: 'Professional installation of satellite dishes and internet connections for seamless connectivity.',
  },
  {
    icon: Zap,
    title: 'Electrical Servicing',
    description: 'Comprehensive electrical maintenance and servicing to keep your systems running smoothly.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Installation',
    description: 'Modern lighting solutions including LED installations, outdoor lighting, and smart lighting systems.',
  },
  {
    icon: Battery,
    title: 'Power Backup Solutions',
    description: 'UPS systems, generators, and battery backup solutions to keep your power flowing during outages.',
  },
  {
    icon: MoreHorizontal,
    title: 'Additional Services',
    description: 'Custom electrical and technology solutions tailored to your specific needs and requirements.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional electrical and technology services designed to meet all your residential and business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-xl hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border border-gray-200"
              >
                <div className="bg-orange-500 group-hover:bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                  <Icon className="h-8 w-8 text-black group-hover:text-orange-500" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="tel:+265888955330"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg"
          >
            Contact Us for a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
