import { useEffect, useState } from "react";

function initials(label = "Virtus Dental Center") {
  const parts = label.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "V";
  return parts.slice(0, 2).map((part) => part[0].toUpperCase()).join("");
}

export default function MediaImage({ src, fallbackSrc, alt = "", className = "", fallbackLabel = "Virtus Dental Center", ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc || "");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc || "");
    setFailed(false);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }
    setFailed(true);
  };

  if (failed || !currentSrc) {
    return (
      <div className={`media-fallback ${className}`} role="img" aria-label={alt || fallbackLabel}>
        <span className="media-fallback-mark">{initials(fallbackLabel)}</span>
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return <img src={currentSrc} alt={alt} className={className} onError={handleError} decoding="async" referrerPolicy="no-referrer" {...props} />;
}
