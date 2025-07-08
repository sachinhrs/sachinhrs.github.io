
import React from 'react';
import { Download, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-800" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate game developer and 3D animator with over 5 years of experience 
                creating immersive digital experiences. My journey began with a fascination for 
                bringing characters to life through animation, which naturally evolved into 
                full-scale game development.
              </p>
              <p>
                I specialize in Unity 3D and Unreal Engine development, with a strong foundation 
                in 3D modeling, rigging, and animation using industry-standard tools like Maya 
                and Blender. My work spans from indie mobile games to AAA-quality animations.
              </p>
              <p>
                When I'm not coding or animating, you'll find me exploring virtual worlds, 
                studying the latest rendering techniques, or collaborating with fellow creators 
                to push the boundaries of interactive entertainment.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-purple-400" />
                <span>alex.chen@gamedev.com</span>
              </div>
            </div>

            <button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=600&fit=crop&crop=face"
                alt="Alex Chen"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500 rounded-full blur-2xl opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '15+', label: 'Happy Clients' },
            { number: '100K+', label: 'Lines of Code' }
          ].map((stat, index) => (
            <div key={stat.label} className="p-6 bg-gray-900 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
