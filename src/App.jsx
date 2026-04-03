import { useMemo } from "react";
import { GiftBox } from "./components/GiftBox";

function decodeGiftFromURL() {
  try {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("gift");
    if (!encoded) return null;

    const decoded = JSON.parse(atob(decodeURIComponent(encoded)));

    // Validate structure
    if (decoded.flowers && !Array.isArray(decoded.flowers)) return null;
    if (decoded.message && typeof decoded.message !== "string") return null;
    if (typeof decoded.message === "string" && decoded.message.length > 200) {
      decoded.message = decoded.message.slice(0, 200);
    }

    return decoded;
  } catch {
    return null;
  }
}

export default function App() {
  const gift = useMemo(() => decodeGiftFromURL(), []);

  return <GiftBox flowers={gift?.flowers} message={gift?.message} />;
}
