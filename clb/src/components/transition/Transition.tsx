import { motion } from "framer-motion";
import React from "react";
import styles from "./Transition.module.css";

interface TransitionProps {
  OgPage: React.ComponentType<any>;
}

export const Transition: React.FC<TransitionProps> = ({ OgPage }) => {
  return (
    <>
      <OgPage />
      <motion.div
        className={styles.slideIn}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      />
      <motion.div
        className={styles.slideOut}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      />
    </>
  );
};
