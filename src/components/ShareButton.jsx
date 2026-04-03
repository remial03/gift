import { useState } from "react";

export function ShareButton({ flowers, message }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const payload = { flowers, message };
    const encoded = btoa(JSON.stringify(payload));
    const url = `${window.location.origin}${window.location.pathname}?gift=${encodeURIComponent(encoded)}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      prompt("Copy this link:", url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors shadow"
    >
      {copied ? "✓ Copied!" : "🔗 Share Gift"}
    </button>
  );
}
