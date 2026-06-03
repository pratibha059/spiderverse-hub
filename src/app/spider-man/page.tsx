"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import Link from "next/link";

export default function SpiderManPage() {
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

  const powers = [
    { name: "Spider-Sense", level: 95, desc: "Precognitive danger warning sense." },
    { name: "Wall-Crawling", level: 90, desc: "Ability to cling to any solid surface." },
    { name: "Web-Slinging", level: 85, desc: "Utilizes self-made web shooters and fluid." },
    { name: "Superhuman Strength", level: 80, desc: "Can lift up to 10 tons easily." },
    { name: "Agility & Reflexes", level: 98, desc: "Reflexes 40 times faster than normal human." }
  ];

  const villains = [
    { name: "Green Goblin", desc: "Norman Osborn, Peter's arch-nemesis who uses pumpkin bombs and a glider.", color: "#4ade80" },
    { name: "Doctor Octopus", desc: "Otto Octavius, a brilliant scientist with four mechanical tentacles fused to his spine.", color: "#60a5fa" },
    { name: "Venom", desc: "An alien symbiote that feeds on rage, bound to Eddie Brock with matching spider powers.", color: "#f3f4f6" },
    { name: "Mysterio", desc: "Quentin Beck, a former special effects wizard who creates elaborate illusions.", color: "#c084fc" }
  ];

  const facts = [
    "First debuted in 'Amazing Fantasy #15' in August 1962.",
    "Created by writer-editor Stan Lee and artist Steve Ditko.",
    "His web fluid is super-strong but dissolves naturally in about an hour.",
    "Peter Parker has worked as a freelance photographer for the Daily Bugle.",
    "Miles Morales took up the mantle after Peter Parker's passing in the Ultimate Universe."
  ];

  const movies = [
    { title: "Tobey Maguire Trilogy", years: "2002 - 2007", director: "Sam Raimi" },
    { title: "The Amazing Spider-Man", years: "2012 - 2014", director: "Marc Webb" },
    { title: "MCU Spider-Man Trilogy", years: "2017 - 2021", director: "Jon Watts" },
    { title: "Into the Spider-Verse", years: "2018 - 2023", director: "Sony Animation" }
  ];



  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #090e1c, #07070a)", minHeight: "100vh" }}>
      <main className="container">
        
        {/* Page Title & Intro */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="comic-badge" style={{ background: "var(--spidey-yellow)", marginBottom: "1rem" }}>
            EARTH-616 CHAMPION
          </span>
          <h1 style={{ fontSize: "4.5rem", textShadow: "4px 4px 0px #000", color: "#ffffff", marginBottom: "1rem" }}>
            Spider-Man
          </h1>
          <p style={{
            fontFamily: "var(--font-comic)",
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Peter Parker was an ordinary high school student who gained spectacular spider-like powers after being bitten by a radioactive spider. Now, he swings through New York fighting crime, guided by one rule: With great power comes great responsibility.
          </p>
        </div>

        {/* Character Overview Panel */}
        <div className="comic-card animate-float" style={{ borderLeft: "8px solid var(--spidey-red)", marginBottom: "3rem", background: "#111827" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--spidey-yellow)" }}>Character Biography</h2>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <p style={{ lineHeight: "1.7", color: "#f3f4f6", fontFamily: "var(--font-sans)", marginBottom: "1rem" }}>
                Peter Parker grew up as an orphaned science prodigy in Queens, raised by his loving Aunt May and Uncle Ben. His life changed forever during a science exhibition when a stray radioactive spider bit his hand, mutating his DNA. 
              </p>
              <p style={{ lineHeight: "1.7", color: "#f3f4f6", fontFamily: "var(--font-sans)" }}>
                After initially using his powers for fame and fortune, Peter allowed a burglar to escape, who later went on to murder his beloved Uncle Ben. Heartbroken, Peter realized he must use his abilities for the betterment of society, balancing his crime-fighting adventures with high school, college, and a chaotic personal life.
              </p>
            </div>
            <div style={{
              width: "160px",
              height: "160px",
              background: "#1f2937",
              border: "3px solid #000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto"
            }}>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="42" fill="var(--spidey-red)" stroke="#000" strokeWidth="4" />
                <path d="M50 8 L50 92 M8 50 L92 50 M20 20 L80 80 M20 80 L80 20" stroke="#000" strokeWidth="2.5" />
                <path d="M22 45 C22 30, 48 30, 48 45 C48 50, 32 60, 22 45 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
                <path d="M78 45 C78 30, 52 30, 52 45 C52 50, 68 60, 78 45 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Powers and Villains Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          
          {/* Powers Card */}
          <div className="comic-card" style={{ background: "#0c1524", borderColor: "var(--spidey-blue-light)" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "3px solid #000", paddingBottom: "0.5rem" }}>
              Powers & Abilities
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {powers.map((p) => (
                <div key={p.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", fontWeight: "bold" }}>
                    <span style={{ fontFamily: "var(--font-comic)" }}>{p.name}</span>
                    <span style={{ color: "var(--spidey-yellow)" }}>{p.level}%</span>
                  </div>
                  <div style={{ width: "100%", height: "12px", background: "#1f2937", border: "2px solid #000" }}>
                    <div style={{ width: `${p.level}%`, height: "100%", background: "var(--spidey-red)" }} />
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "0.25rem" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Villains Card */}
          <div className="comic-card" style={{ background: "#0a1c12", borderColor: "#10b981" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "3px solid #000", paddingBottom: "0.5rem" }}>
              Famous Villains
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {villains.map((v) => (
                <div key={v.name} style={{ borderLeft: `4px solid ${v.color}`, paddingLeft: "0.75rem" }}>
                  <h3 style={{ fontSize: "1.2rem", color: v.color, textShadow: "none" }}>{v.name}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Fun Facts & Movie Appearances Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
          
          {/* Fun Facts */}
          <div className="comic-card" style={{ background: "#1e1b4b" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Fun Facts</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {facts.map((fact, index) => (
                <li key={index} style={{
                  display: "flex",
                  gap: "0.75rem",
                  fontFamily: "var(--font-comic)",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  alignItems: "flex-start"
                }}>
                  <span style={{ color: "var(--spidey-yellow)", fontSize: "1.2rem" }}>🕸️</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Movie Appearances */}
          <div className="comic-card" style={{ background: "#111116" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Movie Legacy</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {movies.map((m) => (
                <div key={m.title} style={{
                  background: "#181825",
                  border: "2px solid #000",
                  padding: "0.75rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", textShadow: "none", color: "#fff" }}>{m.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Directed by {m.director}</p>
                  </div>
                  <span className="comic-badge" style={{ background: "var(--spidey-yellow)", fontSize: "0.75rem" }}>
                    {m.years}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>



      </main>
    </div>
  );
}
