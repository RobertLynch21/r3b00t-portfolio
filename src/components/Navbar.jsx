import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 text-green-400 p-4 z-50 shadow-lg border-b border-green-500">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide text-neon-green mr-10">R3B00T</h1>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl text-green-400 hover:text-green-300" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        
        {/* Navigation Links */}
        <ul className={`md:flex gap-6 absolute md:static top-14 left-0 w-full bg-gray-900 md:bg-transparent md:flex-row flex-col items-center p-4 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-cyan-400 transition duration-300">Home</motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-cyan-400 transition duration-300">Projects</motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-cyan-400 transition duration-300">Skills</motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-cyan-400 transition duration-300">Contact</motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-cyan-400 transition duration-300">Blog</motion.li>
        </ul>
      </div>
    </nav>
  );
}
