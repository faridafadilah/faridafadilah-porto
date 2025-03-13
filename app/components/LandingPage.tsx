"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [showText, setShowText] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowText(true);
      setTimeout(() => {
        setIsLocked(false);
        document.body.style.overflow = "auto";
      }, 1500);
    }, 3000);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-black px-6 md:px-64 sticky top-0 
        ${isLocked ? "pointer-events-none" : "pointer-events-auto"}`}
      style={{
        backgroundImage: "url('/bg-main.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.p
        initial={{
          opacity: 1,
          scale: 1.5,
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={
          showText
            ? {
                top: "1rem",
                left: "1rem",
                translateX: "0",
                translateY: "0",
                scale: 1,
                opacity: 0.7,
              }
            : {}
        }
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute text-white font-light text-sm md:text-base"
      >
        Farida Fadilah
      </motion.p>

      {showText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white"
        >
          <h1 className="text-lg md:text-4xl font-light leading-tight">
            no <span className="italic font-semibold">hug</span> no{" "}
            <span className="italic font-semibold">kiss</span>, only{" "}
            <span className="italic font-semibold">bug</span> and{" "}
            <span className="italic font-semibold">fix</span>
          </h1>
          <p className="text-xs md:text-base italic mt-2 text-right">
            <span className="font-light">17<sup>th</sup></span> Kickstarted,{" "}
            <span className="font-bold">20<sup>th</sup> My Age</span>
          </p>
        </motion.div>
      )}
    </div>
  );
}
