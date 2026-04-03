import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Floating music notes matching the image exactly ── */
/* Blue-gray ♪ (top-right), pink ♫ (center above lid), peach squiggle (right) */
function FloatingNotes({ playing }) {
  if (!playing) return null;
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 50 }}
    >
      {/* Blue-gray ♪ — top right */}
      <motion.span
        className="absolute font-bold"
        style={{ color: "#8ea4b8", fontSize: 28, top: -30, right: -20 }}
        animate={{ y: [0, -30, -55], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      >
        ♪
      </motion.span>
      {/* Pink ♫ — center above lid */}
      <motion.span
        className="absolute font-bold"
        style={{ color: "#e8a0a0", fontSize: 22, top: 20, right: 60 }}
        animate={{ y: [0, -35, -60], opacity: [0, 1, 0] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          delay: 0.6,
          ease: "easeOut",
        }}
      >
        ♫
      </motion.span>
      {/* Peach squiggle — right side */}
      <motion.span
        className="absolute"
        style={{ color: "#e0b4a0", fontSize: 24, top: 10, right: -10 }}
        animate={{ y: [0, -25, -50], opacity: [0, 1, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeOut",
        }}
      >
        ♩
      </motion.span>
    </div>
  );
}

const spinTransition = { repeat: Infinity, duration: 4, ease: "linear" };

export function SuitcasePlayer({ isOpen, className = "" }) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpen && audioRef.current && !playing) {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const handleVolume = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  return (
    <div className={`relative ${className}`}>
      <audio ref={audioRef} src="/Always.mp3" loop preload="auto" />

      <div className="sc-scale-wrap">
        <div className="sc-wrapper">
          {/* ── LID (angled back, pink frame + blue interior) ── */}
          <div className="sc-lid">
            <div className="sc-lid-frame" />
            <div className="sc-lid-glass" />
            <div className="sc-lid-shine" />
          </div>

          {/* ── BASE BODY (pink suitcase) ── */}
          <div className="sc-base">
            {/* Gray turntable surface inset */}
            <div className="sc-surface">
              {/* Tonearm — LEFT side */}
              <div className={`sc-arm ${playing ? "sc-arm-on" : ""}`}>
                <div className="sc-arm-base" />
                <div className="sc-arm-shaft" />
                <div className="sc-arm-head" />
              </div>

              {/* Control knobs — left of tonearm */}
              <div className="sc-knobs">
                <button
                  className="sc-knob"
                  onClick={togglePlay}
                  title={playing ? "Pause" : "Play"}
                >
                  {playing ? "⏸" : "▶"}
                </button>
                <span className="sc-knob-label">
                  {playing ? "Pause" : "Play"}
                </span>
              </div>

              {/* Spinning vinyl record — RIGHT/CENTER */}
              <div className="sc-vinyl-pos">
                <motion.div
                  className="sc-vinyl"
                  animate={playing ? { rotate: 360 } : {}}
                  transition={playing ? spinTransition : { duration: 0 }}
                >
                  <div className="sc-vinyl-groove sc-vg1" />
                  <div className="sc-vinyl-groove sc-vg2" />
                  <div className="sc-vinyl-groove sc-vg3" />
                  <div className="sc-vinyl-label" />
                </motion.div>
              </div>
            </div>

            {/* Volume slider */}
            <div className="sc-vol-row">
              <span className="sc-vol-label">Vol</span>
              <input
                type="range"
                className="sc-vol"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolume}
              />
            </div>

            {/* Feet */}
            <div className="sc-foot sc-foot-l" />
            <div className="sc-foot sc-foot-r" />
          </div>
        </div>
      </div>

      <FloatingNotes playing={playing} />

      <style>{`
        /* Responsive scaling wrapper */
        .sc-scale-wrap {
          width: min(260px, calc(100vw - 2rem));
          aspect-ratio: 260 / 235;
          position: relative;
        }
        .sc-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 260px;
          height: 235px;
          transform-origin: top left;
          scale: min(1, calc((100vw - 2rem) / 260));
        }

        /* ═══════ LID ═══════ */
        .sc-lid {
          position: absolute;
          top: 0;
          left: 10px;
          width: 240px;
          height: 120px;
          transform: perspective(700px) rotateX(-12deg);
          transform-origin: bottom center;
          z-index: 1;
        }
        /* Pink outer frame of lid */
        .sc-lid-frame {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #e8c4b8 0%, #ddb5a6 100%);
          border-radius: 12px 12px 2px 2px;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.06);
        }
        /* Light blue interior glass panel */
        .sc-lid-glass {
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 5px;
          background: linear-gradient(170deg, #e4eff6 0%, #d0e2ed 40%, #c4d8e6 100%);
          border-radius: 8px 8px 2px 2px;
        }
        /* White shine/reflection on glass */
        .sc-lid-shine {
          position: absolute;
          top: 12px;
          left: 14px;
          width: 55%;
          height: 45%;
          background: linear-gradient(140deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 40%, transparent 70%);
          border-radius: 8px;
          pointer-events: none;
        }

        /* ═══════ BASE ═══════ */
        .sc-base {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 260px;
          height: 125px;
          background: linear-gradient(180deg, #eacabe 0%, #e0b8aa 30%, #d8aa9a 70%, #d0a090 100%);
          border-radius: 12px 12px 16px 16px;
          box-shadow:
            0 6px 0 0 #c89888,
            0 10px 25px rgba(0,0,0,0.1);
          z-index: 2;
        }

        /* Gray turntable surface area (inset into the pink base) */
        .sc-surface {
          position: absolute;
          top: 8px;
          left: 10px;
          right: 10px;
          height: 95px;
          background: linear-gradient(180deg, #b8c4cc 0%, #a8b8c4 100%);
          border-radius: 8px 8px 6px 6px;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.08);
          overflow: visible;
        }

        /* ═══════ VINYL RECORD (right/center on the surface) ═══════ */
        .sc-vinyl-pos {
          position: absolute;
          top: 50%;
          right: 18px;
          transform: translateY(-50%);
          width: 84px;
          height: 84px;
        }
        .sc-vinyl {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          background: radial-gradient(circle at 48% 48%,
            #f2c0b8 0%,
            #eba8a0 30%,
            #e49890 55%,
            #dc8880 80%,
            #d88078 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        .sc-vinyl-groove {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(180, 100, 90, 0.15);
          pointer-events: none;
        }
        .sc-vg1 { width: 72px; height: 72px; }
        .sc-vg2 { width: 56px; height: 56px; }
        .sc-vg3 { width: 40px; height: 40px; }
        .sc-vinyl-label {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff8f2 30%, #f0e4d8 100%);
          box-shadow: 0 0 0 2px rgba(0,0,0,0.04);
          z-index: 1;
        }

        /* ═══════ TONEARM (pivots left of vinyl, tip points at disc center) ═══════ */
        .sc-arm {
          position: absolute;
          top: 0px;
          left: 105px;
          transform-origin: 11px 11px;
          transform: rotate(35deg);
          transition: transform 0.8s ease;
          z-index: 5;
        }
        .sc-arm.sc-arm-on {
          transform: rotate(-38deg);
        }
        /* Chunky dark gray pivot/base block */
        .sc-arm-base {
          width: 22px;
          height: 22px;
          background: linear-gradient(160deg, #6a6a6a, #4a4a4a);
          border-radius: 4px;
          position: absolute;
          top: 0;
          left: 0;
        }
        /* Arm shaft */
        .sc-arm-shaft {
          width: 4px;
          height: 50px;
          background: linear-gradient(180deg, #8a8a8a, #5a5a5a);
          position: absolute;
          top: 20px;
          left: 9px;
          border-radius: 2px;
        }
        /* Cartridge / head at end */
        .sc-arm-head {
          width: 10px;
          height: 8px;
          background: #3a3a3a;
          position: absolute;
          top: 68px;
          left: 5px;
          border-radius: 1px 1px 3px 3px;
        }

        /* ═══════ CONTROLS (left bottom) ═══════ */
        .sc-knobs {
          position: absolute;
          bottom: 4px;
          left: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 5;
        }
        .sc-knob {
          width: 24px;
          height: 20px;
          background: linear-gradient(180deg, #c8a888, #b89878);
          border-radius: 4px;
          border: 1px solid #b08868;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6a5040;
          padding: 0;
        }
        .sc-knob:hover { background: #d4b898; }
        .sc-knob-label {
          font-size: 9px;
          color: #7a8a94;
          letter-spacing: 0.03em;
          user-select: none;
        }

        /* ═══════ VOLUME ═══════ */
        .sc-vol-row {
          position: absolute;
          bottom: 3px;
          right: 12px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .sc-vol-label {
          font-size: 9px;
          color: #7a8a94;
          letter-spacing: 0.03em;
          user-select: none;
        }
        .sc-vol {
          -webkit-appearance: none;
          appearance: none;
          width: 50px;
          height: 4px;
          background: #c49888;
          border-radius: 2px;
          outline: none;
        }
        .sc-vol::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #c49888;
          cursor: pointer;
        }

        /* ═══════ FEET (white rounded bumps) ═══════ */
        .sc-foot {
          position: absolute;
          bottom: -8px;
          width: 20px;
          height: 12px;
          background: linear-gradient(180deg, #e8e0dc, #d8d0cc);
          border-radius: 0 0 8px 8px;
          z-index: 1;
        }
        .sc-foot-l { left: 20px; }
        .sc-foot-r { right: 20px; }
      `}</style>
    </div>
  );
}
