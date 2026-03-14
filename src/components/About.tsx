import { Award, Users, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-orange-500">Pepatech Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for professional electrical and technology services in Zomba, Malawi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Who We Are</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Pepatech Solutions is a premier provider of electrical, internet, and home technology services based in
              Zomba, Malawi. We specialize in delivering high-quality, reliable solutions for both residential and
              small business clients.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              With a commitment to excellence and customer satisfaction, we combine technical expertise with
              professional service to ensure every project is completed to the highest standards.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From simple repairs to complex installations, our team brings the knowledge and experience needed to
              power your home and business with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <Award className="h-10 w-10 text-orange-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Professional Service</h4>
              <p className="text-gray-400 text-sm">Certified and experienced technicians</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <Users className="h-10 w-10 text-orange-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Customer Focus</h4>
              <p className="text-gray-400 text-sm">Dedicated to your satisfaction</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <Clock className="h-10 w-10 text-orange-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Timely Delivery</h4>
              <p className="text-gray-400 text-sm">On-time project completion</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <MapPin className="h-10 w-10 text-orange-500 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Local Expertise</h4>
              <p className="text-gray-400 text-sm">Serving Zomba and beyond</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                <span className="text-orange-500 text-4xl font-bold">PP</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Peterson Patel</h3>
              <p className="text-black/80 font-semibold text-lg mb-4">Managing Director / Electrical Engineer</p>
              <p className="text-black/90 leading-relaxed mb-4">
                Leading Pepatech Solutions with extensive experience in electrical engineering and technology services.
                Committed to delivering innovative solutions and exceptional service to every client.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="tel:+265888955330"
                  className="inline-flex items-center bg-black text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                >
                  Call: +265 888 955 330
                </a>
                <a
                  href="mailto:patelpeterson@gmail.com"
                  className="inline-flex items-center bg-black text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                >
                  Email: patelpeterson@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
