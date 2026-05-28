import { 
  UserCircleIcon,
  MapPinIcon,
  AcademicCapIcon,
  HeartIcon,
  LightBulbIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const stats = [
    { number: "3+", label: "Years Learning" },
    { number: "2", label: "Projects Completed" },
    { number: "100%", label: "Passionate" },
    { number: "Always", label: "Learning" }
  ]

  const interests = [
    { icon: "💻", name: "Coding Challenges" },
    { icon: "📚", name: "Tech Blogs" },
    { icon: "🎵", name: "Music" },
    { icon: "🌍", name: "Open Source" },
    { icon: "⚡", name: "New Technologies" },
    { icon: "🎯", name: "Problem Solving" }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-primary-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Developer, Tutor, and Lifelong Learner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <UserCircleIcon className="w-8 h-8 text-primary-600" />
                Hello, I'm Akhumeya!
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="font-semibold text-primary-600">Front-End Focused Developer</span> and <span className="font-semibold text-primary-600">Software Development Tutor</span> dedicated to building amazing web experiences and empowering others through code.
                </p>
                <p>
                  My journey into web development started with curiosity about how websites work, and it quickly evolved into a passion for building digital experiences that make a difference. I love turning complex problems into simple, beautiful solutions.
                </p>
                <p>
                  As a tutor, I enjoy sharing my knowledge and helping aspiring developers build their skills in HTML, CSS, JavaScript, and modern frameworks. There's nothing more rewarding than seeing someone grasp a new concept and apply it creatively.
                </p>
              </div>
            </div>

            {/* Teaching Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <BookOpenIcon className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-bold text-gray-800">Teaching & Mentoring</h4>
              </div>
              <p className="text-gray-700 mb-3">
                I offer <span className="font-semibold text-green-600">one-on-one tutoring</span> and <span className="font-semibold text-green-600">code reviews</span> for:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>HTML/CSS Fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>JavaScript Concepts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>React.js Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Project Guidance</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-primary-300 transition duration-300"
                >
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-8">
            {/* Current Focus */}
            <div className="text-center">
                <img 
                src="/Passport2.PNG" 
                alt="Akhumeya Abiodun Christopher"
                className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-white shadow-lg mb-4"
                />
                <p className="text-sm text-gray-600 font-medium">
                Akhumeya Abiodun Christopher
                </p>
                <p className="text-xs text-gray-500">
                Web Developer & Tutor
                </p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
              <div className="flex items-center gap-3 mb-3">
                <LightBulbIcon className="w-6 h-6 text-primary-600" />
                <h4 className="text-lg font-bold text-gray-800">Current Focus</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Currently deepening my knowledge in <span className="font-semibold text-primary-600">React ecosystem</span> and exploring <span className="font-semibold text-primary-600">full-stack development</span> with Node.js and MongoDB.
              </p>
              <p className="text-gray-700">
                Also developing <span className="font-semibold text-primary-600">teaching materials</span> and <span className="font-semibold text-primary-600">coding exercises</span> for my students.
              </p>
              
            </div>
            
            {/* Interests */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <HeartIcon className="w-6 h-6 text-primary-600" />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 text-center border border-gray-300 hover:border-primary-300 hover:shadow-md transition duration-300 group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition duration-300">
                      {interest.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      {interest.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <AcademicCapIcon className="w-6 h-6" />
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-5 h-5" />
                  <div>
                    <div className="text-sm opacity-90">Location</div>
                    <div className="font-medium">Available Worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">👨‍🏫</div>
                  <div>
                    <div className="text-sm opacity-90">Role</div>
                    <div className="font-medium">Developer & Tutor</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">💼</div>
                  <div>
                    <div className="text-sm opacity-90">Status</div>
                    <div className="font-medium">Open to Opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Interested in collaboration or tutoring?
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About