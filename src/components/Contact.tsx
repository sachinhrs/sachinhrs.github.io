
import React, { useState } from 'react';
import { Mail, MessageSquare, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Create Together
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Ready to bring your game idea to life? Let's discuss your project and make it extraordinary.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <MessageSquare className="text-purple-400" />
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info and social links */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <Mail className="text-purple-400" />
                Get In Touch
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-purple-400" />
                  <span>alex.chen@gamedev.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-purple-400" />
                  <span>Available for freelance projects</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gray-700 hover:bg-purple-600 p-3 rounded-lg transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-3">Available for Projects</h4>
              <p className="text-gray-300 mb-4">
                I'm currently accepting new freelance projects and collaborations. 
                Let's create something amazing together!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 Alex Chen. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
