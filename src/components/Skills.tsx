
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Unity 3D', level: 95, color: 'from-purple-500 to-purple-600' },
    { name: 'Unreal Engine', level: 88, color: 'from-blue-500 to-blue-600' },
    { name: 'Maya', level: 92, color: 'from-pink-500 to-pink-600' },
    { name: 'Blender', level: 85, color: 'from-orange-500 to-orange-600' },
    { name: 'C# Programming', level: 90, color: 'from-green-500 to-green-600' },
    { name: 'After Effects', level: 87, color: 'from-indigo-500 to-indigo-600' }
  ];

  const categories = [
    {
      title: 'Game Development',
      items: ['Unity 3D', 'Unreal Engine', 'C# Programming', 'Game Design', 'Level Design']
    },
    {
      title: '3D Animation',
      items: ['Character Animation', 'Rigging', 'Motion Capture', 'Facial Animation', 'Physics Simulation']
    },
    {
      title: 'Software & Tools',
      items: ['Maya', 'Blender', 'After Effects', 'Substance Suite', 'Houdini']
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900" id="skills-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Technical proficiencies and creative capabilities
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill categories */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Specializations</h3>
            <div className="space-y-8">
              {categories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                >
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">{category.title}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="bg-gray-800 px-4 py-2 rounded-lg text-gray-300 text-sm hover:bg-purple-600/20 hover:text-purple-300 transition-colors duration-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
