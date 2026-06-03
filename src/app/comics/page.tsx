"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { MOCK_BLOGS, Blog } from "@/lib/blogs";

interface ComicBook extends Blog {
  issueNo: string;
  price: string;
  coverTitle: string;
  coverColor: string;
  accentColor: string;
  coverSvg: React.ReactNode;
}

export default function ComicsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [selectedComic, setSelectedComic] = useState<ComicBook | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  // Map the mock blogs to our custom comic book specs
  const comicBooks: ComicBook[] = [
    {
      ...MOCK_BLOGS[0], // future-of-ai-coding (Comic History)
      issueNo: "No. 15",
      price: "12¢",
      coverTitle: "THE AMAZING SPIDER-MAN",
      coverColor: "var(--spidey-red)",
      accentColor: "var(--spidey-yellow)",
      coverSvg: (
        <svg viewBox="0 0 160 200" width="100%" height="100%">
          <rect width="160" height="200" fill="#0d1f3d" />
          <circle cx="80" cy="115" r="50" fill="var(--spidey-red)" stroke="#000" strokeWidth="3" />
          <path d="M80 65 L80 165 M30 115 L130 115 M44 80 L116 150 M44 150 L116 80" stroke="#000" strokeWidth="1.5" />
          <path d="M50 112 C52 102, 68 104, 70 114 C70 118, 56 126, 50 112 Z" fill="#fff" stroke="#000" strokeWidth="3" />
          <path d="M110 112 C108 102, 92 104, 90 114 C90 118, 104 126, 110 112 Z" fill="#fff" stroke="#000" strokeWidth="3" />
        </svg>
      )
    },
    {
      ...MOCK_BLOGS[1], // norwegian-fjords-adventure (Brooklyn Locations)
      issueNo: "No. 1",
      price: "25¢",
      coverTitle: "BROOKLYN SPIDER-MAN",
      coverColor: "var(--gwen-black)",
      accentColor: "var(--spidey-red)",
      coverSvg: (
        <svg viewBox="0 0 160 200" width="100%" height="100%">
          <rect width="160" height="200" fill="#2b1111" />
          <path d="M80 60 Q55 80 55 120 Q55 170 80 190 Q105 170 105 120 Q105 80 80 60 Z" fill="var(--spidey-red)" opacity="0.9" />
          <circle cx="80" cy="90" r="12" fill="var(--spidey-red)" />
          <path d="M72 170 L72 200 M80 180 L80 200 M88 175 L88 195" stroke="var(--spidey-red)" strokeWidth="3" strokeLinecap="round" />
          <text x="80" y="130" fontFamily="sans-serif" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">GRAFFITI WORK</text>
        </svg>
      )
    },
    {
      ...MOCK_BLOGS[2], // minimalist-workspace-guide (Spider-Gwen Art Design)
      issueNo: "No. 2",
      price: "35¢",
      coverTitle: "GHOST-SPIDER",
      coverColor: "var(--gwen-pink)",
      accentColor: "var(--gwen-teal)",
      coverSvg: (
        <svg viewBox="0 0 160 200" width="100%" height="100%">
          <rect width="160" height="200" fill="#110b1a" />
          <path d="M40 140 C40 70, 120 70, 120 140 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
          <path d="M46 135 C46 80, 114 80, 114 135 Z" fill="var(--gwen-pink)" />
          <path d="M52 135 C52 90, 108 90, 108 135 Z" fill="var(--gwen-black)" stroke="#000" strokeWidth="2" />
          <ellipse cx="80" cy="130" rx="20" ry="24" fill="#ffffff" stroke="#000" strokeWidth="3" />
          <path d="M62 125 C64 117, 72 120, 73 127 Z" fill="var(--gwen-pink)" stroke="var(--gwen-teal)" strokeWidth="2" />
          <path d="M98 125 C96 117, 88 120, 87 127 Z" fill="var(--gwen-pink)" stroke="var(--gwen-teal)" strokeWidth="2" />
        </svg>
      )
    },
    {
      ...MOCK_BLOGS[3], // beginners-astronomy-guide (Multiverse Animation)
      issueNo: "No. 4",
      price: "50¢",
      coverTitle: "MULTIVERSE COLLISION",
      coverColor: "var(--gwen-purple)",
      accentColor: "var(--gwen-teal)",
      coverSvg: (
        <svg viewBox="0 0 160 200" width="100%" height="100%">
          <rect width="160" height="200" fill="#08080f" />
          <circle cx="80" cy="100" r="60" fill="none" stroke="var(--gwen-pink)" strokeWidth="6" opacity="0.6" />
          <circle cx="80" cy="100" r="50" fill="none" stroke="var(--gwen-teal)" strokeWidth="5" opacity="0.6" />
          <circle cx="80" cy="100" r="40" fill="none" stroke="var(--spidey-yellow)" strokeWidth="3" opacity="0.7" />
          <circle cx="80" cy="100" r="28" fill="none" stroke="var(--spidey-red)" strokeWidth="4" />
          <line x1="80" y1="40" x2="80" y2="160" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      ...MOCK_BLOGS[4], // art-of-slow-drip-coffee (Web Shooters)
      issueNo: "No. 5",
      price: "10¢",
      coverTitle: "WEB SHOOTER TECH LOGS",
      coverColor: "#0556c4",
      accentColor: "var(--spidey-yellow)",
      coverSvg: (
        <svg viewBox="0 0 160 200" width="100%" height="100%">
          <rect width="160" height="200" fill="#0d47a1" />
          {/* Blueprint grid lines */}
          <line x1="20" y1="0" x2="20" y2="200" stroke="#1565c0" strokeWidth="1" />
          <line x1="40" y1="0" x2="40" y2="200" stroke="#1565c0" strokeWidth="1" />
          <line x1="60" y1="0" x2="60" y2="200" stroke="#1565c0" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="200" stroke="#1565c0" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#1565c0" strokeWidth="1" />
          <line x1="120" y1="0" x2="120" y2="200" stroke="#1565c0" strokeWidth="1" />
          <line x1="140" y1="0" x2="140" y2="200" stroke="#1565c0" strokeWidth="1" />
          
          <line x1="0" y1="40" x2="160" y2="40" stroke="#1565c0" strokeWidth="1" />
          <line x1="0" y1="80" x2="160" y2="80" stroke="#1565c0" strokeWidth="1" />
          <line x1="0" y1="120" x2="160" y2="120" stroke="#1565c0" strokeWidth="1" />
          <line x1="0" y1="160" x2="160" y2="160" stroke="#1565c0" strokeWidth="1" />
          
          {/* White outline sketch of trigger mechanism */}
          <rect x="40" y="90" width="80" height="30" fill="none" stroke="#fff" strokeWidth="2" />
          <line x1="80" y1="90" x2="80" y2="50" stroke="#fff" strokeWidth="2" />
          <circle cx="80" cy="50" r="3" fill="#fff" />
        </svg>
      )
    }
  ];

  if (loading) return null;

  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #08080f, #181124)", minHeight: "100vh" }}>
      <main className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="comic-badge" style={{ background: "var(--spidey-yellow)", color: "#000", marginBottom: "1rem" }}>
            COLLECTIBLE ARCHIVE
          </span>
          <h1 style={{ fontSize: "4.5rem", textShadow: "4px 4px 0px #000" }}>3D Comic Rack</h1>
          <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "1.1rem" }}>
            Click on any comic book cover standing on the shelf to open and read!
          </p>
        </div>

        {/* 3D Comic Shelf Display */}
        <div style={{
          position: "relative",
          background: "rgba(0,0,0,0.4)",
          border: "4px solid #000",
          boxShadow: "6px 6px 0px #000",
          padding: "4rem 2rem 3rem 2rem",
          borderRadius: "4px"
        }}>
          {/* Wooden Shelf row */}
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "2.5rem",
            position: "relative",
            zIndex: 10,
            paddingBottom: "1.5rem"
          }}>
            {comicBooks.map((comic) => (
              <div
                key={comic.id}
                onClick={() => setSelectedComic(comic)}
                style={{
                  width: "176px",
                  height: "250px",
                  background: "#000",
                  border: "4px solid #000",
                  boxShadow: "5px 5px 0px rgba(0,0,0,0.5)",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.25s var(--transition-comic)",
                  transformOrigin: "bottom center"
                }}
                className="comic-hover-effect"
              >
                {/* Vintage cover details */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0.5rem"
                }}>
                  {/* Top bar (Price, issue, approved badge) */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", zIndex: 10 }}>
                    <div style={{
                      background: "#fff",
                      color: "#000",
                      border: "2px solid #000",
                      fontFamily: "var(--font-title)",
                      fontSize: "0.75rem",
                      padding: "0.05rem 0.2rem",
                      textAlign: "center",
                      lineHeight: "1"
                    }}>
                      {comic.price}
                    </div>
                    <div style={{
                      background: "#fff",
                      color: "#000",
                      border: "2px solid #000",
                      fontFamily: "var(--font-title)",
                      fontSize: "0.7rem",
                      padding: "0.05rem 0.2rem",
                      lineHeight: "1"
                    }}>
                      {comic.issueNo}
                    </div>
                    {/* Comics Code Authority Seal */}
                    <div style={{
                      width: "16px",
                      height: "20px",
                      background: "#fff",
                      border: "1.5px solid #000",
                      fontSize: "4px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      color: "#000",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      lineHeight: "1.1"
                    }}>
                      <span>COMICS</span>
                      <span style={{ fontSize: "2px" }}>CODE</span>
                      <span>AUTH</span>
                    </div>
                  </div>

                  {/* Title Banner */}
                  <div style={{
                    background: comic.accentColor,
                    color: comic.accentColor === "var(--spidey-yellow)" ? "#000" : "#fff",
                    border: "2px solid #000",
                    padding: "0.2rem",
                    textAlign: "center",
                    fontFamily: "var(--font-title)",
                    fontSize: "0.75rem",
                    lineHeight: "1.1",
                    textTransform: "uppercase",
                    transform: "skewX(-8deg) rotate(-2deg)",
                    marginTop: "0.25rem",
                    zIndex: 10
                  }}>
                    {comic.coverTitle}
                  </div>

                  {/* Empty spacer to show SVG in background */}
                  <div style={{ flex: 1 }} />

                  {/* Barcode box */}
                  <div style={{
                    width: "30px",
                    height: "18px",
                    background: "#fff",
                    border: "1.5px solid #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1px",
                    padding: "1px",
                    zIndex: 10
                  }}>
                    <div style={{ width: "2px", height: "100%", background: "#000" }} />
                    <div style={{ width: "1px", height: "100%", background: "#000" }} />
                    <div style={{ width: "2px", height: "100%", background: "#000" }} />
                    <div style={{ width: "1px", height: "100%", background: "#000" }} />
                    <div style={{ width: "3px", height: "100%", background: "#000" }} />
                  </div>
                </div>

                {/* SVG Artwork background */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                  {comic.coverSvg}
                </div>
              </div>
            ))}
          </div>

          {/* Wooden Shelf Board base */}
          <div style={{
            height: "22px",
            background: "linear-gradient(to bottom, #d97706, #92400e)",
            border: "4px solid #000",
            boxShadow: "0px 10px 15px rgba(0,0,0,0.5)",
            marginTop: "-15px",
            position: "relative",
            zIndex: 5
          }} />
        </div>

        {/* 2-Page Immersive Reader Modal */}
        {selectedComic && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            padding: "2rem",
            animation: "fadeIn 0.3s ease"
          }}>
            {/* Close Button top right */}
            <button
              onClick={() => setSelectedComic(null)}
              className="comic-btn btn-spidey"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontSize: "1.2rem",
                zIndex: 220
              }}
            >
              Close Book 📕
            </button>

            {/* 2-Page Spread Layout */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "100%",
              maxWidth: "1000px",
              height: "80vh",
              maxHeight: "650px",
              background: "#fff",
              border: "5px solid #000",
              boxShadow: "10px 10px 0px #000",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden"
            }} className="book-spread-responsive">
              
              {/* Page 1 (LEFT): Comic Cover Artwork */}
              <div style={{
                background: "radial-gradient(circle, #24243e 0%, #0f0c20 100%)",
                borderRight: "4px solid #000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem",
                color: "#fff",
                position: "relative"
              }}>
                {/* SVG Artwork container */}
                <div style={{
                  width: "100%",
                  height: "300px",
                  background: "#08080f",
                  border: "3.5px solid #000",
                  boxShadow: "3px 3px 0 #000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {selectedComic.coverSvg}
                </div>

                {/* Metadata Details */}
                <div style={{ marginTop: "1.5rem" }}>
                  <span className="comic-badge" style={{ background: selectedComic.coverColor, color: "#fff", textShadow: "none", marginBottom: "0.75rem" }}>
                    {selectedComic.issueNo} ({selectedComic.date})
                  </span>
                  <h2 style={{ fontSize: "2.4rem", color: selectedComic.accentColor, textShadow: "2px 2px 0px #000", marginBottom: "0.5rem" }}>
                    {selectedComic.coverTitle}
                  </h2>
                  <p style={{ fontFamily: "var(--font-comic)", color: "#94a3b8", fontWeight: "bold" }}>
                    WRITTEN BY: {selectedComic.author} <br />
                    PRICE: {selectedComic.price}
                  </p>
                </div>
              </div>

              {/* Page 2 (RIGHT): Open Panel Reading Layout */}
              <div style={{
                background: "#fdf8eb", // Aged comic book paper tone
                color: "#000",
                padding: "2rem",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                fontFamily: "var(--font-comic)"
              }}>
                <div style={{
                  borderBottom: "3px dashed #000",
                  paddingBottom: "0.5rem"
                }}>
                  <span className="comic-badge" style={{ background: "#000", color: "#fff", fontSize: "0.75rem", transform: "none" }}>
                    STORY CHRONICLE
                  </span>
                  <h2 style={{ fontFamily: "var(--font-title)", fontSize: "2rem", color: "#000", textShadow: "none", marginTop: "0.5rem", lineHeight: "1.1" }}>
                    {selectedComic.title}
                  </h2>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedComic.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      border: "2px solid #000",
                      padding: "0.1rem 0.5rem",
                      borderRadius: "2px",
                      background: "rgba(0,0,0,0.05)"
                    }}>
                      #{t.toUpperCase()}
                    </span>
                  ))}
                </div>

                {/* Article text divided in comic panels */}
                <div style={{
                  border: "3px solid #000",
                  padding: "1rem",
                  background: "#fff",
                  boxShadow: "3px 3px 0 #000",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                  fontWeight: "bold"
                }}>
                  {selectedComic.content}
                </div>

                <div className="speech-bubble" style={{ background: "#fff", borderColor: "#000", padding: "1rem" }}>
                  <p style={{ fontSize: "1rem", margin: 0 }}>
                    "The web of destiny has woven this record into the archives. Each dimension has its own spider, but the call to responsibility remains universal."
                  </p>
                </div>

                <div style={{
                  fontSize: "0.85rem",
                  color: "#666",
                  textAlign: "center",
                  borderTop: "2px solid #000",
                  paddingTop: "0.5rem",
                  fontWeight: "bold"
                }}>
                  End of Issue • Published in NY
                </div>
              </div>

            </div>

            {/* Custom animations style inject */}
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .comic-hover-effect:hover {
                transform: scale(1.08) translateY(-10px) rotate(-1deg);
                box-shadow: 10px 15px 15px rgba(0,0,0,0.6) !important;
                border-color: var(--spidey-yellow) !important;
              }
              @media (max-width: 768px) {
                .book-spread-responsive {
                  grid-template-columns: 1fr !important;
                  height: 90vh !important;
                  max-height: none !important;
                }
              }
            `}</style>
          </div>
        )}

      </main>
    </div>
  );
}
