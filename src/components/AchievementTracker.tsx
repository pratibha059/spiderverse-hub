"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export interface Badge {
  id: string;
  name: string;
  desc: string;
  icon: string;
  color: string;
}

export const BADGES_LIST: Badge[] = [
  {
    id: "visitor",
    name: "Friendly Neighborhood Visitor",
    desc: "Successfully teleported to the SpiderVerse Hub portal.",
    icon: "🕸️",
    color: "var(--spidey-red)"
  },
  {
    id: "scholar",
    name: "Spider Scholar",
    desc: "Complete a deck of multiversal trivia questions.",
    icon: "🎓",
    color: "var(--spidey-yellow)"
  },
  {
    id: "webmaster",
    name: "Web Master",
    desc: "Enter the Web Shooter Mini Game grid and test your triggers.",
    icon: "🕷️",
    color: "var(--gwen-pink)"
  },
  {
    id: "explorer",
    name: "Multiverse Explorer",
    desc: "Inspect the details of all universes on the Multiverse Page.",
    icon: "🌀",
    color: "var(--gwen-teal)"
  },
  {
    id: "genius",
    name: "Spider Genius",
    desc: "Score a perfect rating (100% correct) on any Quiz or Trivia deck.",
    icon: "🧠",
    color: "var(--gwen-purple)"
  }
];

// Helper functions that can be called anywhere in the app to trigger badge unlocks
export function unlockBadge(badgeId: string) {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem("spiderverse_badges") || "[]";
  const badges: string[] = JSON.parse(saved);
  
  if (!badges.includes(badgeId)) {
    badges.push(badgeId);
    localStorage.setItem("spiderverse_badges", JSON.stringify(badges));
    // Dispatch a custom event to notify the tracker component
    window.dispatchEvent(new CustomEvent("badge_unlocked", { detail: badgeId }));
  }
}

export default function AchievementTracker() {
  const pathname = usePathname();
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [toastBadge, setToastBadge] = useState<Badge | null>(null);

  // Initial load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("spiderverse_badges") || "[]";
    setUnlockedIds(JSON.parse(saved));

    // Handle dynamically triggered badges
    const handleUnlockEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const badgeId = customEvent.detail;
      const b = BADGES_LIST.find((item) => item.id === badgeId);
      if (b) {
        setToastBadge(b);
        // Automatically hide toast after 4s
        setTimeout(() => setToastBadge(null), 4000);
      }
      
      const updated = localStorage.getItem("spiderverse_badges") || "[]";
      setUnlockedIds(JSON.parse(updated));
    };

    window.addEventListener("badge_unlocked", handleUnlockEvent);
    return () => window.removeEventListener("badge_unlocked", handleUnlockEvent);
  }, []);

  // Track page-based badges
  useEffect(() => {
    if (pathname === "/") {
      unlockBadge("visitor");
    } else if (pathname === "/game") {
      unlockBadge("webmaster");
    }
  }, [pathname]);

  const resetAllBadges = () => {
    if (confirm("Reset all Spider-Badges?")) {
      localStorage.removeItem("spiderverse_badges");
      setUnlockedIds([]);
    }
  };

  return (
    <>
      {/* Floating Trophy Badge Button bottom-right */}
      {pathname !== "/login" && (
        <button
          onClick={() => setShowDashboard(true)}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 150,
            background: "var(--spidey-yellow)",
            border: "3px solid #000",
            boxShadow: "3px 3px 0px #000",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            fontSize: "1.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s var(--transition-comic)"
          }}
          className="badge-hover-pulse"
        >
          🏆
        </button>
      )}

      {/* Floating Unlock Toast Notification */}
      {toastBadge && (
        <div style={{
          position: "fixed",
          bottom: "6.5rem",
          right: "1.5rem",
          zIndex: 180,
          background: "#ffffff",
          color: "#000",
          border: "4px solid #000",
          boxShadow: "6px 6px 0px #000",
          borderRadius: "4px",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "350px",
          animation: "slideIn 0.3s var(--transition-comic)"
        }}>
          <span style={{ fontSize: "2.5rem" }}>{toastBadge.icon}</span>
          <div>
            <div style={{ fontFamily: "var(--font-title)", fontSize: "0.85rem", color: "var(--gwen-pink)" }}>
              UNLOCKED SPIDER-BADGE!
            </div>
            <h4 style={{ color: "#000", textShadow: "none", fontSize: "1.1rem", margin: "0 0 0.1rem 0" }}>
              {toastBadge.name}
            </h4>
            <p style={{ fontSize: "0.8rem", margin: 0, color: "#444" }}>{toastBadge.desc}</p>
          </div>
        </div>
      )}

      {/* Achievements Dashboard Modal */}
      {showDashboard && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 200,
          padding: "1.5rem"
        }}>
          <div className="comic-card" style={{
            width: "100%",
            maxWidth: "500px",
            background: "#111116",
            border: "4px solid #000",
            boxShadow: "8px 8px 0px #000",
            position: "relative",
            maxHeight: "90vh",
            overflowY: "auto"
          }}>
            <button
              onClick={() => setShowDashboard(false)}
              className="comic-btn btn-spidey"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "0.9rem",
                padding: "0.3rem 0.6rem"
              }}
            >
              CLOSE
            </button>

            <h2 style={{ fontSize: "2.4rem", marginBottom: "0.5rem" }}>Trophy Room</h2>
            <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "0.95rem", marginBottom: "2rem" }}>
              Badges earned: {unlockedIds.length} / {BADGES_LIST.length}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {BADGES_LIST.map((badge) => {
                const isUnlocked = unlockedIds.includes(badge.id);
                return (
                  <div key={badge.id} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    border: "3px solid #000",
                    boxShadow: isUnlocked ? "3px 3px 0 #000" : "none",
                    background: isUnlocked ? "#1b1b22" : "#08080a",
                    padding: "0.85rem 1rem",
                    borderRadius: "4px",
                    opacity: isUnlocked ? 1 : 0.45,
                    transition: "all 0.2s ease"
                  }}>
                    <span style={{
                      fontSize: "2.5rem",
                      background: isUnlocked ? badge.color : "#333",
                      border: "2px solid #000",
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      {isUnlocked ? badge.icon : "🔒"}
                    </span>
                    <div>
                      <h4 style={{ textShadow: "none", color: isUnlocked ? "#fff" : "#888", fontSize: "1.15rem", margin: "0 0 0.1rem 0" }}>
                        {badge.name}
                      </h4>
                      <p style={{ fontSize: "0.85rem", margin: 0, color: isUnlocked ? "#cbd5e1" : "#555" }}>
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {unlockedIds.length > 0 && (
              <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={resetAllBadges}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--spidey-red)",
                    fontFamily: "var(--font-comic)",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    textDecoration: "underline"
                  }}
                >
                  Reset achievements
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Inject custom CSS keyframes */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(200px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .badge-hover-pulse:hover {
          transform: scale(1.1) rotate(5deg) !important;
          background: var(--gwen-pink) !important;
        }
      `}</style>
    </>
  );
}
