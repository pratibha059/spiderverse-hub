"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

interface Question {
  text: string;
  options: {
    text: string;
    hero: "peter" | "miles" | "gwen" | "noir";
  }[];
}

export default function QuizPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<("peter" | "miles" | "gwen" | "noir")[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [result, setResult] = useState<{ name: string; desc: string; color: string; symbol: string } | null>(null);

  const questions: Question[] = [
    {
      text: "What is your ideal weekend hobby?",
      options: [
        { text: "Coding software and building cool gadgets", hero: "peter" },
        { text: "Spray painting graffiti and exploring Brooklyn", hero: "miles" },
        { text: "Drumming in a rock band with friends", hero: "gwen" },
        { text: "Brooding in shadows and reading detective books", hero: "noir" }
      ]
    },
    {
      text: "Which fashion statement best represents your style?",
      options: [
        { text: "A casual science t-shirt, jeans, and a lab coat", hero: "peter" },
        { text: "A comfortable hoodie, shorts, and cool Nike Jordans", hero: "miles" },
        { text: "A sleek hooded jacket with vibrant neon pink highlights", hero: "gwen" },
        { text: "A dark trenchcoat and a matching fedora hat", hero: "noir" }
      ]
    },
    {
      text: "How do you handle tough situations or decisions?",
      options: [
        { text: "Calculate the exact outcomes and analyze the physics", hero: "peter" },
        { text: "Trust your gut feelings and take a leap of faith", hero: "miles" },
        { text: "Listen to your inner rhythm and rally team support", hero: "gwen" },
        { text: "Keep it simple and throw a solid punch in the dark", hero: "noir" }
      ]
    },
    {
      text: "What is your absolute favorite music genre?",
      options: [
        { text: "Classic alternative rock and pop hits", hero: "peter" },
        { text: "Hip-hop, lo-fi beats, and modern R&B", hero: "miles" },
        { text: "Indie punk rock and energetic drum solos", hero: "gwen" },
        { text: "Dark jazz, blues, or old-school 1930s swing", hero: "noir" }
      ]
    },
    {
      text: "Where is your favorite place in the city to hang out?",
      options: [
        { text: "A science lab or quiet suburban neighborhood in Queens", hero: "peter" },
        { text: "A vibrant street court or subway yard in Brooklyn", hero: "miles" },
        { text: "A rooftop overlooking the bright neon skyline of Manhattan", hero: "gwen" },
        { text: "A dark alleyway or a vintage library corner", hero: "noir" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  const handleSelectOption = (hero: "peter" | "miles" | "gwen" | "noir") => {
    const updatedAnswers = [...answers, hero];
    setAnswers(updatedAnswers);

    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      // Calculate result
      const counts = { peter: 0, miles: 0, gwen: 0, noir: 0 };
      updatedAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
      });

      // Find hero with highest count
      let selectedHero: "peter" | "miles" | "gwen" | "noir" = "peter";
      let maxCount = -1;
      Object.entries(counts).forEach(([heroKey, val]) => {
        if (val > maxCount) {
          maxCount = val;
          selectedHero = heroKey as "peter" | "miles" | "gwen" | "noir";
        }
      });

      const heroResults = {
        peter: {
          name: "Peter Parker (Classic Spider-Man)",
          desc: "You are the original web-slinger! You are a brilliant science prodigy who relies on your brain, engineering skills, and a strong moral compass to solve problems. With great power comes great responsibility!",
          color: "var(--spidey-red)",
          symbol: "🕸️"
        },
        miles: {
          name: "Miles Morales (Ultimate Spider-Man)",
          desc: "You are the graffiti-spraying, hip-hop loving Spider-Man of Brooklyn! You deal with issues in your own unique way, relying on style, gut instincts, and taking that crucial leap of faith.",
          color: "var(--spidey-blue-light)",
          symbol: "⚡"
        },
        gwen: {
          name: "Gwen Stacy (Ghost-Spider)",
          desc: "You are the drumming rockstar Ghost-Spider! You are highly independent, energetic, and rhythm-oriented. You work beautifully in a team and swing with incredible grace.",
          color: "var(--gwen-pink)",
          symbol: "🥁"
        },
        noir: {
          name: "Peter Parker (Spider-Man Noir)",
          desc: "You are the brooding detective of the 1930s! You love drinking black coffee, standing in shadows, and dealing with bad guys using a classic, direct approach. Matches best with old-school blues.",
          color: "#94a3b8",
          symbol: "🕵️"
        }
      };

      setResult(heroResults[selectedHero]);
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQIndex(0);
    setAnswers([]);
    setQuizFinished(false);
    setResult(null);
  };

  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #08080c, #0c1020)", minHeight: "100vh" }}>
      <main className="container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="comic-badge" style={{ background: "var(--gwen-teal)", color: "#000", marginBottom: "1rem" }}>
            PERSONALITY SCANNER
          </span>
          <h1 style={{ fontSize: "4rem", textShadow: "4px 4px 0px #000" }}>Spider-Hero Quiz</h1>
          <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "1.1rem" }}>
            Which web-slinger from the multiverse matches your core traits?
          </p>
        </div>

        {/* Quiz Body */}
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {!quizFinished ? (
            /* Active Question Card */
            <div className="comic-card" style={{ padding: "2.5rem 2rem", borderTop: "6px solid var(--gwen-teal)" }}>
              {/* Progress bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <span className="comic-badge" style={{ background: "var(--spidey-red)", color: "#fff", textShadow: "none" }}>
                  QUESTION {currentQIndex + 1} OF {questions.length}
                </span>
                <span style={{ fontFamily: "var(--font-comic)", fontWeight: "bold" }}>
                  {Math.round(((currentQIndex) / questions.length) * 100)}% Complete
                </span>
              </div>
              
              <div style={{ width: "100%", height: "10px", background: "#1f2937", border: "2px solid #000", borderRadius: "3px", marginBottom: "2rem" }}>
                <div style={{ width: `${((currentQIndex) / questions.length) * 100}%`, height: "100%", background: "var(--gwen-teal)", transition: "width 0.3s ease" }} />
              </div>

              <h2 style={{ fontSize: "1.8rem", textShadow: "none", color: "#ffffff", marginBottom: "2rem", lineHeight: "1.3" }}>
                {questions[currentQIndex].text}
              </h2>

              {/* Options list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {questions[currentQIndex].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.hero)}
                    className="comic-card"
                    style={{
                      textAlign: "left",
                      padding: "1rem 1.5rem",
                      cursor: "pointer",
                      background: "#1f2937",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      borderWidth: "3px"
                    }}
                  >
                    <span style={{
                      width: "30px",
                      height: "30px",
                      background: "#000",
                      color: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-title)",
                      flexShrink: 0
                    }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span style={{ fontSize: "1.05rem", fontWeight: "bold", fontFamily: "var(--font-sans)" }}>
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Panel */
            result && (
              <div className="comic-card text-center animate-float" style={{ padding: "3rem 2rem", borderTop: `8px solid ${result.color}`, background: "#11111a" }}>
                <span style={{ fontSize: "4rem", display: "inline-block", marginBottom: "1rem" }}>
                  {result.symbol}
                </span>
                <h2 style={{ fontSize: "2.8rem", color: result.color, marginBottom: "1.5rem", textShadow: "3px 3px 0px #000" }}>
                  You are {result.name}!
                </h2>
                
                <div className="speech-bubble" style={{ background: "#ffffff", color: "#000", textAlign: "left", marginBottom: "2.5rem" }}>
                  <p style={{ fontSize: "1.15rem", lineHeight: "1.6" }}>
                    {result.desc}
                  </p>
                </div>

                <button onClick={restartQuiz} className="comic-btn btn-spidey" style={{ padding: "0.85rem 2rem" }}>
                  Restart Quiz 🕸️
                </button>
              </div>
            )
          )}
        </div>

      </main>
    </div>
  );
}
