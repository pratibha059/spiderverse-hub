"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CharacterImageProps {
  characterId: string; // e.g. 'spiderman', 'spider-gwen', 'miles-morales', 'venom', 'doctor-octopus', 'city-bg'
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function CharacterImage({
  characterId,
  alt,
  width,
  height,
  fill = false,
  className,
  style
}: CharacterImageProps) {
  const [hasError, setHasError] = useState(false);

  // Normalize ID for matching
  const cid = characterId.toLowerCase().replace(/[^a-z0-9-]/g, "");

  // Render SVG fallback panels based on character ID
  const renderFallbackSvg = () => {
    const strokeColor = "#000000";
    const strokeWidth = "3.5";

    // 1. PETER PARKER
    if (cid === "spiderman" || cid === "peter-parker") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="var(--spidey-blue)" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <ellipse cx="50" cy="50" rx="32" ry="40" fill="var(--spidey-red)" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Web patterns */}
          <path d="M50 10 L50 90 M18 50 L82 50 M26 22 L74 78 M26 78 L74 22" stroke={strokeColor} strokeWidth="2" />
          <path d="M50 30 C38 35, 38 65, 50 70 C62 65, 62 35, 50 30 Z" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          {/* Eyes */}
          <path d="M24 48 C26 38, 44 40, 46 50 C46 54, 32 60, 24 48 Z" fill="#ffffff" stroke={strokeColor} strokeWidth="4" />
          <path d="M76 48 C74 38, 56 40, 54 50 C54 54, 68 60, 76 48 Z" fill="#ffffff" stroke={strokeColor} strokeWidth="4" />
        </svg>
      );
    }

    // 2. GWEN STACY
    if (cid === "spider-gwen" || cid === "gwen-stacy" || cid === "ghost-spider") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="var(--gwen-black)" />
          <path d="M15 80 C15 30, 85 30, 85 80 Z" fill="#ffffff" stroke={strokeColor} strokeWidth={strokeWidth} />
          <path d="M22 75 C22 40, 78 40, 78 75 Z" fill="var(--gwen-pink)" />
          <path d="M30 75 C30 45, 70 45, 70 75 Z" fill="var(--gwen-black)" stroke={strokeColor} strokeWidth="2" />
          <ellipse cx="50" cy="68" rx="18" ry="24" fill="#ffffff" stroke={strokeColor} strokeWidth={strokeWidth} />
          <path d="M35 62 Q41 58 42 66 Z" fill="var(--gwen-pink)" stroke="var(--gwen-teal)" strokeWidth="2" />
          <path d="M65 62 Q59 58 58 66 Z" fill="var(--gwen-pink)" stroke="var(--gwen-teal)" strokeWidth="2" />
        </svg>
      );
    }

    // 3. MILES MORALES
    if (cid === "miles-morales" || cid === "miles") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="var(--spidey-red)" />
          <ellipse cx="50" cy="50" rx="32" ry="40" fill="var(--gwen-black)" stroke="var(--spidey-red)" strokeWidth="4.5" />
          <path d="M50 10 L50 90 M18 50 L82 50 M26 22 L74 78 M26 78 L74 22" stroke="var(--spidey-red)" strokeWidth="2" />
          <path d="M24 48 C26 38, 44 40, 46 50 C46 54, 32 60, 24 48 Z" fill="#ffffff" stroke="#000" strokeWidth="4.5" />
          <path d="M76 48 C74 38, 56 40, 54 50 C54 54, 68 60, 76 48 Z" fill="#ffffff" stroke="#000" strokeWidth="4.5" />
        </svg>
      );
    }

    // 4. MIGUEL O'HARA
    if (cid === "miguel-ohara" || cid === "miguel" || cid === "spider-man-2099") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="#06122c" />
          <ellipse cx="50" cy="50" rx="32" ry="40" fill="#0c1a3b" stroke="#000" strokeWidth={strokeWidth} />
          {/* Red skull pattern visor */}
          <path d="M50 10 L50 90 M20 50 L80 50" stroke="#f43f5e" strokeWidth="3.5" />
          <path d="M22 55 L38 35 L48 55 L35 65 Z" fill="#f43f5e" stroke="#000" strokeWidth="2" />
          <path d="M78 55 L62 35 L52 55 L65 65 Z" fill="#f43f5e" stroke="#000" strokeWidth="2" />
        </svg>
      );
    }

    // 5. SPIDER-HAM
    if (cid === "spider-ham" || cid === "ham") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="var(--spidey-blue)" />
          <circle cx="50" cy="46" r="32" fill="var(--spidey-red)" stroke={strokeColor} strokeWidth={strokeWidth} />
          <ellipse cx="50" cy="62" rx="18" ry="12" fill="#fda4af" stroke={strokeColor} strokeWidth="3" />
          <circle cx="43" cy="62" r="3.5" fill="#000" />
          <circle cx="57" cy="62" r="3.5" fill="#000" />
          <path d="M28 42 C30 32, 42 32, 44 42 Z" fill="#fff" stroke={strokeColor} strokeWidth="3" />
          <path d="M72 42 C70 32, 58 32, 56 42 Z" fill="#fff" stroke={strokeColor} strokeWidth="3" />
        </svg>
      );
    }

    // 6. PENI PARKER
    if (cid === "peni-parker" || cid === "peni") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="#18181b" />
          <rect x="18" y="24" width="64" height="52" rx="10" fill="#3f3f46" stroke={strokeColor} strokeWidth={strokeWidth} />
          <circle cx="36" cy="50" r="14" fill="#ef4444" stroke={strokeColor} strokeWidth="2" />
          <circle cx="64" cy="50" r="14" fill="#ef4444" stroke={strokeColor} strokeWidth="2" />
          <circle cx="36" cy="50" r="6" fill="#fff" />
          <circle cx="64" cy="50" r="6" fill="#fff" />
        </svg>
      );
    }

    // 7. VENOM
    if (cid === "venom") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="#0a0a0f" />
          <circle cx="50" cy="50" r="45" fill="#181825" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Eyes */}
          <path d="M15 35 C15 15, 45 30, 48 45 C42 42, 25 50, 15 35 Z" fill="#ffffff" stroke={strokeColor} strokeWidth="2.5" />
          <path d="M85 35 C85 15, 55 30, 52 45 C58 42, 75 50, 85 35 Z" fill="#ffffff" stroke={strokeColor} strokeWidth="2.5" />
          {/* Fangs */}
          <path d="M25 65 L30 58 L35 65 L40 55 L45 65 L50 55 L55 65 L60 55 L65 65 L70 58 L75 65" stroke={strokeColor} strokeWidth="3" fill="none" />
          <path d="M22 68 C35 85, 65 85, 78 68" stroke={strokeColor} strokeWidth="3.5" fill="none" />
        </svg>
      );
    }

    // 8. CARNAGE
    if (cid === "carnage") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="var(--spidey-red)" />
          <circle cx="50" cy="50" r="45" fill="#991b1b" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Black veins background */}
          <path d="M15 15 Q30 50 15 85 M85 15 Q70 50 85 85" stroke="#000" strokeWidth="3" fill="none" />
          {/* White sharp eyes */}
          <path d="M20 40 Q40 30 45 50 Q30 55 20 40 Z" fill="#fff" stroke="#000" strokeWidth="3.5" />
          <path d="M80 40 Q60 30 55 50 Q70 55 80 40 Z" fill="#fff" stroke="#000" strokeWidth="3.5" />
        </svg>
      );
    }

    // 9. DOCTOR OCTOPUS
    if (cid === "doctor-octopus" || cid === "doc-ock" || cid === "docock") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="#064e3b" />
          {/* Round green goggles */}
          <circle cx="34" cy="50" r="14" fill="#a3e635" stroke={strokeColor} strokeWidth={strokeWidth} />
          <circle cx="66" cy="50" r="14" fill="#a3e635" stroke={strokeColor} strokeWidth={strokeWidth} />
          <line x1="48" y1="50" x2="52" y2="50" stroke={strokeColor} strokeWidth="4" />
          {/* Mechanical arms */}
          <path d="M10 10 Q30 30 34 36" stroke="#94a3b8" strokeWidth="6" fill="none" />
          <path d="M90 10 Q70 30 66 36" stroke="#94a3b8" strokeWidth="6" fill="none" />
          <path d="M10 90 Q30 70 34 64" stroke="#94a3b8" strokeWidth="6" fill="none" />
          <path d="M90 90 Q70 70 66 64" stroke="#94a3b8" strokeWidth="6" fill="none" />
        </svg>
      );
    }

    // 10. GREEN GOBLIN
    if (cid === "green-goblin" || cid === "goblin") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="#1e1b4b" />
          {/* Green face, purple hood details */}
          <path d="M15 50 L10 30 L30 45 L50 20 L70 45 L90 30 L85 50 Z" fill="#9333ea" stroke={strokeColor} strokeWidth="3" />
          <circle cx="50" cy="60" r="28" fill="#22c55e" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Yellow glowing eyes */}
          <ellipse cx="38" cy="56" rx="6" ry="4" fill="var(--spidey-yellow)" stroke="#000" strokeWidth="2" />
          <ellipse cx="62" cy="56" rx="6" ry="4" fill="var(--spidey-yellow)" stroke="#000" strokeWidth="2" />
          {/* Evil smirk */}
          <path d="M38 72 Q50 82 62 72" stroke="#000" strokeWidth="3.5" fill="none" />
        </svg>
      );
    }

    // 11. KINGPIN
    if (cid === "kingpin") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="#1e1e2f" />
          {/* Big heavy body silhouette */}
          <path d="M10 100 C10 60, 90 60, 90 100 Z" fill="#ffffff" stroke={strokeColor} strokeWidth={strokeWidth} />
          <polygon points="50,75 40,60 60,60" fill="var(--spidey-blue)" stroke={strokeColor} strokeWidth="2" />
          {/* Head */}
          <circle cx="50" cy="40" r="14" fill="#fda4af" stroke={strokeColor} strokeWidth={strokeWidth} />
          {/* Walking stick details */}
          <line x1="78" y1="70" x2="78" y2="100" stroke="#b45309" strokeWidth="5" />
          <circle cx="78" cy="65" r="7" fill="#fbbf24" stroke="#000" strokeWidth="2" />
        </svg>
      );
    }

    // 12. THE SPOT
    if (cid === "the-spot" || cid === "spot") {
      return (
        <svg viewBox="0 0 100 100" className={className} style={style}>
          <rect width="100%" height="100%" fill="#f8fafc" stroke="#000" strokeWidth="4" />
          {/* Black spots on body */}
          <circle cx="50" cy="50" r="14" fill="#000" />
          <circle cx="24" cy="30" r="8" fill="#000" />
          <circle cx="78" cy="28" r="9" fill="#000" />
          <circle cx="30" cy="74" r="10" fill="#000" />
          <circle cx="70" cy="76" r="6" fill="#000" />
          <ellipse cx="50" cy="18" rx="8" ry="4" fill="#000" />
          <circle cx="15" cy="55" r="7" fill="#000" />
          <circle cx="85" cy="52" r="5" fill="#000" />
        </svg>
      );
    }

    // 13. CITY BACKGROUND GOTHIC SKYLINE
    if (cid.includes("bg") || cid.includes("city") || cid.includes("portal") || cid.includes("multiverse")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" className={className} style={style}>
          <defs>
            <linearGradient id="portalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e0b36" />
              <stop offset="50%" stopColor="#4a0e4e" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <pattern id="halftones-bg" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1.5" fill="#ffffff" opacity="0.04" />
            </pattern>
          </defs>
          <rect width="400" height="250" fill="url(#portalGrad)" />
          <rect width="400" height="250" fill="url(#halftones-bg)" />
          
          {/* Web patterns spanning the background */}
          <path d="M0 0 Q100 80 200 125 T400 250 M400 0 Q300 80 200 125 T0 250" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" fill="none" />
          
          {/* Dynamic target rings */}
          <circle cx="200" cy="125" r="80" fill="none" stroke="var(--gwen-pink)" strokeWidth="1.5" opacity="0.3" strokeDasharray="5 5" />
          <circle cx="200" cy="125" r="50" fill="none" stroke="var(--gwen-teal)" strokeWidth="2" opacity="0.4" />
          <circle cx="200" cy="125" r="10" fill="var(--spidey-yellow)" opacity="0.5" />
        </svg>
      );
    }

    // Default Unknown fallback
    return (
      <svg viewBox="0 0 100 100" className={className} style={style}>
        <rect width="100%" height="100%" fill="#1f2937" />
        <text x="50" y="55" fontFamily="var(--font-title)" fontSize="32" fill="#fff" textAnchor="middle">?</text>
      </svg>
    );
  };

  if (hasError) {
    return renderFallbackSvg();
  }

  // Next.js standard loader
  const imageSrc = `/images/${characterId}${characterId.includes("bg") ? ".jpg" : ".png"}`;

  return (
    <div style={{ position: fill ? "absolute" : "relative", width: fill ? "100%" : width, height: fill ? "100%" : height, overflow: "hidden" }} className={className}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        onError={() => setHasError(true)}
        className={className}
        style={style}
        unoptimized // Allow offline caching fallback
      />
    </div>
  );
}
