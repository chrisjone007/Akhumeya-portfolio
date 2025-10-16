import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RCG HisGrace",
      description: "A modern church website featuring event management, sermon archives, and community engagement features. Built with a focus on user experience and responsive design.",
      image: "/project-hisgrace.jpg", // You can add an actual image later
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      liveLink: "https://rcg-hisgrace.onrender.com/",
      githubLink: "#", // Add your GitHub link when available
      features: ["Responsive Design", "Event Management", "Sermon Library", "Admin Dashboard"]
    },
    {
      id: 2,
      title: "Project in Progress",
      description: "An exciting new project I'm currently working on. Stay tuned for more details!",
      image: "/project-coming-soon.jpg",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      features: ["Coming Soon"],
      isComingSoon: true
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills in web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center relative">
                {project.isComingSoon ? (
                  <div className="text-center text-white">
                    <CodeBracketIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-semibold">Coming Soon</p>
                    <p className="opacity-90">Working on something amazing!</p>
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <ArrowTopRightOnSquareIcon className="w-8 h-8" />
                    </div>
                    <p className="text-2xl font-semibold">{project.title}</p>
                    <p className="opacity-90">Live Website</p>
                  </div>
                )}
                
                {/* Live Badge */}
                {!project.isComingSoon && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Live
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition duration-300 font-medium flex-1 justify-center"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    {project.isComingSoon ? 'Coming Soon' : 'View Live'}
                  </a>
                  
                  {!project.isComingSoon && project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-medium"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in working together?
          </p>
          <a 
            href="#contact" 
            className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
          >
            Start a Project With Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects