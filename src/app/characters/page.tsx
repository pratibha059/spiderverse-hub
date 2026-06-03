"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";
import { CHARACTERS_DATABASE } from "@/lib/characters";
import CharacterImage from "@/components/CharacterImage";

export default function CharactersPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #08080c, #130a1c)", minHeight: "100vh" }}>
      <main className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="comic-badge" style={{ background: "var(--gwen-pink)", color: "#fff", marginBottom: "1rem" }}>
            WEB OF DESTINY
          </span>
          <h1 style={{ fontSize: "4.5rem", textShadow: "4px 4px 0px #000" }}>Spider-Heroes Log</h1>
          <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "1.1rem" }}>
            Access the detailed profile records of anomalies across the multiverse.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="comic-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          {CHARACTERS_DATABASE.map((char) => (
            <div
              key={char.id}
              className="comic-card"
              style={{
                background: "#111116",
                borderColor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "450px"
              }}
            >
              <div>
                {/* SVG/Character Image Header */}
                <div style={{
                  width: "100%",
                  height: "160px",
                  background: "radial-gradient(circle, #231930 0%, #08080f 100%)",
                  border: "3.5px solid #000",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  boxShadow: "inset 0 0 10px #000"
                }}>
                  <div style={{ width: "90px", height: "90px", position: "relative" }}>
                    <CharacterImage characterId={char.id === "peter" ? "spiderman" : char.id === "gwen" ? "spider-gwen" : `${char.id}-morales`} alt={char.name} fill />
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <span className="comic-badge" style={{ background: char.themeColor, color: "#fff", textShadow: "none", fontSize: "0.75rem", padding: "0.15rem 0.5rem" }}>
                    {char.universe}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: char.accentColor, fontFamily: "var(--font-comic)", fontWeight: "bold" }}>
                    {char.codename}
                  </span>
                </div>

                <h2 style={{ fontSize: "2rem", color: "#ffffff", marginBottom: "0.25rem", textShadow: "2px 2px 0px #000" }}>
                  {char.name}
                </h2>
                
                <p style={{ fontSize: "0.9rem", color: "#cbd5e1", lineHeight: "1.5", fontFamily: "var(--font-sans)", marginBottom: "1.5rem" }}>
                  {char.bio.substring(0, 110)}...
                </p>

                {/* Visual Stats meters */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: "bold", fontFamily: "var(--font-comic)" }}>
                      <span>STRENGTH</span>
                      <span>{char.stats.strength}</span>
                    </div>
                    <div style={{ width: "100%", height: "6px", background: "#222", border: "1.5px solid #000" }}>
                      <div style={{ width: `${char.stats.strength}%`, height: "100%", background: char.themeColor }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: "bold", fontFamily: "var(--font-comic)" }}>
                      <span>AGILITY</span>
                      <span>{char.stats.agility}</span>
                    </div>
                    <div style={{ width: "100%", height: "6px", background: "#222", border: "1.5px solid #000" }}>
                      <div style={{ width: `${char.stats.agility}%`, height: "100%", background: char.accentColor }} />
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Link Footer */}
              <div style={{ borderTop: "2px dashed #222", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#666", fontWeight: "bold", fontFamily: "var(--font-comic)" }}>
                  LOG-ID: #{char.id.toUpperCase()}
                </span>
                <Link href={`/characters/${char.id}`} className="comic-btn btn-spidey" style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.35rem 0.75rem", background: char.themeColor }}>
                  Open Log &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
