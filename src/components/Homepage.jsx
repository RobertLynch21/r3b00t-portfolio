import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Homepage() {
  const [text, setText] = useState("");
  const words = "🛠 SYSTEM R3B00T INITIALIZED... Welcome to the Digital Realm.".split("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + words[currentIndex]);
      currentIndex++;
      if (currentIndex === words.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.from(".glitch", { opacity: 0, y: -10, duration: 1, delay: 2 });
  }, []);

  return (
    <div className="h-screen bg-black text-green-400 flex flex-col items-center justify-center font-mono">
      <motion.h1
        className="text-3xl md:text-5xl glitch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mt-4 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Software Engineer | Full-Stack Developer | Cybersecurity Enthusiast
      </motion.p>
    </div>
  );
}
