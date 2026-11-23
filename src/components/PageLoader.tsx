"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FIRM_INFO } from "@/data/lawFirmData";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-950 text-stone-50"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.35em] text-stone-400"
          >
            Hukuk & Danışmanlık
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 font-serif text-3xl sm:text-5xl font-medium tracking-wide"
          >
            {FIRM_INFO.name}
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
