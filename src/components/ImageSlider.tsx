"use client";

import React, { useState } from "react";
import styles from "./ImageSlider.module.css";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className={styles.sliderContainer} />;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  // Helper to render customized SVG illustrations based on image source path strings
  const renderSvgIllustration = (src: string) => {
    // 1. Comic History illustrations
    if (src.includes("tech_blog_1")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ background: "#111" }}>
          <defs>
            <pattern id="halftone-red" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2.5" fill="var(--spidey-red)" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="400" height="250" fill="#1b1c2e" />
          <rect width="400" height="250" fill="url(#halftone-red)" />
          <path d="M0 0 L400 250 M400 0 L0 250" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          
          {/* Comic panels background */}
          <line x1="200" y1="0" x2="200" y2="250" stroke="#000" strokeWidth="6" />
          
          {/* Classic Spider Emblem */}
          <circle cx="200" cy="125" r="45" fill="#000" />
          <ellipse cx="200" cy="125" rx="15" ry="25" fill="var(--spidey-red)" stroke="#000" strokeWidth="3" />
          <circle cx="200" cy="105" r="10" fill="var(--spidey-red)" stroke="#000" strokeWidth="2.5" />
          {/* Spider Legs */}
          <path d="M190 110 Q160 90 150 120 M190 120 Q150 110 140 140 M190 130 Q150 130 145 160 M190 140 Q160 160 160 180" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M210 110 Q240 90 250 120 M210 120 Q250 110 260 140 M210 130 Q250 130 255 160 M210 140 Q240 160 240 180" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          
          <rect x="25" y="20" width="130" height="35" fill="var(--spidey-yellow)" stroke="#000" strokeWidth="3" transform="rotate(-3deg)" />
          <text x="35" y="44" fontFamily="var(--font-title)" fontSize="18" fill="#000" transform="rotate(-3deg)">AMAZING 1962</text>
        </svg>
      );
    }
    if (src.includes("tech_blog_2")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="var(--spidey-blue)" />
          <circle cx="200" cy="125" r="120" fill="var(--spidey-red)" stroke="#000" strokeWidth="5" />
          {/* Web patterns on circle */}
          <path d="M200 5 L200 245 M80 125 L320 125 M115 40 L285 210 M115 210 L285 40" stroke="#000" strokeWidth="2" />
          <path d="M200 45 C150 65, 150 185, 200 205 C250 185, 250 65, 200 45 Z" fill="none" stroke="#000" strokeWidth="2.5" />
          <path d="M200 85 C175 95, 175 155, 200 165 C225 155, 225 95, 200 85 Z" fill="none" stroke="#000" strokeWidth="2" />
          
          {/* White reflective eyes */}
          <path d="M140 125 C145 105, 185 105, 190 125 C190 135, 160 155, 140 125 Z" fill="#ffffff" stroke="#000000" strokeWidth="5" strokeLinejoin="round" />
          <path d="M260 125 C255 105, 215 105, 210 125 C210 135, 240 155, 260 125 Z" fill="#ffffff" stroke="#000000" strokeWidth="5" strokeLinejoin="round" />
          
          <rect x="250" y="195" width="125" height="35" fill="#ffffff" stroke="#000" strokeWidth="3.5" transform="rotate(2deg)" />
          <text x="260" y="218" fontFamily="var(--font-title)" fontSize="18" fill="#000" transform="rotate(2deg)">SPIDEY MASK</text>
        </svg>
      );
    }

    // 2. Brooklyn Locations illustrations
    if (src.includes("travel_blog_1")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="linear-gradient(to bottom, #1e0b2b, #4a154b)" />
          {/* Sunset sky gradient */}
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e0b36" />
              <stop offset="60%" stopColor="#8c1d40" />
              <stop offset="100%" stopColor="#f35520" />
            </linearGradient>
          </defs>
          <rect width="400" height="250" fill="url(#skyGrad)" />
          
          {/* Brooklyn Bridge silhouette */}
          <path d="M0 250 L100 130 L115 130 L115 250 M115 220 L300 220 L300 250 M300 130 L315 130 L400 250" stroke="#05050a" strokeWidth="6" fill="#05050a" />
          <path d="M100 130 Q200 160 300 130" stroke="#05050a" strokeWidth="4" fill="none" />
          <path d="M100 150 Q200 180 300 150" stroke="#05050a" strokeWidth="2" fill="none" />
          {/* Cables vertical */}
          <line x1="150" y1="145" x2="150" y2="220" stroke="#05050a" strokeWidth="1" />
          <line x1="200" y1="150" x2="200" y2="220" stroke="#05050a" strokeWidth="1" />
          <line x1="250" y1="145" x2="250" y2="220" stroke="#05050a" strokeWidth="1" />
          
          {/* Swinging silhouette */}
          <circle cx="270" cy="80" r="6" fill="#000" />
          <path d="M270 80 Q250 110 230 115" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Web line */}
          <line x1="270" y1="80" x2="350" y2="10" stroke="#ffffff" strokeWidth="1.5" />
          
          <rect x="20" y="20" width="135" height="35" fill="var(--spidey-red)" stroke="#000" strokeWidth="3" transform="rotate(-4deg)" />
          <text x="30" y="43" fontFamily="var(--font-title)" fontSize="18" fill="#fff" transform="rotate(-4deg)">BROOKLYN ART</text>
        </svg>
      );
    }
    if (src.includes("travel_blog_2")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Brick background */}
          <rect width="400" height="250" fill="#2b1111" />
          <defs>
            <pattern id="bricks" width="40" height="20" patternUnits="userSpaceOnUse">
              <rect width="38" height="18" fill="#401e1e" />
              <line x1="0" y1="0" x2="40" y2="0" stroke="#1c0b0b" strokeWidth="2" />
              <line x1="0" y1="0" x2="0" y2="20" stroke="#1c0b0b" strokeWidth="2" />
              <line x1="20" y1="10" x2="20" y2="20" stroke="#1c0b0b" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="400" height="250" fill="url(#bricks)" />
          
          {/* Miles Morales spray-painted spider logo */}
          <path d="M200 60 Q170 80 170 120 Q170 170 200 190 Q230 170 230 120 Q230 80 200 60 Z" fill="var(--spidey-red)" opacity="0.8" />
          <circle cx="200" cy="90" r="15" fill="var(--spidey-red)" opacity="0.8" />
          {/* Spray drips */}
          <path d="M190 180 L190 220 M200 190 L200 230 M210 185 L210 215" stroke="var(--spidey-red)" strokeWidth="3" strokeLinecap="round" />
          {/* Spray mist background */}
          <circle cx="200" cy="120" r="60" fill="none" stroke="var(--spidey-red)" strokeWidth="10" opacity="0.25" strokeDasharray="5 8" />
          
          <rect x="250" y="25" width="125" height="35" fill="var(--spidey-yellow)" stroke="#000" strokeWidth="3" transform="rotate(5deg)" />
          <text x="260" y="48" fontFamily="var(--font-title)" fontSize="18" fill="#000" transform="rotate(5deg)">MILES GRAFFITI</text>
        </svg>
      );
    }

    // 3. Spider-Gwen Design illustrations
    if (src.includes("workspace_blog_1")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="var(--gwen-black)" />
          {/* Neon Pink/Teal visual soundwaves */}
          <path d="M10 125 C80 50, 120 200, 200 125 C280 50, 320 200, 390 125" stroke="var(--gwen-pink)" strokeWidth="5" fill="none" />
          <path d="M10 125 C80 90, 120 160, 200 125 C280 90, 320 160, 390 125" stroke="var(--gwen-teal)" strokeWidth="3" fill="none" />
          
          {/* Drumset silhouette */}
          <ellipse cx="140" cy="150" rx="30" ry="25" fill="#1e1b24" stroke="var(--gwen-pink)" strokeWidth="3.5" />
          <ellipse cx="200" cy="140" rx="20" ry="15" fill="#1e1b24" stroke="var(--gwen-teal)" strokeWidth="3" />
          <ellipse cx="250" cy="160" rx="25" ry="20" fill="#1e1b24" stroke="var(--gwen-pink)" strokeWidth="3" />
          {/* Drumsticks crossed */}
          <line x1="160" y1="100" x2="240" y2="160" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="240" y1="100" x2="160" y2="160" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          
          <rect x="25" y="190" width="130" height="35" fill="var(--gwen-pink)" stroke="#000" strokeWidth="3" transform="rotate(-3deg)" />
          <text x="35" y="213" fontFamily="var(--font-title)" fontSize="18" fill="#fff" transform="rotate(-3deg)">MARY JANES BEATS</text>
        </svg>
      );
    }
    if (src.includes("workspace_blog_2")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#100b1a" />
          {/* Half tone circles */}
          <circle cx="200" cy="125" r="90" fill="none" stroke="var(--gwen-pink)" strokeWidth="3" opacity="0.3" strokeDasharray="10 15" />
          <circle cx="200" cy="125" r="70" fill="none" stroke="var(--gwen-teal)" strokeWidth="2" opacity="0.3" strokeDasharray="5 10" />
          
          {/* Ghost Spider Mask / Hood Silhouette */}
          <path d="M130 180 C130 90, 270 90, 270 180 Z" fill="#ffffff" stroke="#000000" strokeWidth="4" />
          <path d="M142 170 C142 105, 258 105, 258 170 Z" fill="var(--gwen-pink)" />
          <path d="M155 170 C155 115, 245 115, 245 170 Z" fill="var(--gwen-black)" stroke="#000000" strokeWidth="2.5" />
          
          {/* Mask Base & Eyes */}
          <ellipse cx="200" cy="155" rx="30" ry="38" fill="#ffffff" stroke="#000" strokeWidth="4" />
          <path d="M178 150 C180 135, 194 140, 196 150 C194 154, 184 160, 178 150 Z" fill="var(--gwen-pink)" stroke="var(--gwen-teal)" strokeWidth="2.5" />
          <path d="M222 150 C220 135, 206 140, 204 150 C206 154, 216 160, 222 150 Z" fill="var(--gwen-pink)" stroke="var(--gwen-teal)" strokeWidth="2.5" />
          
          <rect x="250" y="195" width="125" height="35" fill="var(--gwen-teal)" stroke="#000" strokeWidth="3" transform="rotate(3deg)" />
          <text x="260" y="218" fontFamily="var(--font-title)" fontSize="18" fill="#000" transform="rotate(3deg)">GHOST PORTRAIT</text>
        </svg>
      );
    }

    // 4. Multiverse Animation styles
    if (src.includes("astronomy_blog_1")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#08080f" />
          {/* Swirling wormhole portal */}
          <circle cx="200" cy="125" r="95" fill="none" stroke="var(--gwen-pink)" strokeWidth="8" opacity="0.6" />
          <circle cx="200" cy="125" r="80" fill="none" stroke="var(--gwen-teal)" strokeWidth="6" opacity="0.6" />
          <circle cx="200" cy="125" r="65" fill="none" stroke="var(--spidey-yellow)" strokeWidth="4" opacity="0.7" />
          <circle cx="200" cy="125" r="45" fill="none" stroke="var(--spidey-red)" strokeWidth="5" />
          
          {/* Spider dimensional symbol in center */}
          <circle cx="200" cy="125" r="18" fill="#000" stroke="#fff" strokeWidth="2" />
          <line x1="175" y1="125" x2="225" y2="125" stroke="#fff" strokeWidth="2" />
          <line x1="200" y1="100" x2="200" y2="150" stroke="#fff" strokeWidth="2" />
          
          {/* Glitch offsets */}
          <rect x="110" y="70" width="30" height="4" fill="var(--gwen-teal)" />
          <rect x="250" y="170" width="40" height="3" fill="var(--gwen-pink)" />
          
          <rect x="20" y="20" width="130" height="35" fill="var(--spidey-red)" stroke="#000" strokeWidth="3" transform="rotate(-3deg)" />
          <text x="30" y="43" fontFamily="var(--font-title)" fontSize="18" fill="#fff" transform="rotate(-3deg)">PORTAL VORTEX</text>
        </svg>
      );
    }
    if (src.includes("astronomy_blog_2")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#1b1a24" />
          {/* Dynamic layout of different spider logos representing dimensional collision */}
          <rect x="15" y="15" width="170" height="220" fill="rgba(229, 37, 33, 0.1)" stroke="var(--spidey-red)" strokeWidth="3" />
          <rect x="215" y="15" width="170" height="220" fill="rgba(255, 51, 119, 0.1)" stroke="var(--gwen-pink)" strokeWidth="3" />
          
          {/* Spidey logo left */}
          <circle cx="100" cy="115" r="30" fill="var(--spidey-red)" />
          <path d="M100 65 L100 165 M60 115 L140 115" stroke="#000" strokeWidth="3.5" />
          
          {/* Gwen logo right */}
          <circle cx="300" cy="115" r="30" fill="var(--gwen-pink)" />
          <path d="M300 65 L300 165 M260 115 L340 115" stroke="var(--gwen-teal)" strokeWidth="3" />
          
          {/* Lettering badges */}
          <text x="50" y="195" fontFamily="var(--font-title)" fontSize="20" fill="#ffffff" textAnchor="middle">EARTH-616</text>
          <text x="350" y="195" fontFamily="var(--font-title)" fontSize="20" fill="#ffffff" textAnchor="middle">EARTH-65</text>
          <text x="200" y="130" fontFamily="var(--font-title)" fontSize="36" fill="var(--spidey-yellow)" stroke="#000" strokeWidth="3" textAnchor="middle" transform="rotate(-15deg)">VS</text>
        </svg>
      );
    }

    // 5. Web Shooter schematic blueprint illustrations
    if (src.includes("coffee_blog_1")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Blueprint background grid */}
          <rect width="400" height="250" fill="#0d47a1" />
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#1565c0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="250" fill="url(#grid)" />
          
          {/* White blueprint schematics of Web-Shooter */}
          <text x="20" y="35" fontFamily="monospace" fontSize="13" fill="#90caf9">SPEC // WEB-SHOOTER MARK IV</text>
          
          {/* Wrist band */}
          <rect x="80" y="110" width="240" height="40" rx="5" fill="none" stroke="#fff" strokeWidth="2.5" />
          
          {/* Pressure trigger on palm */}
          <path d="M200 110 L200 60 Q200 50 190 50 L170 50" fill="none" stroke="#fff" strokeWidth="2.5" />
          <circle cx="170" cy="50" r="5" fill="#fff" />
          
          {/* Fluid Canister */}
          <rect x="150" y="115" width="100" height="30" rx="3" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 3" />
          <text x="200" y="133" fontFamily="monospace" fontSize="9" fill="#90caf9" textAnchor="middle">FLUID CANISTER</text>
          
          {/* Nozzle */}
          <polygon points="200,110 195,95 205,95" fill="none" stroke="#fff" strokeWidth="2" />
          <line x1="200" y1="95" x2="200" y2="75" stroke="#fff" strokeWidth="2.5" />
          
          <rect x="270" y="20" width="110" height="30" fill="var(--spidey-yellow)" stroke="#000" strokeWidth="2.5" transform="rotate(3deg)" />
          <text x="280" y="41" fontFamily="var(--font-title)" fontSize="16" fill="#000" transform="rotate(3deg)">TECH SCHEMA</text>
        </svg>
      );
    }
    if (src.includes("coffee_blog_2")) {
      return (
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Blueprint background grid */}
          <rect width="400" height="250" fill="#0d47a1" />
          <rect width="400" height="250" fill="url(#grid)" />
          
          {/* Chemical Molecular chains for Web Fluid */}
          <text x="20" y="35" fontFamily="monospace" fontSize="13" fill="#90caf9">CHEM // SHEAR-THICKENING ADHESIVE</text>
          
          {/* Molecule nodes */}
          <circle cx="120" cy="120" r="8" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="200" cy="90" r="8" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="280" cy="120" r="8" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="200" cy="160" r="8" fill="none" stroke="#fff" strokeWidth="2" />
          
          {/* Connecting lines */}
          <line x1="128" y1="120" x2="192" y2="93" stroke="#fff" strokeWidth="2" />
          <line x1="208" y1="93" x2="272" y2="120" stroke="#fff" strokeWidth="2" />
          <line x1="128" y1="120" x2="192" y2="157" stroke="#fff" strokeWidth="2" />
          <line x1="208" y1="157" x2="272" y2="120" stroke="#fff" strokeWidth="2" />
          
          {/* Chemical Annotations */}
          <text x="135" y="105" fontFamily="monospace" fontSize="8" fill="#90caf9" transform="rotate(-22)">[NYLON POLYMER]</text>
          <text x="220" y="145" fontFamily="monospace" fontSize="8" fill="#90caf9" transform="rotate(-22)">[COHESIVE WEB LINK]</text>
          
          {/* Web spray sketch right */}
          <path d="M300 70 Q340 100 370 60 M300 160 Q345 140 375 165" stroke="#fff" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          
          <rect x="25" y="195" width="125" height="35" fill="var(--spidey-yellow)" stroke="#000" strokeWidth="2.5" transform="rotate(-4deg)" />
          <text x="35" y="217" fontFamily="var(--font-title)" fontSize="18" fill="#000" transform="rotate(-4deg)">FLUID FORMULA</text>
        </svg>
      );
    }

    return null;
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidesWrapper}>
        {images.map((src, index) => (
          <div
            key={src}
            className={`${styles.slide} ${
              index === currentIndex ? styles.slideActive : ""
            }`}
          >
            {renderSvgIllustration(src)}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`${styles.navBtn} ${styles.prevBtn}`}
            aria-label="Previous image"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={handleNext}
            className={`${styles.navBtn} ${styles.nextBtn}`}
            aria-label="Next image"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <span
                key={index}
                onClick={(e) => handleDotClick(e, index)}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.dotActive : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
