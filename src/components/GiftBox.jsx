import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SuitcasePlayer } from "./Turntable";
import { Bouquet } from "./Bouquet";

const contentVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MESSAGES = [
  "I love you my love of my life.",
  "Thank you so much for always understanding and I am very very proud of you always.",
  "I am always here for you and I will always love you! 💕",
];

export function GiftBox({ flowers }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf5f0] p-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* ── Closed Suitcase ── */
          <motion.div
            key="closed-suitcase"
            className="flex flex-col items-center cursor-pointer select-none"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="closed-suitcase">
              <div className="closed-clasp" />
              <div className="closed-handle" />
              <p className="closed-label">🎁 Tap to Open</p>
            </div>

            <style>{`
              .closed-suitcase {
                width: min(260px, calc(100vw - 2rem));
                height: 150px;
                background: linear-gradient(180deg, #e8c4b8 0%, #d4a494 100%);
                border-radius: 16px;
                position: relative;
                box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .closed-clasp {
                position: absolute;
                top: -4px;
                left: 50%;
                transform: translateX(-50%);
                width: 40px;
                height: 10px;
                background: #c49888;
                border-radius: 4px 4px 0 0;
              }
              .closed-handle {
                position: absolute;
                top: -16px;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 14px;
                border: 3px solid #c49888;
                border-bottom: none;
                border-radius: 8px 8px 0 0;
              }
              .closed-label {
                color: rgba(255,255,255,0.85);
                font-size: 18px;
                font-family: serif;
                letter-spacing: 0.05em;
              }
            `}</style>
          </motion.div>
        ) : (
          /* ── Open Gift Experience ── */
          <motion.div
            key="open-gift"
            className="relative flex flex-col items-center"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {/* Message boxes — offset + floating */}
            <div
              className="flex flex-col gap-3 mb-4 relative mx-auto"
              style={{ width: "min(290px, calc(100vw - 2rem))" }}
            >
              {MESSAGES.map((msg, i) => {
                const floatDuration = [2.8, 3.2, 2.5];
                const floatDelay = [0, 0.5, 1.1];
                return (
                  /* Outer: entry animation */
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.45 }}
                  >
                    {/* Inner: continuous float */}
                    <motion.div
                      animate={{ y: [0, -9, 0] }}
                      transition={{
                        delay: 0.7 + floatDelay[i],
                        duration: floatDuration[i],
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        background:
                          i === 0
                            ? "rgba(255,210,215,0.82)"
                            : i === 1
                              ? "rgba(255,243,195,0.82)"
                              : "rgba(210,235,255,0.82)",
                        border: "1.5px solid rgba(220,160,140,0.35)",
                        borderRadius: "16px",
                        padding: "10px 16px",
                        color: "#8a6050",
                        fontFamily: "serif",
                        fontSize: "13px",
                        lineHeight: "1.6",
                        textAlign: "center",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                      }}
                    >
                      {msg}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Layered suitcase container ── */}
            <div
              className="relative mx-auto"
              style={{
                width: "min(260px, calc(100vw - 2rem))",
                aspectRatio: "260 / 235",
              }}
            >
              {/* z-30: Suitcase player */}
              <div className="relative z-30">
                <SuitcasePlayer isOpen={isOpen} />
              </div>
            </div>

            {/* ── Flower bouquet below the player ── */}
            <div
              className="mt-1 px-2 mx-auto"
              style={{ maxWidth: "min(320px, calc(100vw - 1rem))" }}
            >
              <Bouquet flowers={flowers} />
            </div>

            {/* Controls */}
            <div className="flex gap-3 mt-5 justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-white/90 text-[#8a6050] rounded-full text-sm font-semibold hover:bg-white transition-colors shadow"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
