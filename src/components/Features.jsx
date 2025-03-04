import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const features = [
  {
    id: 1,
    title: "AI-Powered Schedule Optimization",
    description:
      "Advanced algorithms analyze your preferences and constraints to create the perfect timetable tailored just for you",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Real-time Customization",
    description:
      "Instantly adjust and fine-tune your schedule with natural language commands",
    icon: "🔄",
  },
  {
    id: 3,
    title: "Smart Conflict Resolution",
    description:
      "Automatically detects and resolves scheduling conflicts while maintaining your preferences",
    icon: "✨",
  },
  {
    id: 4,
    title: "Interactive Timetable View",
    description:
      "Beautiful, responsive interface that makes viewing and modifying your schedule a breeze",
    icon: "📱",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-n-2 text-lg max-w-2xl mx-auto">
            Transform your scheduling experience with our cutting-edge AI
            technology
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.1, delay: feature.id * 0.2 }}
              className={`relative p-12  rounded-2xl bg-n-8/90 backdrop-blur-sm border border-n-6 hover:border-n-5 transition-colors w-full md:w-2/3 lg:w-1/2 
                ${index % 2 === 0 ? "self-start" : "self-end"}`}
              style={{
                transform: `translateX(${index % 2 === 0 ? "0" : "10%"})`,
                marginTop: index === 0 ? "0" : "1rem",
              }}
            >
              <div className="flex items-center gap-6">
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-n-1">
                    {feature.title}
                  </h3>
                  <p className="text-n-2">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute top-10 left-5 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
        </ScrollParallax>
        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute bottom-10 right-5 w-72 h-72 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full blur-3xl" />
        </ScrollParallax>
      </div>
    </section>
  );
};

export default Features;
