"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUser, isAuthenticated } from "@/lib/auth";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to home listing page immediately
  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("THWIP! Please fill in all fields first.");
      return;
    }

    setLoading(true);

    // Simulate network delay for premium feel
    setTimeout(() => {
      const success = loginUser(username, password);
      setLoading(false);

      if (success) {
        router.push("/");
      } else {
        setError("ACCESS DENIED! Invalid code name or passcode.");
      }
    }, 800);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>SpiderVerse Portal</h1>
          <p className={styles.subtitle}>Enter credentials to access the multiversal archives</p>
        </div>

        {error && (
          <div className={styles.errorBadge}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Codename / Username</label>
            <input
              id="username-input"
              type="text"
              placeholder="e.g. admin"
              className={styles.inputField}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              autoComplete="username"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Passkey / Password</label>
            <input
              id="password-input"
              type="password"
              placeholder="••••••••"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoComplete="current-password"
            />
          </div>

          <button
            id="login-submit-btn"
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? "Decrypting coordinates..." : "Authorize Entry"}
          </button>
        </form>

        <div className={styles.hintBox}>
          Hint: Use <span className={styles.hintHighlight}>admin</span> /{" "}
          <span className={styles.hintHighlight}>admin123</span>
        </div>
      </div>
    </div>
  );
}
