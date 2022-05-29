import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [move, setMove] = useState(false);
  return (
    <div className="container">
      <motion.div
        drag
        dragConstraints={{ left: 100 }}
        whileDrag={{ scale: 1.5, backgroundColor: "lime" }}
        animate={{
          rotate: [0, 180, 0, 0],
          x: [0, 100, 100, 0],
          // y: [100, 100, 0, -200],
          scale: [1, 1.3, 1.3, 1],
          borderRadius: [300, 0, 0, 300],
        }}
        transition={{ repeat: Infinity, duration: 10, type: "tween" }}
        whileTap={{ scale: 0.4 }}
        whileHover={{ scale: 1.5, borderRadius: 0, backgroundColor: "crimson" }}
        onClick={() => {
          setMove(!move);
        }}
        className="box"
      >
        <h1>{!move ? "Box 1" : "Box 1 Hovered"}</h1>
      </motion.div>
    </div>
  );
}

export default App;
