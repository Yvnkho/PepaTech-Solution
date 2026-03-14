import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <a
                href="tel:+265888955330"
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group"
              >
                <div className="bg-orange-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-600">+265 888 955 330</p>
                </div>
              </a>

              <a
                href="https://wa.me/265999955330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
              >
                <div className="bg-green-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                  <p className="text-gray-600">+265 999 955 330</p>
                </div>
              </a>

              <a
                href="mailto:patelpeterson@gmail.com"
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group"
              >
                <div className="bg-orange-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">patelpeterson@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Location</p>
                  <p className="text-gray-600">Zomba, Malawi</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl text-white">
              <h4 className="font-bold text-lg mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Emergency Services Only</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="+265 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-black font-semibold px-6 py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
