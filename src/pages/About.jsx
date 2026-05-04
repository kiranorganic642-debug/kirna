import React from 'react';
import { Users, ShieldCheck, Target, Heart, Award, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';
import GlowVeda from '../assets/Product/organic-glow-veda.png';
import DoctorPhoto from '../assets/Doctor photo.jpeg';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-50 py-24">
        <div className="container text-center">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Ayurvedic Wisdom Since <span className="text-primary-600">2015</span></h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Established in 2015 and headquartered in Kolkata, India, Kiran Health Plus is a fast-growing 
            manufacturer in the herbal and wellness segment. Operating under the trusted brand name 
            “Kiran’s”, we blend traditional Ayurvedic wisdom with modern manufacturing practices.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Established', value: '2015' },
              { label: 'Happy Customers', value: '50k+' },
              { label: 'Pure Formulations', value: '100+' },
              { label: 'Wellness Experts', value: '25+' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={GlowVeda} 
                alt="Ayurvedic Manufacturing" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <Award className="text-primary-600 w-12 h-12 mb-2" />
                <p className="font-bold text-gray-900">Kiran's Quality</p>
                <p className="text-xs text-gray-500">ISO Certified</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To deliver natural, effective, and affordable health solutions that support preventive 
                  healthcare and holistic well-being. We focus on quality, consistency, and customer 
                  satisfaction to remain a reliable name in the Indian wellness industry.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 p-2 rounded-xl text-primary-600">
                    <Logo iconOnly={true} className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To position Kiran's as a global leader in Ayurvedic wellness, blending traditional 
                  wisdom with modern science to create a healthier future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Kiran Pandey's Profile */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-48 h-48 bg-primary-100 rounded-3xl mx-auto mb-8 flex items-center justify-center overflow-hidden shadow-xl border-4 border-white">
              <img src={DoctorPhoto} alt="Dr. Kiran Pandey" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dr. Kiran Pandey</h2>
            <p className="text-primary-600 font-bold text-lg mb-6">Neuro Pain Specialist | Kidney Care Expert | Herbal Medicine Researcher</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dr. Kiran Pandey is a highly experienced and dedicated healthcare professional who has been providing effective and natural treatment solutions since 2015. She specializes in treating neurological pain (neuro pain) and kidney-related conditions with a focus on long-term relief and overall wellness.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Her approach goes beyond conventional treatment by combining diet management, detox therapies, and herbal medicine, ensuring a holistic healing process. She strongly believes in using natural and herbal methods to deliver safe, side-effect-free results. As an active Herbal Medicine Researcher, Dr. Kiran Pandey continuously works on developing advanced and effective herbal formulations. Her research-driven treatments have helped thousands of patients achieve better health outcomes.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With years of experience and a strong commitment to patient care, she has built a reputation for delivering trusted, result-oriented, and natural healthcare solutions.
            </p>
            <div className="text-left inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specializations:</h3>
              <ul className="text-gray-600 text-lg space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Neuro Pain Treatment</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Kidney Care & Treatment</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Diet & Detox Therapy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary-600" /> Herbal & Organic Medicine</li>
              </ul>
            </div>
            <div className="text-left inline-block mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission:</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide safe, natural, and chemical-free treatment solutions that help people live a healthier, pain-free life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600">The principles that guide everything we do at Kiran Health Plus</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-10 h-10" />, title: 'Uncompromising Quality', desc: 'Every product undergoes rigorous quality checks to ensure 100% purity and authenticity.' },
              { icon: <Users className="w-10 h-10" />, title: 'Farmer First', desc: 'We work directly with local farmers, ensuring fair prices and supporting sustainable farming practices.' },
              { icon: <Heart className="w-10 h-10" />, title: 'Customer Wellness', desc: 'Your health is our priority. We are committed to providing products that truly nourish and heal.' },
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-3xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 group">
                <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-primary-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-800 rounded-full blur-3xl opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-600">KP</span>
            </div>
            <h2 className="text-3xl font-bold mb-8 italic">
              "Organic living is not just a choice, it's a responsibility towards our bodies and the Earth. 
              At Kiran Health Plus, we are more than just a store; we are your partners in wellness."
            </h2>
            <div>
              <p className="text-xl font-bold text-primary-400">Kiran Pandey</p>
              <p className="text-primary-200">Founder & CEO, Kiran Health Plus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
