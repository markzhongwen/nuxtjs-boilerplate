import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Mark</h1>
            <span className="ml-2 text-sm text-blue-600 font-medium">Professional Interpreter</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Quote
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Great Wall Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571822325911-c01620a65e86)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Professional Chinese
          <span className="block text-yellow-400">Interpreter Services</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          With 15 years of sourcing and interpretation experience, I provide expert conference, 
          business, and travel interpretation services across China.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Book Consultation
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Mark</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 15 years of dedicated experience in the interpretation and sourcing industry, 
              I have built a reputation for delivering exceptional language services across China. 
              My expertise spans multiple industries and contexts, ensuring clear communication 
              between international partners.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Fluent in Mandarin, English, and regional dialects</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Specialized in business and technical terminology</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Deep understanding of Chinese business culture</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-700">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Conference Interpretation",
      description: "Professional simultaneous and consecutive interpretation for international conferences, business meetings, and corporate events.",
      icon: "🎤",
      features: ["Simultaneous Interpretation", "Consecutive Interpretation", "Technical Conferences", "Business Meetings"]
    },
    {
      title: "Business & Sourcing",
      description: "Expert interpretation for sourcing trips, factory visits, supplier negotiations, and international trade activities.",
      icon: "🏢",
      features: ["Factory Visits", "Supplier Negotiations", "Quality Control", "Trade Shows"]
    },
    {
      title: "Travel Interpretation",
      description: "Comprehensive travel interpretation services for tourists, business travelers, and cultural exchange programs.",
      icon: "✈️",
      features: ["City Tours", "Cultural Sites", "Business Travel", "Emergency Assistance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interpretation solutions tailored to your specific needs, 
            backed by years of experience and local expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Mark?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that comes with working with a seasoned professional 
            who understands both language and culture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
            <p className="text-gray-600">15 years of successful interpretation projects across various industries.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
            <p className="text-gray-600">Deep knowledge in business, technical, and cultural contexts.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Bridge</h3>
            <p className="text-gray-600">Understanding of both Eastern and Western business practices.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
            <p className="text-gray-600">Punctual, professional, and committed to your success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Let's discuss your interpretation needs and how I can help bridge the language gap 
            for your next project or business venture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <span className="text-blue-200">Available for email consultation</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📱</span>
                <span className="text-blue-200">Phone and WeChat available</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🌍</span>
                <span className="text-blue-200">Available across China</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">⏰</span>
                <span className="text-blue-200">Quick response within 24 hours</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select a service</option>
                  <option value="conference">Conference Interpretation</option>
                  <option value="business">Business & Sourcing</option>
                  <option value="travel">Travel Interpretation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mark</h3>
            <p className="text-gray-400 mb-4">
              Professional Chinese interpreter with 15 years of experience providing 
              expert language services across China.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Conference Interpretation</li>
              <li>Business & Sourcing</li>
              <li>Travel Interpretation</li>
              <li>Cultural Consultation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Coverage Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Beijing & Northern China</li>
              <li>Shanghai & Eastern China</li>
              <li>Guangzhou & Southern China</li>
              <li>Major Manufacturing Hubs</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mark - Professional Chinese Interpreter Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log("Backend connected:", response.data.message);
    } catch (e) {
      console.error("Backend connection error:", e);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;