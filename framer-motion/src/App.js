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
          rotate: [0, 180, 180, -360],
          x: [0, 0, 200, 0],
          y: [100, 100, -200, 0],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
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
