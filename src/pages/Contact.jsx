import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary-50 py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Get in <span className="text-primary-600">Touch</span></h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our products or your order? We're here to help! 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                { icon: <Phone className="w-6 h-6" />, title: 'Call Us', details: '+91 81002 60124', sub: 'Mon-Sat, 9am - 7pm' },
                { icon: <Mail className="w-6 h-6" />, title: 'Email Us', details: 'hello@kiranhealth.plus', sub: '24/7 Support Response' },
                { icon: <MapPin className="w-6 h-6" />, title: 'Visit Us', details: '4th Floor, BL-B, FL-DF', sub: '660 Sarat Bose Road, Kolkata - 700065' },
                { icon: <Clock className="w-6 h-6" />, title: 'Store Hours', details: '10:00 AM - 09:00 PM', sub: 'Open All Days' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-primary-100 transition-all duration-300">
                  <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-primary-600 font-medium">{item.details}</p>
                    <p className="text-sm text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <MessageCircle className="text-primary-600 w-8 h-8" />
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <input 
                      type="text" 
                      placeholder="How can we help?" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Your Message</label>
                    <textarea 
                      rows="5" 
                      placeholder="Tell us more about your inquiry..." 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg shadow-xl shadow-primary-100">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.3168863654!2d88.18254219453125!3d22.535406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1712745000000!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
