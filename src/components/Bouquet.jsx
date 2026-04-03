import { motion } from "framer-motion";

/* ── SVG flower components matching the pastel illustration style ── */

function PinkTulip({ size = 48 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 48 67" fill="none">
      <line
        x1="24"
        y1="30"
        x2="24"
        y2="60"
        stroke="#6b8c42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="17"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(-30 17 48)"
      />
      <ellipse
        cx="31"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(30 31 48)"
      />
      <path
        d="M24 8 C16 8, 10 16, 12 24 C13 28, 18 30, 24 30 C30 30, 35 28, 36 24 C38 16, 32 8, 24 8Z"
        fill="#f4b4c4"
      />
      <path
        d="M24 6 C20 6, 16 12, 18 22 C19 26, 22 28, 24 28 C26 28, 29 26, 30 22 C32 12, 28 6, 24 6Z"
        fill="#f8c8d4"
      />
    </svg>
  );
}

function YellowTulip({ size = 48 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 48 67" fill="none">
      <line
        x1="24"
        y1="30"
        x2="24"
        y2="60"
        stroke="#6b8c42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="17"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(-25 17 48)"
      />
      <ellipse
        cx="31"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(25 31 48)"
      />
      <path
        d="M24 8 C16 8, 10 16, 12 24 C13 28, 18 30, 24 30 C30 30, 35 28, 36 24 C38 16, 32 8, 24 8Z"
        fill="#f0c850"
      />
      <path
        d="M24 6 C20 6, 16 12, 18 22 C19 26, 22 28, 24 28 C26 28, 29 26, 30 22 C32 12, 28 6, 24 6Z"
        fill="#f8d86c"
      />
    </svg>
  );
}

function PurpleTulip({ size = 48 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 48 67" fill="none">
      <line
        x1="24"
        y1="30"
        x2="24"
        y2="60"
        stroke="#6b8c42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="17"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(-30 17 48)"
      />
      <ellipse
        cx="31"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(30 31 48)"
      />
      <path
        d="M24 8 C16 8, 10 16, 12 24 C13 28, 18 30, 24 30 C30 30, 35 28, 36 24 C38 16, 32 8, 24 8Z"
        fill="#c4a0d8"
      />
      <path
        d="M24 6 C20 6, 16 12, 18 22 C19 26, 22 28, 24 28 C26 28, 29 26, 30 22 C32 12, 28 6, 24 6Z"
        fill="#d4b4e4"
      />
      <circle cx="20" cy="16" r="1.2" fill="#a080b8" />
      <circle cx="24" cy="14" r="1.2" fill="#a080b8" />
      <circle cx="28" cy="16" r="1.2" fill="#a080b8" />
      <circle cx="22" cy="20" r="1.2" fill="#a080b8" />
      <circle cx="26" cy="20" r="1.2" fill="#a080b8" />
    </svg>
  );
}

function BlueDaisy({ size = 48 }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 48 67" fill="none">
      <line
        x1="24"
        y1="28"
        x2="24"
        y2="60"
        stroke="#6b8c42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="18"
        cy="42"
        rx="6"
        ry="3"
        fill="#7a9a48"
        transform="rotate(-20 18 42)"
      />
      <ellipse
        cx="30"
        cy="46"
        rx="6"
        ry="3"
        fill="#7a9a48"
        transform="rotate(20 30 46)"
      />
      {petals.map((a) => (
        <ellipse
          key={a}
          cx="24"
          cy="10"
          rx="4"
          ry="9"
          fill="#c8e8e8"
          transform={`rotate(${a} 24 18)`}
        />
      ))}
      <circle cx="24" cy="18" r="5" fill="#f0e8a0" />
    </svg>
  );
}

function HeartFlower({ size = 48 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 48 67" fill="none">
      <line
        x1="24"
        y1="34"
        x2="24"
        y2="60"
        stroke="#6b8c42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="17"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(-30 17 48)"
      />
      <ellipse
        cx="31"
        cy="48"
        rx="8"
        ry="4"
        fill="#7a9a48"
        transform="rotate(30 31 48)"
      />
      <path
        d="M24 32 C24 32, 12 24, 12 16 C12 10, 17 6, 24 12 C31 6, 36 10, 36 16 C36 24, 24 32, 24 32Z"
        fill="#f0908c"
      />
      <path
        d="M24 28 C24 28, 16 22, 16 17 C16 13, 19 10, 24 14 C29 10, 32 13, 32 17 C32 22, 24 28, 24 28Z"
        fill="#f4a8a4"
        opacity="0.5"
      />
    </svg>
  );
}

function OrangeDaisy({ size = 48 }) {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 48 67" fill="none">
      <line
        x1="24"
        y1="28"
        x2="24"
        y2="60"
        stroke="#6b8c42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="18"
        cy="44"
        rx="6"
        ry="3"
        fill="#7a9a48"
        transform="rotate(-25 18 44)"
      />
      <ellipse
        cx="30"
        cy="44"
        rx="6"
        ry="3"
        fill="#7a9a48"
        transform="rotate(25 30 44)"
      />
      {petals.map((a) => (
        <ellipse
          key={a}
          cx="24"
          cy="10"
          rx="5"
          ry="8"
          fill="#f8c858"
          transform={`rotate(${a} 24 18)`}
        />
      ))}
      <circle cx="24" cy="18" r="5.5" fill="#f09050" />
    </svg>
  );
}

const FLOWER_MAP = {
  pinkTulip: PinkTulip,
  yellowTulip: YellowTulip,
  purpleTulip: PurpleTulip,
  blueDaisy: BlueDaisy,
  heartFlower: HeartFlower,
  orangeDaisy: OrangeDaisy,
};

const flowerTypes = Object.keys(FLOWER_MAP);

const defaultFlowers = [
  { id: 1, type: "pinkTulip", size: 90 },
  { id: 2, type: "yellowTulip", size: 90 },
  { id: 3, type: "purpleTulip", size: 90 },
  { id: 4, type: "blueDaisy", size: 90 },
  { id: 5, type: "heartFlower", size: 90 },
  { id: 6, type: "orangeDaisy", size: 90 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const flowerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

/* Hover + touch interactive wrapper */
function InteractiveFlower({ type, size }) {
  const FlowerComp = FLOWER_MAP[type] || PinkTulip;
  return (
    <motion.div
      className="cursor-pointer select-none"
      variants={flowerVariants}
      whileHover={{ scale: 1.2, y: -10 }}
      whileTap={{ scale: 1.2, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 14 }}
    >
      <FlowerComp size={size} />
    </motion.div>
  );
}

export function Bouquet({ flowers, className = "" }) {
  const items =
    flowers && flowers.length > 0
      ? flowers.map((f, i) => ({
          id: f.id || i + 1,
          type: f.type || flowerTypes[i % flowerTypes.length],
          size: f.size || 90,
        }))
      : defaultFlowers;

  const count = items.length;
  const spreadDeg = 72; /* wider than the cone so blooms overflow it */

  return (
    <motion.div
      className={`relative overflow-visible ${className}`}
      style={{
        width: "min(320px, calc(100vw - 1rem))",
        height: 270,
        margin: "0 auto",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Fanned flower stems — behind the wrapping paper */}
      {items.map(({ id, type, size }, i) => {
        const angle = -spreadDeg / 2 + (spreadDeg / (count - 1)) * i;
        return (
          <div
            key={id}
            style={{
              position: "absolute",
              bottom: 78,
              left: "50%",
              transformOrigin: "bottom center",
              transform: `translateX(-50%) rotate(${angle}deg)`,
              zIndex: 2,
            }}
          >
            <InteractiveFlower type={type} size={size} />
          </div>
        );
      })}

      {/* Wrapping paper — small trapezoid, clearly smaller than the flowers */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 140,
          height: 85,
          background:
            "linear-gradient(160deg, #f8e4d0 0%, #f0d0b8 50%, #e8c0a4 100%)",
          clipPath: "polygon(8% 0%, 92% 0%, 58% 100%, 42% 100%)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          zIndex: 10,
        }}
      />
      {/* Paper rim */}
      <div
        style={{
          position: "absolute",
          bottom: 78,
          left: "50%",
          transform: "translateX(-50%)",
          width: 128,
          height: 14,
          background: "linear-gradient(90deg, #f0d0b8, #fce8d8, #f0d0b8)",
          borderRadius: "5px 5px 0 0",
          zIndex: 11,
        }}
      />
      {/* Ribbon bow */}
      <div
        style={{
          position: "absolute",
          bottom: 73,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 20,
          lineHeight: 1,
          zIndex: 12,
        }}
      >
        🎀
      </div>
    </motion.div>
  );
}
