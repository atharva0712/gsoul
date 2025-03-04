import { motion } from "framer-motion";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

const steps = [
  {
    id: 1,
    title: "Create Your Account",
    description:
      "Sign up in seconds which will help you keep track of your time-tables",
    icon: "👤",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Input Your Activities",
    description:
      "Add classes, meetings, personal time, and other commitments",
    icon: "📝",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "Let AI Generate Your Schedule",
    description:
      "Our advanced algorithms create your optimal timetable in seconds",
    icon: "🧠",
    color: "from-amber-500 to-red-600",
  },
  {
    id: 4,
    title: "Refine With Commands",
    description:
      "Make adjustments naturally by simply telling the app what you need",
    icon: "🤖",
    color: "from-emerald-500 to-teal-600",
  },
];

const HowToUse = () => {
  const containerRef = useRef(null);

  return (
    <section id="how-to-use" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              How to Use Gsoul
            </h2>
            <p className="text-n-2 text-xl max-w-2xl mx-auto">
              Four simple steps to transform your scheduling experience
            </p>
          </motion.div>
          
          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          </ScrollParallax>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.id * 0.15 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 80px -20px rgba(66, 71, 91, 0.3)"
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r group-hover:opacity-100 opacity-75 blur-xl transition-opacity duration-500 rounded-3xl z-0"
                style={{ 
                  background: `linear-gradient(to right, rgb(var(--${index % 2 === 0 ? 'purple-500' : 'pink-500'}, 0.3)), rgb(var(--${index % 2 === 0 ? 'blue-500' : 'rose-500'}, 0.3)))` 
                }}
              />
              
              <div className="relative z-10 p-8 lg:p-10 backdrop-blur-sm rounded-3xl border border-n-6 group-hover:border-n-5/50 transition-colors duration-500 h-full flex flex-col bg-n-8/90">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-n-7 border border-n-6 font-bold text-sm mb-3">
                        {step.id}
                      </span>
                      <div className={`h-0.5 flex-1 ml-3 bg-gradient-to-r ${step.color} transform origin-left transition-transform duration-500 group-hover:scale-x-110`}></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-n-1 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-n-2 group-hover:text-n-1/90 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: step.id * 0.2 }}
                    className={`h-1 bg-gradient-to-r ${step.color} rounded-full mt-8`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-0 w-full h-full pointer-events-none">
          <ScrollParallax isAbsolutelyPositioned>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration:
                10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
            />
          </ScrollParallax>
          
          <ScrollParallax isAbsolutelyPositioned>
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-2xl"
            />
          </ScrollParallax>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a href="#signup" className="inline-block">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative px-10 py-5 bg-n-8 rounded-full leading-none flex items-center divide-x divide-gray-600">
                <span className="pr-6 text-gray-100 text-lg font-semibold">Get Started Now</span>
                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">➔</span>
              </button>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;