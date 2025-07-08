
import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Neon Runner",
      category: "game",
      type: "Unity 3D Game",
      description: "Fast-paced cyberpunk endless runner with dynamic lighting and particle effects",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      technologies: ["Unity", "C#", "Blender"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Character Animation Reel",
      category: "animation",
      type: "3D Animation",
      description: "Collection of character animations showcasing walk cycles, combat, and emotional expressions",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["Maya", "After Effects", "Substance Painter"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Mystic Realms",
      category: "game",
      type: "Mobile RPG",
      description: "Fantasy RPG with custom shader effects and procedural world generation",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      technologies: ["Unreal Engine", "Blueprint", "Houdini"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Motion Graphics Portfolio",
      category: "animation",
      type: "Motion Design",
      description: "Dynamic motion graphics for game UI and marketing materials",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["After Effects", "Cinema 4D", "Photoshop"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-20 px-4 bg-gray-800" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest work in game development and 3D animation
        </p>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12 gap-4">
          {['all', 'game', 'animation'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors duration-300">
                      <Play size={20} />
                    </button>
                    <button className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
