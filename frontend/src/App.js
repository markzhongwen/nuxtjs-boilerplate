import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
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
  const openWhatsApp = () => {
    window.open('https://wa.me/8613838276878?text=Hello%20Mark%2C%20I%27m%20interested%20in%20your%20interpreter%20services.', '_blank');
  };

  const copyWeChatId = () => {
    navigator.clipboard.writeText('13838276878');
    alert('WeChat ID copied to clipboard!');
  };

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
        
        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            onClick={openWhatsApp}
            className="bg-green-600 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-opacity-30 transition-all group"
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">📱</div>
              <div>
                <h3 className="text-xl font-bold text-green-300 group-hover:text-green-200">WhatsApp</h3>
                <p className="text-green-200">+86 138 3827 6878</p>
                <p className="text-sm text-green-300">Click to chat instantly</p>
              </div>
            </div>
          </div>
          
          <div 
            onClick={copyWeChatId}
            className="bg-blue-600 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-opacity-30 transition-all group"
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">💬</div>
              <div>
                <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200">WeChat</h3>
                <p className="text-blue-200">13838276878</p>
                <p className="text-sm text-blue-300">Click to copy WeChat ID</p>
              </div>
            </div>
          </div>
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
                <span className="text-blue-200">WhatsApp: +86 138 3827 6878</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">💬</span>
                <span className="text-blue-200">WeChat ID: 13838276878</span>
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

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/8613838276878?text=Hello%20Mark%2C%20I%27m%20interested%20in%20your%20interpreter%20services.', '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </button>
    </div>
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