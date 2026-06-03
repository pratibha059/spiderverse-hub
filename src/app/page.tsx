"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";
import { MOCK_BLOGS } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import CharacterImage from "@/components/CharacterImage";
import styles from "./page.module.css";

const FACTS_DATABASE = [
  "Peter Parker formulated his signature high-tensile web fluid in a high school chemistry lab.",
  "Gwen Stacy of Earth-65 is the drummer of the rock band 'The Mary Janes', fronted by Mary Jane Watson.",
  "Miles Morales has two unique powers Peter Parker doesn't: electric Venom Blasts and active camouflage camouflage.",
  "Miguel O'Hara (Spider-Man 2099) does not have a Spider-Sense, but has zoom-vision, fangs, and solid light webbing.",
  "Spider-Ham (Peter Porker) was originally a spider who mutated after being bitten by a radioactive pig.",
  "Peni Parker co-pilots the SP//dr robotic mech suit via a mental bond with a spider that shares her genetic profile."
];

const JOKES_DATABASE = [
  { setup: "Why does Spider-Man do so well in school?", punchline: "Because he pays attention on the Web!" },
  { setup: "What is Peter Parker's favorite food?", punchline: "Spaghetti-webs!" },
  { setup: "Why did Spider-Gwen get kicked out of the concert?", punchline: "She kept dropping the web-beats!" },
  { setup: "Why is Spider-Man Noir so bad at tennis?", punchline: "Because he prefers playing in the shadows!" },
  { setup: "What do you call a spider with 8 eyes?", punchline: "A spiiiiiiiider!" }
];

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Daily Fact State
  const [factIndex, setFactIndex] = useState(0);
  const [favoriteFacts, setFavoriteFacts] = useState<string[]>([]);
  
  // Daily Joke State
  const [jokeIndex, setJokeIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);
  const [favoriteJokes, setFavoriteJokes] = useState<{setup: string, punchline: string}[]>([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setLoading(false);
      
      // Load favorites from local storage
      const savedFacts = localStorage.getItem("fav_facts") || "[]";
      setFavoriteFacts(JSON.parse(savedFacts));
      
      const savedJokes = localStorage.getItem("fav_jokes") || "[]";
      setFavoriteJokes(JSON.parse(savedJokes));
      
      // Set random initial fact and joke
      setFactIndex(Math.floor(Math.random() * FACTS_DATABASE.length));
      setJokeIndex(Math.floor(Math.random() * JOKES_DATABASE.length));
    }
  }, [router]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ width: "56px", height: "56px", border: "5px solid #000", borderTopColor: "var(--spidey-red)", borderRadius: "50%", animation: "spin 0.6s linear infinite" }} />
        <span style={{ color: "#ffffff", fontFamily: "var(--font-title)", fontSize: "1.5rem", letterSpacing: "0.05em" }}>
          TELEPORTING TO CENTRAL PORTAL...
        </span>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Toggle Fact Favorite
  const handleToggleFactFav = () => {
    const currentFact = FACTS_DATABASE[factIndex];
    let updated: string[];
    if (favoriteFacts.includes(currentFact)) {
      updated = favoriteFacts.filter(f => f !== currentFact);
    } else {
      updated = [...favoriteFacts, currentFact];
    }
    setFavoriteFacts(updated);
    localStorage.setItem("fav_facts", JSON.stringify(updated));
  };

  const handleNextFact = () => {
    setFactIndex((prev) => (prev + 1) % FACTS_DATABASE.length);
  };

  // Toggle Joke Favorite
  const handleToggleJokeFav = () => {
    const currentJoke = JOKES_DATABASE[jokeIndex];
    let updated: {setup: string, punchline: string}[];
    const isFav = favoriteJokes.some(j => j.setup === currentJoke.setup);
    if (isFav) {
      updated = favoriteJokes.filter(j => j.setup !== currentJoke.setup);
    } else {
      updated = [...favoriteJokes, currentJoke];
    }
    setFavoriteJokes(updated);
    localStorage.setItem("fav_jokes", JSON.stringify(updated));
  };

  const handleNextJoke = () => {
    setShowPunchline(false);
    setJokeIndex((prev) => (prev + 1) % JOKES_DATABASE.length);
  };

  const featuredList = [
    { id: "peter", name: "Peter Parker", codename: "Spider-Man", universe: "Earth-616" },
    { id: "gwen", name: "Gwen Stacy", codename: "Ghost-Spider", universe: "Earth-65" },
    { id: "miles", name: "Miles Morales", codename: "Spider-Man", universe: "Earth-1610" },
    { id: "miguel", name: "Miguel O'Hara", codename: "Spider-Man 2099", universe: "Earth-928" },
    { id: "ham", name: "Peter Porker", codename: "Spider-Ham", universe: "Earth-8311" },
    { id: "peni", name: "Peni Parker", codename: "SP//dr Pilot", universe: "Earth-14512" }
  ];

  const currentFact = FACTS_DATABASE[factIndex];
  const isFactFav = favoriteFacts.includes(currentFact);

  const currentJoke = JOKES_DATABASE[jokeIndex];
  const isJokeFav = favoriteJokes.some(j => j.setup === currentJoke.setup);

  return (
    <div style={{ position: "relative" }}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Parallax Skyline */}
        <div className={styles.skylineBg} />
        <div className={styles.skylineBgFore} />

        {/* Dynamic Spinning Portal Backdrop */}
        <div className={styles.portalContainer}>
          <div className={styles.portalRing} />
          <div className={styles.portalRingInner} />
          <div className={styles.portalCenter} />
        </div>

        <div className={`${styles.heroContent} container`}>
          
          {/* Logo Starburst Header */}
          <div className={styles.logoWrapper}>
            <div className={styles.starburst}>
              <h1 className={styles.heroTitle}>
                Welcome to the <span className={styles.heroTitleHighlight}>SpiderVerse Hub</span>
              </h1>
            </div>
            <p className={styles.heroSubtitle}>
              Assemble with spider-heroes across multiple timelines! Scan profiles, test spider-senses in trivia, 
              generate comic jokes, and customize your own arachnid avatar.
            </p>
          </div>

          {/* Action Plates Row */}
          <div className={styles.platesContainer}>
            <span className="action-plate plate-boom animate-float">BOOM!</span>
            <span className="action-plate plate-thwip" style={{ animationDelay: "1s" }}>THWIP!</span>
            <span className="action-plate plate-pow animate-float" style={{ animationDelay: "2s" }}>POW!</span>
            <span className="action-plate plate-zap" style={{ animationDelay: "1.5s" }}>ZAP!</span>
          </div>

          {/* 3-Panel Comic Book Layout Grid */}
          <div className={styles.comicSplashGrid}>
            
            {/* Panel 1: Spider-Man */}
            <div className={`panel-gutter ${styles.splashPanel} ${styles.panelSpidey}`}>
              <div>
                <div className={styles.panelIllustration}>
                  <CharacterImage characterId="spiderman" alt="Spider-Man mask" width={90} height={90} />
                </div>
                <h3 className={styles.panelCaption} style={{ color: "var(--spidey-red)" }}>Spider-Man</h3>
                <ul className={styles.panelStats}>
                  <li><span>Spider-Sense:</span><span className={styles.statValueSpidey}>95%</span></li>
                  <li><span>Reflexes:</span><span className={styles.statValueSpidey}>98%</span></li>
                  <li><span>Wall-Crawling:</span><span className={styles.statValueSpidey}>92%</span></li>
                </ul>
                <p className={styles.panelText}>
                  Peter Parker is Earth-616's original wall-crawler. Guided by Uncle Ben's legacy of power and responsibility, he protects New York from iconic threats.
                </p>
              </div>
              <div className={styles.panelButtons}>
                <Link href="/spider-man" className="comic-btn btn-spidey" style={{ textDecoration: "none", justifyContent: "center" }}>
                  Meet Spider-Man
                </Link>
              </div>
            </div>

            {/* Panel 2: Spider-Gwen */}
            <div className={`panel-gutter ${styles.splashPanel} ${styles.panelGwen}`}>
              <div>
                <div className={styles.panelIllustration}>
                  <CharacterImage characterId="spider-gwen" alt="Spider-Gwen mask" width={90} height={90} />
                </div>
                <h3 className={styles.panelCaption} style={{ color: "var(--gwen-pink)" }}>Ghost-Spider</h3>
                <ul className={styles.panelStats}>
                  <li><span>Agility:</span><span className={styles.statValueGwen}>97%</span></li>
                  <li><span>Rhythm/Combat:</span><span className={styles.statValueGwen}>85%</span></li>
                  <li><span>Dimensional Leap:</span><span className={styles.statValueGwen}>80%</span></li>
                </ul>
                <p className={styles.panelText}>
                  Gwen Stacy of Earth-65 is the rock-drumming, web-slinging Ghost-Spider. Balancing rehearsals and crime-fighting, she brings style to the multiverse.
                </p>
              </div>
              <div className={styles.panelButtons}>
                <Link href="/spider-gwen" className="comic-btn btn-gwen" style={{ textDecoration: "none", justifyContent: "center" }}>
                  Meet Spider-Gwen
                </Link>
              </div>
            </div>

            {/* Panel 3: Interactive Hub */}
            <div className={`panel-gutter ${styles.splashPanel} ${styles.panelHub}`}>
              <div>
                <div className={styles.panelIllustration}>
                  <svg width="90" height="90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--gwen-teal)" strokeWidth="4" opacity="0.6" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="var(--spidey-yellow)" strokeWidth="3" opacity="0.8" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="var(--gwen-teal)" strokeWidth="2.5" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="var(--gwen-teal)" strokeWidth="2.5" />
                    <circle cx="50" cy="50" r="5" fill="#fff" />
                  </svg>
                </div>
                <h3 className={styles.panelCaption} style={{ color: "var(--gwen-teal)" }}>Multiverse Portal</h3>
                <ul className={styles.panelStats}>
                  <li><span>Trivia Decks:</span><span style={{ color: "#fff" }}>2 Active</span></li>
                  <li><span>Humor Archives:</span><span style={{ color: "#fff" }}>8 Records</span></li>
                  <li><span>Personality Test:</span><span style={{ color: "#fff" }}>Online</span></li>
                </ul>
                <p className={styles.panelText}>
                  Interact with the dimensions! Test your spider-sense in trivia, laugh at Daily Bugle comic jokes, and scan your traits to see which hero mask matches you.
                </p>
              </div>
              <div className={styles.panelButtons}>
                <Link href="/quiz" className="comic-btn btn-gwen" style={{ textDecoration: "none", justifyContent: "center", background: "var(--gwen-purple)", borderColor: "#000" }}>
                  Take the Quiz 🧬
                </Link>
                <Link href="/trivia" className="comic-btn btn-spidey" style={{ textDecoration: "none", justifyContent: "center", background: "var(--spidey-blue)", borderColor: "#000" }}>
                  Trivia Challenge
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Body Grid */}
      <main className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        
        {/* Character of the week */}
        <section className={styles.featuredSection} style={{ marginTop: 0 }}>
          <h2 className={styles.featuredTitle}>Character of the Week</h2>
          <div className={`comic-card ${styles.characterOfWeekCard}`}>
            <div className={styles.weekCharImage}>
              <CharacterImage characterId="miles-morales" alt="Miles Morales Illustration" fill />
            </div>
            <div>
              <span className="comic-badge" style={{ background: "var(--spidey-blue-light)", color: "#fff", textShadow: "none", marginBottom: "0.5rem" }}>
                ACTIVE HERO
              </span>
              <h3 style={{ fontSize: "2.2rem", margin: "0.25rem 0", color: "var(--gwen-pink)" }}>Miles Morales</h3>
              <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", marginBottom: "1rem" }}>
                Earth-1610 • Ultimate Spider-Man
              </p>
              <p style={{ fontFamily: "var(--font-sans)", lineHeight: "1.6", color: "#cbd5e1", marginBottom: "1rem" }}>
                Miles is a teenager from Brooklyn who took up the mantle of Spider-Man. Guided by his close friends and a "leap of faith," he discovered he could trigger explosive electric venom blasts and turn completely invisible!
              </p>
              <Link href="/characters/miles" className="comic-btn btn-spidey" style={{ textDecoration: "none", fontSize: "0.95rem", padding: "0.4rem 1rem" }}>
                Explore Logs &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Characters Section */}
        <section className={styles.featuredSection}>
          <h2 className={styles.featuredTitle}>Spider-Hero Profiles</h2>
          <div className={styles.featuredGrid}>
            {featuredList.map((char) => (
              <Link key={char.id} href={`/characters/${char.id}`} className={styles.featuredCharCard}>
                <div style={{ width: "90px", height: "90px", position: "relative" }}>
                  <CharacterImage characterId={char.id === "peter" ? "spiderman" : char.id === "gwen" ? "spider-gwen" : `${char.id}-morales`} alt={char.name} fill />
                </div>
                <h4 className={styles.featuredCharName}>{char.codename}</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontFamily: "var(--font-comic)", fontWeight: "bold" }}>
                  {char.name} ({char.universe})
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Dynamic Widgets Row (Facts and Jokes) */}
        <section className={styles.widgetsSection}>
          {/* Fact Widget */}
          <div className={styles.widgetCard}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h3 className={styles.widgetTitle} style={{ margin: 0 }}>Daily Spider Fact</h3>
                <button onClick={handleToggleFactFav} style={{ fontSize: "1.5rem" }} aria-label="Favorite fact">
                  {isFactFav ? "⭐" : "☆"}
                </button>
              </div>
              <p className={styles.widgetText}>"{currentFact}"</p>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button onClick={handleNextFact} className="comic-btn btn-spidey" style={{ fontSize: "0.9rem", padding: "0.4rem 1rem" }}>
                Next Fact 🕸️
              </button>
            </div>
          </div>

          {/* Joke Widget */}
          <div className={styles.widgetCard} style={{ borderColor: "var(--gwen-pink)" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h3 className={styles.widgetTitle} style={{ margin: 0, color: "var(--gwen-pink)" }}>Spider Joke</h3>
                <button onClick={handleToggleJokeFav} style={{ fontSize: "1.5rem" }} aria-label="Favorite joke">
                  {isJokeFav ? "💖" : "♡"}
                </button>
              </div>
              <p className={styles.widgetText} style={{ fontStyle: "italic" }}>"{currentJoke.setup}"</p>
              {showPunchline ? (
                <p style={{ color: "var(--gwen-teal)", fontWeight: "bold", fontSize: "1.1rem", marginTop: "0.5rem" }}>
                  ⚡ {currentJoke.punchline}
                </p>
              ) : (
                <button onClick={() => setShowPunchline(true)} style={{ color: "var(--gwen-pink)", background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", textDecoration: "underline", fontWeight: "bold", marginTop: "0.5rem" }}>
                  Reveal Punchline...
                </button>
              )}
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button onClick={handleNextJoke} className="comic-btn btn-gwen" style={{ fontSize: "0.9rem", padding: "0.4rem 1rem" }}>
                Next Joke 🎭
              </button>
            </div>
          </div>
        </section>

        {/* Comic Chronicles Feeds (Blogs) */}
        <section style={{ marginTop: "4.5rem" }}>
          <div className={styles.articlesHeader}>
            <div>
              <h2 className={styles.articlesTitle}>Multiverse Feeds</h2>
              <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold" }}>
                Read detailed dimensional logs and publisher analyses.
              </p>
            </div>
            <span className="comic-badge" style={{ background: "var(--gwen-teal)", transform: "rotate(3deg)", alignSelf: "flex-end" }}>
              ACTIVE STORIES
            </span>
          </div>

          <div className={styles.blogList}>
            {MOCK_BLOGS.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{
        width: "100%",
        borderTop: "3.5px solid #000",
        background: "#111116",
        padding: "2rem 0",
        textAlign: "center",
        fontSize: "1rem",
        fontFamily: "var(--font-comic)",
        fontWeight: "bold",
        color: "#a0a0b0"
      }}>
        <div className="container">
          <p>© 2026 SpiderVerse Hub. Crafted with 🕸️ using Next.js &amp; Vanilla CSS.</p>
        </div>
      </footer>
    </div>
  );
}
