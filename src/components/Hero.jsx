import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section id='home' className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center max-w-4xl">
        <p className="text-primary-600 font-medium mb-4 animate-fade-in">Hello, I'm</p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Akhumeya
          </span>
          <br />
          <span className="text-gray-800">Abiodun Christopher</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Front-End Focused Developer building responsive web experiences with 
          <span className="font-semibold text-primary-600"> React & Tailwind CSS</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <a 
            href="#projects" 
            className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDownIcon className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero