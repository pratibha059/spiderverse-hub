"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";
import { CHARACTERS_DATABASE } from "@/lib/characters";
import CharacterImage from "@/components/CharacterImage";

export default function CharacterDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const charId = params?.id as string;
  const character = CHARACTERS_DATABASE.find((c) => c.id === charId);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setLoading(false);
      
      // Save visited characters to local storage to trigger the "Multiverse Explorer" achievement
      if (character) {
        const visited = localStorage.getItem("visited_spiders") || "[]";
        const list: string[] = JSON.parse(visited);
        if (!list.includes(character.id)) {
          list.push(character.id);
          localStorage.setItem("visited_spiders", JSON.stringify(list));
        }

        // If user has visited Peter, Gwen, Miles, and Miguel, unlock the "Multiverse Explorer" achievement
        const required = ["peter", "gwen", "miles", "miguel"];
        const hasAll = required.every(r => list.includes(r));
        if (hasAll) {
          // Import custom unlock function dynamically
          import("@/components/AchievementTracker").then((module) => {
            module.unlockBadge("explorer");
          });
        }
      }
    }
  }, [router, character]);

  if (loading) return null;

  if (!character) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        gap: "1.5rem",
        padding: "2rem"
      }}>
        <h1 style={{ fontFamily: "var(--font-title)", fontSize: "3rem", color: "var(--spidey-red)", textShadow: "2px 2px 0px #000" }}>
          Character Log Offline
        </h1>
        <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "1.2rem" }}>
          This character code has not been indexed in our multiversal log files yet.
        </p>
        <Link href="/characters" className="comic-btn btn-spidey" style={{ textDecoration: "none", marginTop: "1rem" }}>
          Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "3rem 0", background: `linear-gradient(to bottom, #08080f, #15111f)`, minHeight: "100vh" }}>
      <main className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/characters" style={{ fontFamily: "var(--font-comic)", fontWeight: "bold", color: character.themeColor, textDecoration: "none" }}>
            &larr; Back to Directory
          </Link>
        </div>

        {/* Character Title Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="comic-badge" style={{ background: character.themeColor, color: "#fff", textShadow: "none", marginBottom: "1rem" }}>
            {character.universe}
          </span>
          <h1 style={{ fontSize: "4.5rem", textShadow: "4px 4px 0px #000", color: "#ffffff", marginBottom: "0.25rem" }}>
            {character.codename}
          </h1>
          <h3 style={{ fontSize: "1.8rem", color: character.accentColor, textShadow: "none", margin: 0 }}>
            Alias: {character.name}
          </h3>
        </div>

        {/* Biography Panel */}
        <div className="comic-card animate-float" style={{ borderLeft: `8px solid ${character.themeColor}`, background: "#111118", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: character.accentColor }}>Log File: Biography</h2>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: 1.3, minWidth: "280px" }}>
              <p style={{ lineHeight: "1.7", color: "#f3f4f6", fontFamily: "var(--font-sans)", marginBottom: "1.25rem", fontSize: "1.05rem" }}>
                {character.bio}
              </p>
              <h3 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>Origin Event</h3>
              <p style={{ lineHeight: "1.7", color: "#d1d5db", fontFamily: "var(--font-sans)", fontSize: "0.98rem" }}>
                {character.origin}
              </p>
            </div>
            {/* SVG Character Avatar box */}
            <div style={{
              flex: 0.7,
              minWidth: "220px",
              height: "220px",
              background: "radial-gradient(circle, #251a3a 0%, #0c0b11 100%)",
              border: "4px solid #000",
              boxShadow: "5px 5px 0px #000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto"
            }}>
              <div style={{ width: "120px", height: "120px", position: "relative" }}>
                <CharacterImage characterId={character.id === "peter" ? "spiderman" : character.id === "gwen" ? "spider-gwen" : `${character.id}-morales`} alt={character.name} fill />
              </div>
            </div>
          </div>
        </div>

        {/* Powers & Stats Ratings Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
          
          {/* Powers Card */}
          <div className="comic-card" style={{ background: "#13131a", borderColor: character.accentColor }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "3px solid #000", paddingBottom: "0.5rem", color: character.themeColor }}>
              Powers & Spliced Skills
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", textShadow: "none", marginBottom: "0.5rem" }}>Superhuman Powers</h4>
                <ul style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {character.powers.map((p, idx) => (
                    <li key={idx} style={{ fontFamily: "var(--font-comic)", fontSize: "0.95rem", fontWeight: "bold", color: "#cbd5e1" }}>
                      🕸️ {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ borderTop: "2px dashed #333", paddingTop: "1rem" }}>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", textShadow: "none", marginBottom: "0.5rem" }}>Specialized Abilities</h4>
                <ul style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {character.abilities.map((a, idx) => (
                    <li key={idx} style={{ fontFamily: "var(--font-comic)", fontSize: "0.95rem", fontWeight: "bold", color: "#cbd5e1" }}>
                      ⚡ {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Progress Bars */}
          <div className="comic-card" style={{ background: "#111116", borderColor: character.themeColor }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "3px solid #000", paddingBottom: "0.5rem" }}>
              Spider Rating Metrics
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              
              {/* Strength */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", fontWeight: "bold" }}>
                  <span style={{ fontFamily: "var(--font-comic)" }}>STRENGTH RATING</span>
                  <span style={{ color: character.themeColor }}>{character.stats.strength}/100</span>
                </div>
                <div style={{ width: "100%", height: "12px", background: "#1f2937", border: "2px solid #000" }}>
                  <div style={{ width: `${character.stats.strength}%`, height: "100%", background: character.themeColor }} />
                </div>
              </div>

              {/* Intelligence */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", fontWeight: "bold" }}>
                  <span style={{ fontFamily: "var(--font-comic)" }}>INTELLIGENCE RATING</span>
                  <span style={{ color: character.accentColor }}>{character.stats.intelligence}/100</span>
                </div>
                <div style={{ width: "100%", height: "12px", background: "#1f2937", border: "2px solid #000" }}>
                  <div style={{ width: `${character.stats.intelligence}%`, height: "100%", background: character.accentColor }} />
                </div>
              </div>

              {/* Speed */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", fontWeight: "bold" }}>
                  <span style={{ fontFamily: "var(--font-comic)" }}>SPEED RATING</span>
                  <span style={{ color: character.themeColor }}>{character.stats.speed}/100</span>
                </div>
                <div style={{ width: "100%", height: "12px", background: "#1f2937", border: "2px solid #000" }}>
                  <div style={{ width: `${character.stats.speed}%`, height: "100%", background: character.themeColor }} />
                </div>
              </div>

              {/* Agility */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", fontWeight: "bold" }}>
                  <span style={{ fontFamily: "var(--font-comic)" }}>AGILITY RATING</span>
                  <span style={{ color: character.accentColor }}>{character.stats.agility}/100</span>
                </div>
                <div style={{ width: "100%", height: "12px", background: "#1f2937", border: "2px solid #000" }}>
                  <div style={{ width: `${character.stats.agility}%`, height: "100%", background: character.accentColor }} />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Fun Facts, Allies, Enemies Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", flexWrap: "wrap" }} className="book-spread-responsive">
          
          {/* Fun Facts */}
          <div className="comic-card" style={{ background: "#1a1625" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: character.accentColor }}>Log Trivia & Facts</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {character.facts.map((fact, idx) => (
                <li key={idx} style={{
                  display: "flex",
                  gap: "0.75rem",
                  fontFamily: "var(--font-comic)",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  alignItems: "flex-start"
                }}>
                  <span style={{ color: character.themeColor, fontSize: "1.2rem" }}>🎯</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Allies and Enemies */}
          <div className="comic-card" style={{ background: "#111116", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Allies */}
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#22c55e", textShadow: "none" }}>Known Allies</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {character.allies.map((ally) => (
                  <span key={ally} style={{
                    fontFamily: "var(--font-comic)",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    border: "2px solid #000",
                    padding: "0.25rem 0.75rem",
                    background: "rgba(34,197,94,0.1)",
                    borderRadius: "4px",
                    color: "#22c55e"
                  }}>
                    {ally}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Enemies */}
            <div style={{ borderTop: "2px dashed #333", paddingTop: "1.5rem" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--spidey-red)", textShadow: "none" }}>Active Threats</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {character.enemies.map((enemy) => (
                  <span key={enemy} style={{
                    fontFamily: "var(--font-comic)",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    border: "2px solid #000",
                    padding: "0.25rem 0.75rem",
                    background: "rgba(229,37,33,0.1)",
                    borderRadius: "4px",
                    color: "var(--spidey-red)"
                  }}>
                    {enemy}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
