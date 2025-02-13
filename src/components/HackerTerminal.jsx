import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HackerTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Welcome to R3B00T Terminal...",
    "Type 'help' for a list of commands."
  ]);

  const commands = {
    help: [
      "Available commands:",
      "- help: Show available commands",
      "- about: Learn about R3B00T",
      "- projects: View my projects",
      "- clear: Clear the terminal"
    ],
    about: ["R3B00T - Software Engineer & Cybersecurity Enthusiast."],
    projects: ["- Project 1: Cool Cyberpunk App", "- Project 2: Security Dashboard"],
    clear: []
  };

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    if (commands[command]) {
      setHistory((prev) => [...prev, `$ ${command}`, ...commands[command]]);
    } else {
      setHistory((prev) => [...prev, `$ ${command}`, "Command not found. Type 'help'."]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-green-400 font-mono p-4 overflow-hidden flex flex-col items-center pt-24 pb-12">
      <div className="w-full max-w-3xl p-4 border border-green-500 bg-gray-900 rounded-lg shadow-lg h-96 overflow-y-auto">
        {history.map((line, index) => (
          <motion.p key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {line}
          </motion.p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex mt-2 w-full max-w-3xl">
        <span className="text-green-300">$</span>
        <input
          type="text"
          className="bg-black text-green-400 outline-none w-full ml-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}