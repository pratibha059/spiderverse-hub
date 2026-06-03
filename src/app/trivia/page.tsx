"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

interface TriviaQuestion {
  question: string;
  answer: boolean;
  explanation: string;
}

export default function TriviaPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<"spidey" | "gwen">("spidey");

  // State for Spider-Man Trivia
  const [spideyIndex, setSpideyIndex] = useState(0);
  const [spideyScore, setSpideyScore] = useState(0);
  const [spideyAnswered, setSpideyAnswered] = useState<boolean | null>(null);
  const [spideyFeedback, setSpideyFeedback] = useState("");

  // State for Spider-Gwen Trivia
  const [gwenIndex, setGwenIndex] = useState(0);
  const [gwenScore, setGwenScore] = useState(0);
  const [gwenAnswered, setGwenAnswered] = useState<boolean | null>(null);
  const [gwenFeedback, setGwenFeedback] = useState("");

  const spideyQuestions: TriviaQuestion[] = [
    {
      question: "Spider-Man's first comic book appearance was in 'Amazing Fantasy #15'.",
      answer: true,
      explanation: "Correct! Stan Lee and Steve Ditko introduced him in this final issue of the anthology series in 1962."
    },
    {
      question: "Peter Parker's web fluid is permanent and never dissolves.",
      answer: false,
      explanation: "That's false! His web fluid is specifically engineered to naturally dissolve in about an hour so he doesn't leave permanent clutter."
    },
    {
      question: "Miles Morales belongs originally to Earth-616, the main Marvel Universe.",
      answer: false,
      explanation: "Wrong! Miles Morales originally debuted as the Spider-Man of Earth-1610 (the Ultimate Universe) before migrating to Earth-616 after Secret Wars."
    },
    {
      question: "Uncle Ben was killed by a robber that Peter Parker had previously let escape.",
      answer: true,
      explanation: "Yes, tragically true. Peter let a burglar run past him in a TV studio, who later ended up killing Uncle Ben during a break-in."
    },
    {
      question: "Spider-Man was once a member of the Fantastic Four, temporarily renamed the Future Foundation.",
      answer: true,
      explanation: "Correct! After Johnny Storm's apparent death, Peter joined the group wearing a black-and-white stealth suit."
    }
  ];

  const gwenQuestions: TriviaQuestion[] = [
    {
      question: "Spider-Gwen plays the guitar in her rock band 'The Mary Janes'.",
      answer: false,
      explanation: "Actually, false! Gwen is the drummer of 'The Mary Janes', releasing her stress on the drum set."
    },
    {
      question: "In Gwen's universe (Earth-65), Peter Parker mutated into the Lizard and died.",
      answer: true,
      explanation: "True and tragic. Peter Parker wanted to be special like Gwen, drank a mutation serum, became the Lizard, and died during their fight."
    },
    {
      question: "Gwen Stacy's superhero name in comics was officially changed to 'Ghost-Spider' to avoid confusion.",
      answer: true,
      explanation: "Yes! She adopted 'Ghost-Spider' as her official codename to stop villains in the multiverse from finding her civilian identity."
    },
    {
      question: "Gwen Stacy's father George Stacy is a high-ranking officer in the NYPD.",
      answer: true,
      explanation: "Correct! George Stacy is the Police Captain, which created severe tension since he was hunting the 'Spider-Woman' vigilante."
    },
    {
      question: "Gwen Stacy is from Earth-1610.",
      answer: false,
      explanation: "Incorrect. Gwen Stacy (Ghost-Spider) resides on Earth-65, whereas Miles Morales is from Earth-1610."
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

  const handleSpideyAnswer = (guess: boolean) => {
    if (spideyAnswered !== null) return;
    const currentQ = spideyQuestions[spideyIndex];
    if (guess === currentQ.answer) {
      setSpideyScore((prev) => prev + 1);
      setSpideyFeedback("CORRECT! " + currentQ.explanation);
    } else {
      setSpideyFeedback("THWIP! WRONG! " + currentQ.explanation);
    }
    setSpideyAnswered(guess);
  };

  const handleGwenAnswer = (guess: boolean) => {
    if (gwenAnswered !== null) return;
    const currentQ = gwenQuestions[gwenIndex];
    if (guess === currentQ.answer) {
      setGwenScore((prev) => prev + 1);
      setGwenFeedback("CORRECT! " + currentQ.explanation);
    } else {
      setGwenFeedback("THWIP! WRONG! " + currentQ.explanation);
    }
    setGwenAnswered(guess);
  };

  const handleNextSpidey = () => {
    setSpideyAnswered(null);
    setSpideyFeedback("");
    setSpideyIndex((prev) => prev + 1);
  };

  const handleNextGwen = () => {
    setGwenAnswered(null);
    setGwenFeedback("");
    setGwenIndex((prev) => prev + 1);
  };

  const resetSpidey = () => {
    setSpideyIndex(0);
    setSpideyScore(0);
    setSpideyAnswered(null);
    setSpideyFeedback("");
  };

  const resetGwen = () => {
    setGwenIndex(0);
    setGwenScore(0);
    setGwenAnswered(null);
    setGwenFeedback("");
  };

  const activeSpideyQ = spideyIndex < spideyQuestions.length ? spideyQuestions[spideyIndex] : null;
  const activeGwenQ = gwenIndex < gwenQuestions.length ? gwenQuestions[gwenIndex] : null;

  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #08080c, #16151a)", minHeight: "100vh" }}>
      <main className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="comic-badge" style={{ background: "var(--spidey-yellow)", color: "#000", marginBottom: "1rem" }}>
            MULTIVERSE CHALLENGE
          </span>
          <h1 style={{ fontSize: "4rem", textShadow: "4px 4px 0px #000" }}>Spider Trivia</h1>
          <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "1.1rem" }}>
            Test your knowledge of Peter Parker (Earth-616) and Gwen Stacy (Earth-65)!
          </p>
        </div>

        {/* Category Toggles */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
          <button
            onClick={() => setCategory("spidey")}
            className="comic-btn btn-spidey"
            style={{
              transform: category === "spidey" ? "scale(1.1) rotate(-2deg)" : "scale(0.95)",
              boxShadow: category === "spidey" ? "6px 6px 0px #000" : "2px 2px 0px #000",
              opacity: category === "spidey" ? 1 : 0.7
            }}
          >
            Spider-Man Deck 🕸️
          </button>
          <button
            onClick={() => setCategory("gwen")}
            className="comic-btn btn-gwen"
            style={{
              transform: category === "gwen" ? "scale(1.1) rotate(2deg)" : "scale(0.95)",
              boxShadow: category === "gwen" ? "6px 6px 0px var(--gwen-teal)" : "2px 2px 0px #000",
              opacity: category === "gwen" ? 1 : 0.7
            }}
          >
            Spider-Gwen Deck 🥁
          </button>
        </div>

        {/* Scoreboard */}
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#111116",
          border: "3.5px solid #000",
          boxShadow: "4px 4px 0px #000",
          padding: "1.25rem",
          borderRadius: "4px",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem"
        }}>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textShadow: "none", color: "var(--spidey-red)" }}>Spider-Man Score</h3>
            <p style={{ fontSize: "2rem", fontFamily: "var(--font-title)", color: "#fff" }}>
              {spideyScore} / {spideyQuestions.length}
            </p>
          </div>
          <div style={{ width: "2px", background: "#333" }} />
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textShadow: "none", color: "var(--gwen-pink)" }}>Spider-Gwen Score</h3>
            <p style={{ fontSize: "2rem", fontFamily: "var(--font-title)", color: "#fff" }}>
              {gwenScore} / {gwenQuestions.length}
            </p>
          </div>
        </div>

        {/* Trivia Area */}
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {category === "spidey" ? (
            /* Spider-Man Deck */
            activeSpideyQ ? (
              <div className="comic-card" style={{ background: "#0a1020", borderColor: "var(--spidey-red)", padding: "2.5rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span className="comic-badge" style={{ background: "var(--spidey-red)", color: "#fff", textShadow: "none" }}>
                    QUESTION {spideyIndex + 1} OF {spideyQuestions.length}
                  </span>
                </div>
                
                <h3 style={{ fontSize: "1.6rem", textShadow: "none", lineHeight: "1.4", margin: "1.5rem 0", fontFamily: "var(--font-sans)", color: "#fff" }}>
                  "{activeSpideyQ.question}"
                </h3>

                {/* Answers buttons */}
                {spideyAnswered === null ? (
                  <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                    <button onClick={() => handleSpideyAnswer(true)} className="comic-btn btn-spidey" style={{ flex: 1, justifyContent: "center" }}>
                      TRUE
                    </button>
                    <button onClick={() => handleSpideyAnswer(false)} className="comic-btn btn-spidey" style={{ flex: 1, justifyContent: "center", background: "var(--spidey-blue)" }}>
                      FALSE
                    </button>
                  </div>
                ) : (
                  /* Feedback Bubble */
                  <div style={{ marginTop: "2rem" }}>
                    <div className="speech-bubble" style={{
                      borderColor: spideyAnswered === activeSpideyQ.answer ? "#22c55e" : "var(--spidey-red)",
                      background: "#fff",
                      marginBottom: "1.5rem"
                    }}>
                      <p style={{ fontSize: "1.1rem" }}>{spideyFeedback}</p>
                    </div>
                    <button onClick={handleNextSpidey} className="comic-btn btn-spidey">
                      Next Question &rarr;
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Spider-Man Results */
              <div className="comic-card text-center" style={{ background: "#0a1020", borderColor: "var(--spidey-red)" }}>
                <h2 style={{ fontSize: "2.5rem", color: "var(--spidey-yellow)", marginBottom: "1rem" }}>Deck Complete!</h2>
                <p style={{ fontFamily: "var(--font-comic)", fontSize: "1.2rem", color: "#cbd5e1", marginBottom: "1.5rem" }}>
                  You got {spideyScore} out of {spideyQuestions.length} questions correct!
                </p>
                <button onClick={resetSpidey} className="comic-btn btn-spidey">
                  Play Again 🕸️
                </button>
              </div>
            )
          ) : (
            /* Spider-Gwen Deck */
            activeGwenQ ? (
              <div className="comic-card" style={{ background: "#160e1a", borderColor: "var(--gwen-pink)", padding: "2.5rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span className="comic-badge" style={{ background: "var(--gwen-pink)", color: "#fff", textShadow: "none" }}>
                    QUESTION {gwenIndex + 1} OF {gwenQuestions.length}
                  </span>
                </div>
                
                <h3 style={{ fontSize: "1.6rem", textShadow: "none", lineHeight: "1.4", margin: "1.5rem 0", fontFamily: "var(--font-sans)", color: "#fff" }}>
                  "{activeGwenQ.question}"
                </h3>

                {/* Answers buttons */}
                {gwenAnswered === null ? (
                  <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                    <button onClick={() => handleGwenAnswer(true)} className="comic-btn btn-gwen" style={{ flex: 1, justifyContent: "center" }}>
                      TRUE
                    </button>
                    <button onClick={() => handleGwenAnswer(false)} className="comic-btn btn-gwen" style={{ flex: 1, justifyContent: "center", background: "var(--gwen-black)" }}>
                      FALSE
                    </button>
                  </div>
                ) : (
                  /* Feedback Bubble */
                  <div style={{ marginTop: "2rem" }}>
                    <div className="speech-bubble" style={{
                      borderColor: gwenAnswered === activeGwenQ.answer ? "#22c55e" : "var(--gwen-pink)",
                      background: "#fff",
                      marginBottom: "1.5rem"
                    }}>
                      <p style={{ fontSize: "1.1rem" }}>{gwenFeedback}</p>
                    </div>
                    <button onClick={handleNextGwen} className="comic-btn btn-gwen">
                      Next Question &rarr;
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Spider-Gwen Results */
              <div className="comic-card text-center" style={{ background: "#160e1a", borderColor: "var(--gwen-pink)" }}>
                <h2 style={{ fontSize: "2.5rem", color: "var(--gwen-teal)", marginBottom: "1rem" }}>Deck Complete!</h2>
                <p style={{ fontFamily: "var(--font-comic)", fontSize: "1.2rem", color: "#cbd5e1", marginBottom: "1.5rem" }}>
                  You got {gwenScore} out of {gwenQuestions.length} questions correct!
                </p>
                <button onClick={resetGwen} className="comic-btn btn-gwen">
                  Play Again 🥁
                </button>
              </div>
            )
          )}
        </div>

      </main>
    </div>
  );
}
