"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default function SpiderGwenPage() {
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
    { name: "Superhuman Agility", level: 97, desc: "Near-flawless coordination and gymnastics." },
    { name: "Dimensional Travel", level: 80, desc: "Uses a ticket device to leap between dimensions." },
    { name: "Spider-Sense", level: 90, desc: "Omnidirectional precognitive danger warning." },
    { name: "Wall-Crawling", level: 92, desc: "Clings to ceilings and skyscrapers with ease." },
    { name: "Rhythmic Combat", level: 85, desc: "Integrates drummer beats and rhythms into fighting style." }
  ];

  const facts = [
    "Hails from Earth-65 where she was bitten instead of Peter Parker.",
    "Plays the drums in a rock band called 'The Mary Janes' led by MJ Watson.",
    "Adopted the superhero name 'Ghost-Spider' to differentiate herself in the multiverse.",
    "Her costume was designed by Robbie Rodriguez and is widely considered one of the best modern designs.",
    "Her father, George Stacy, is the NYPD Captain in her home universe."
  ];

  const storylines = [
    { title: "Most Wanted?", issues: "Edge of Spider-Verse #2", desc: "Gwen's first-ever appearance. Peter Parker becomes the Lizard and tragically dies, framing Gwen." },
    { title: "Greater Power", issues: "Spider-Gwen Vol. 1", desc: "Gwen tries to balance high school drama, her rock band rehearsals, and being hunted by her father." },
    { title: "Spider-Women", issues: "Crossover Event", desc: "Gwen teams up with Silk and Spider-Woman (Jessica Drew) for a cross-dimensional adventure." },
    { title: "Gwenom", issues: "Spider-Gwen #25-29", desc: "Gwen binds with the Earth-65 Venom symbiote to protect her dad, dealing with raw dark aggression." }
  ];



  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #110714, #08080c)", minHeight: "100vh" }}>
      <main className="container">
        
        {/* Page Title & Intro */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="comic-badge" style={{ background: "var(--gwen-pink)", color: "#fff", marginBottom: "1rem", boxShadow: "2px 2px 0px var(--gwen-teal)" }}>
            EARTH-65 HEROINE
          </span>
          <h1 style={{ fontSize: "4.5rem", textShadow: "4px 4px 0px #000", color: "#ffffff", marginBottom: "1rem" }}>
            Spider-Gwen
          </h1>
          <h2 style={{ fontSize: "1.8rem", color: "var(--gwen-teal)", textShadow: "none", marginBottom: "1rem" }}>
            (Ghost-Spider)
          </h2>
          <p style={{
            fontFamily: "var(--font-comic)",
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            On Earth-65, Gwen Stacy is the one bitten by the radioactive spider. Striking a unique balance between crime-fighting, drumming in her band, and evading the police, Ghost-Spider brings a fresh rock-and-roll vibe to the SpiderVerse.
          </p>
        </div>

        {/* Origin Panel */}
        <div className="comic-card gwen-glow" style={{ borderLeft: "8px solid var(--gwen-pink)", marginBottom: "3rem", background: "#181124" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--gwen-teal)" }}>Origin Story</h2>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <p style={{ lineHeight: "1.7", color: "#f3f4f6", fontFamily: "var(--font-sans)", marginBottom: "1rem" }}>
                Gwen Stacy grew up in New York, a music-loving teenager who often clashed with her strict father, Police Captain George Stacy. One day, she was bitten by a radioactive spider, granting her incredible agility, wall-crawling skills, and a spider-sense. 
              </p>
              <p style={{ lineHeight: "1.7", color: "#f3f4f6", fontFamily: "var(--font-sans)" }}>
                Tragedy struck when her best friend Peter Parker, bullied and desperate, took a serum to become like Gwen. He mutated into the Lizard. During their subsequent battle, Peter died in Gwen's arms. With his dying breath, Peter said he wanted to be special like her. The public branded Gwen a murderer, forcing her into a complex double life.
              </p>
            </div>
            <div style={{
              width: "160px",
              height: "160px",
              background: "#12121c",
              border: "3px solid #000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto"
            }}>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#000" strokeWidth="4" />
                <path d="M15 80 C15 30, 85 30, 85 80 Z" fill="var(--gwen-pink)" stroke="#000" strokeWidth="3" />
                <path d="M25 80 C25 45, 75 45, 75 80 Z" fill="var(--gwen-black)" stroke="#000" strokeWidth="2.5" />
                <ellipse cx="50" cy="70" rx="18" ry="24" fill="#ffffff" stroke="#000" strokeWidth="3.5" />
                <path d="M36 66 Q42 62 44 70" fill="none" stroke="var(--gwen-pink)" strokeWidth="3" />
                <path d="M64 66 Q58 62 56 70" fill="none" stroke="var(--gwen-pink)" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Powers and Storylines */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          
          {/* Powers */}
          <div className="comic-card" style={{ background: "#16151a", borderColor: "var(--gwen-pink)" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "3px solid #000", paddingBottom: "0.5rem" }}>
              Powers & Abilities
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {powers.map((p) => (
                <div key={p.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", fontWeight: "bold" }}>
                    <span style={{ fontFamily: "var(--font-comic)" }}>{p.name}</span>
                    <span style={{ color: "var(--gwen-teal)" }}>{p.level}%</span>
                  </div>
                  <div style={{ width: "100%", height: "12px", background: "#1f2937", border: "2px solid #000" }}>
                    <div style={{ width: `${p.level}%`, height: "100%", background: "var(--gwen-pink)" }} />
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "0.25rem" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Storylines */}
          <div className="comic-card" style={{ background: "#0c1524", borderColor: "var(--gwen-teal)" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "3px solid #000", paddingBottom: "0.5rem" }}>
              Popular Storylines
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {storylines.map((s) => (
                <div key={s.title} style={{ borderLeft: "4px solid var(--gwen-teal)", paddingLeft: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.2rem", color: "var(--gwen-pink)", textShadow: "none" }}>{s.title}</h3>
                    <span style={{ fontSize: "0.75rem", background: "var(--gwen-teal)", color: "#000", padding: "0.05rem 0.25rem", fontWeight: "bold" }}>
                      {s.issues}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#cbd5e1", marginTop: "0.25rem" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Interesting Facts */}
        <div className="comic-card" style={{ background: "#111116", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--gwen-pink)" }}>Interesting Facts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {facts.map((fact, index) => (
              <div key={index} style={{
                background: "#1b1424",
                border: "3.5px solid #000",
                boxShadow: "3px 3px 0px #000",
                padding: "1rem",
                borderRadius: "4px",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start"
              }}>
                <span style={{ fontSize: "1.5rem" }}>🥁</span>
                <p style={{ fontFamily: "var(--font-comic)", fontSize: "0.95rem", fontWeight: "bold", color: "#fafafa" }}>
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>



      </main>
    </div>
  );
}
