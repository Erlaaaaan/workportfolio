
import Hero from './components/hero';
import About from './components/about';
import Project from './components/project';



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Unified Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Flare effects */}
        <div className="absolute top-10 left-10 w-40 h-3 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-48 h-4 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-36 h-3 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-2xl opacity-50 animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-44 h-4 bg-gradient-to-r from-transparent via-pink-400 to-transparent blur-3xl opacity-60 animate-pulse delay-1500"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-400 border-dashed opacity-40 animate-spin"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-purple-400 border-dashed opacity-40 animate-spin delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-orange-400 border-dashed opacity-40 animate-spin delay-2000"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-5 h-5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-60 animate-bounce delay-2000"></div>

        {/* Diagonal lines */}
        <div className="absolute top-1/3 left-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-xl opacity-40 transform rotate-45"></div>
        <div className="absolute top-2/3 right-1/3 w-28 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-2xl opacity-50 transform -rotate-45"></div>
        
        {/* Floating triangles */}
        <div className="absolute top-1/3 left-1/6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-purple-500 opacity-40 animate-bounce delay-500"></div>
        <div className="absolute top-2/3 right-1/6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-orange-400 opacity-40 animate-bounce delay-1500"></div>

        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-400/30 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-purple-400/20 rounded-full animate-spin delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        
        <Hero />
        <About />
        <Project />
        
      </div>
    </div>
  );
}
