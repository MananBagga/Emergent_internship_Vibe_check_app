import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  { title: "⚡ Instant Results", desc: "No signup, no fuss. Just take the quiz and get your vibe." },
  { title: "🎨 Stylish UI", desc: "Built with modern aesthetics and dark vibes in mind." },
  { title: "🧠 Surprisingly Accurate", desc: "Our vibes come from years of playful wisdom (and a sprinkle of code)." },
];

const sampleVibes = [
  { emoji: "🧘", title: "Chill Zen", desc: "You radiate peace and balance. Your aura calms storms." },
  { emoji: "🔥", title: "Spicy Energy", desc: "Your vibe is unstoppable. You enter rooms like a playlist drop." },
  { emoji: "🎮", title: "Casual Cool", desc: "Low-key, fun, and effortlessly interesting. You’re that friend everyone vibes with." },
];

const Home = () => {
  return (
    <div className="flex flex-col text-white px-6">
      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-purple-400">Welcome to the Vibe Check 🎭</h1>
        <p className="text-lg text-zinc-300 mb-10 max-w-xl">
          Take a quick and fun quiz to find out your vibe. It’s fast, playful, and surprisingly accurate.
        </p>
        <Link to="/quiz">
          <button className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg font-medium">
            Start Quiz
          </button>
        </Link>
      </motion.section>

      {/* Feature Highlights */}
      <section className="py-20 bg-zinc-900 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-purple-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why take this quiz?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-purple-700 transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{item.title}</h3>
              <p className="text-zinc-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sample Vibe Cards */}
      <section className="py-20 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-purple-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Sneak Peek: Your Possible Vibes
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {sampleVibes.map((vibe, idx) => (
            <motion.div
              key={idx}
              className="w-72 bg-zinc-800 p-6 rounded-2xl hover:shadow-md border border-purple-600"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="text-5xl mb-3">{vibe.emoji}</div>
              <h4 className="text-xl font-semibold text-purple-400 mb-2">{vibe.title}</h4>
              <p className="text-zinc-300">{vibe.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.footer
        className="py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-purple-400 mb-4">Ready to discover your vibe?</h3>
        <Link to="/quiz">
          <button className="bg-purple-700 px-8 py-4 rounded-full hover:bg-purple-800 text-lg font-medium transition-all duration-300">
            Take the Quiz Now
          </button>
        </Link>
      </motion.footer>
    </div>
  );
};

export default Home;
