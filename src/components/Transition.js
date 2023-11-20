import React from "react";
import { motion } from "framer-motion";

const Transition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 70 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 70 }}
    transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default Transition;