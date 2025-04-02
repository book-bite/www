import { motion } from "framer-motion";
const Ud = () => {
  const text = Array(100).fill("under development")
  return (
    <div className="h-8 md:h-11 border-b border-black overflow-hidden py-2 whitespace-nowrap relative">
  <motion.div
    className="flex space-x-8 text-sm md:text-lg font-bold"
    animate={{ x: ["0%", "-500%"] }}
    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
  >
    {text.map((text, index) => (
      <span 
        key={index} 
        className={`whitespace-nowrap ${index % 2 === 0 ? "font-bold" : "font-normal"}`}
      >
        {text}
      </span>
    ))}
  </motion.div>
</div>

  )
}

export default Ud