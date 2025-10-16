import { 
  CodeBracketIcon, 
  ServerIcon, 
  WrenchScrewdriverIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <PaintBrushIcon className="w-8 h-8" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <ServerIcon className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 75 },
        { name: "Authentication", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "Vite", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Render/Netlify", level: 75 },
        { name: "Figma", level: 65 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 text-primary-600 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 group-hover:text-primary-600 transition duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              "HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", 
              "Node.js", "Express.js", "MongoDB", "Git", "GitHub",
              "Vite", "REST APIs", "Responsive Design", "Figma", "VS Code"
            ].map((tech, index) => (
              <span 
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium border border-gray-300 hover:border-primary-300 hover:text-primary-600 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills