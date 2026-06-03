"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

interface Joke {
  setup: string;
  punchline: string;
  category: "Spider-Man" | "Spider-Gwen" | "General";
}

export default function JokesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [randomJoke, setRandomJoke] = useState<Joke | null>(null);
  const [revealRandom, setRevealRandom] = useState(false);
  const [revealedJokes, setRevealedJokes] = useState<Record<number, boolean>>({});

  const jokesList: Joke[] = [
    {
      setup: "Why does Spider-Man always get high-speed internet?",
      punchline: "Because he's a master of the Web!",
      category: "Spider-Man"
    },
    {
      setup: "Why does Spider-Gwen make such a fantastic drummer?",
      punchline: "Because she knows exactly how to hit the web-beats!",
      category: "Spider-Gwen"
    },
    {
      setup: "What is Spider-Man's favorite day of the week?",
      punchline: "Fly-day!",
      category: "Spider-Man"
    },
    {
      setup: "What does Peter Parker call a photo he takes of himself swinging?",
      punchline: "A self-web portrait!",
      category: "Spider-Man"
    },
    {
      setup: "Why did Spider-Man join the computer science club?",
      punchline: "To improve his web development skills!",
      category: "Spider-Man"
    },
    {
      setup: "Why is George Stacy such a bad detective when Gwen is around?",
      punchline: "Because he keeps getting caught in her web of lies!",
      category: "Spider-Gwen"
    },
    {
      setup: "What did Miles Morales say to Peter Parker when he got stuck?",
      punchline: "Looks like you need a web developer!",
      category: "General"
    },
    {
      setup: "Why did the Green Goblin go to the therapist?",
      punchline: "He had too many split personalities riding his glider!",
      category: "General"
    }
  ];

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setLoading(false);
      // Select initial random joke
      const initialJoke = jokesList[Math.floor(Math.random() * jokesList.length)];
      setRandomJoke(initialJoke);
    }
  }, [router]);

  if (loading) return null;

  const handleNextRandomJoke = () => {
    setRevealRandom(false);
    // Select a different joke if possible
    let newJoke = randomJoke;
    while (newJoke === randomJoke) {
      newJoke = jokesList[Math.floor(Math.random() * jokesList.length)];
    }
    setRandomJoke(newJoke);
  };

  const toggleJokeReveal = (idx: number) => {
    setRevealedJokes((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #08080f, #110714)", minHeight: "100vh" }}>
      <main className="container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="comic-badge" style={{ background: "var(--spidey-red)", color: "#fff", marginBottom: "1rem" }}>
            DAILY LAUGHS
          </span>
          <h1 style={{ fontSize: "4rem", textShadow: "4px 4px 0px #000" }}>Daily Bugle Jokes</h1>
          <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "1.1rem" }}>
            Lighten up the multiverse! Laugh at our hand-selected spider-jokes.
          </p>
        </div>

        {/* Random Joke Generator Card (Speech Bubble Style) */}
        {randomJoke && (
          <div style={{ maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--gwen-pink)", textAlign: "center" }}>
              Random Joke Generator
            </h2>
            <div className="speech-bubble" style={{ marginBottom: "1.5rem", minHeight: "150px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="comic-badge" style={{
                  background: randomJoke.category === "Spider-Man" ? "var(--spidey-red)" : randomJoke.category === "Spider-Gwen" ? "var(--gwen-pink)" : "var(--gwen-teal)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  marginBottom: "0.5rem"
                }}>
                  {randomJoke.category}
                </span>
                <p style={{ fontSize: "1.25rem", margin: "0.5rem 0 1rem 0" }}>
                  {randomJoke.setup}
                </p>
                {revealRandom && (
                  <p style={{
                    fontSize: "1.3rem",
                    color: "var(--spidey-red)",
                    fontWeight: "bold",
                    borderTop: "2px dashed #ccc",
                    paddingTop: "0.75rem",
                    animation: "web-shoot 0.3s ease"
                  }}>
                    💥 {randomJoke.punchline}
                  </p>
                )}
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                {!revealRandom ? (
                  <button onClick={() => setRevealRandom(true)} className="comic-btn btn-spidey" style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>
                    Reveal Punchline!
                  </button>
                ) : (
                  <button onClick={handleNextRandomJoke} className="comic-btn btn-gwen" style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>
                    Hit Me Again! 🕸️
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Jokes Grid Section */}
        <div style={{ borderTop: "4px solid #000", paddingTop: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textShadow: "3px 3px 0px #000" }}>
            Comic Card Jokes
          </h2>
          <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", marginBottom: "2rem" }}>
            Click on any card to toggle the punchline reveal!
          </p>

          <div className="comic-grid">
            {jokesList.map((joke, idx) => {
              const isRevealed = !!revealedJokes[idx];
              const categoryColor = joke.category === "Spider-Man" ? "var(--spidey-red)" : joke.category === "Spider-Gwen" ? "var(--gwen-pink)" : "var(--gwen-teal)";
              
              return (
                <div
                  key={idx}
                  className="comic-card"
                  onClick={() => toggleJokeReveal(idx)}
                  style={{
                    cursor: "pointer",
                    background: isRevealed ? "#1d1326" : "#111116",
                    borderColor: isRevealed ? categoryColor : "#000",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "180px"
                  }}
                >
                  <div>
                    <span className="comic-badge" style={{
                      background: categoryColor,
                      color: "#fff",
                      fontSize: "0.7rem",
                      marginBottom: "0.75rem",
                      boxShadow: "none"
                    }}>
                      {joke.category}
                    </span>
                    <p style={{ fontFamily: "var(--font-comic)", fontWeight: "bold", fontSize: "1.1rem", lineHeight: "1.4", margin: "0.5rem 0" }}>
                      "{joke.setup}"
                    </p>
                  </div>
                  
                  <div style={{ marginTop: "1rem" }}>
                    {isRevealed ? (
                      <p style={{ color: "var(--gwen-teal)", fontWeight: "bold", fontSize: "1.1rem", animation: "web-shoot 0.2s ease" }}>
                        ⚡ {joke.punchline}
                      </p>
                    ) : (
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                        Click card to reveal...
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
