"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { MOCK_BLOGS } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";

export default function MoviesPage() {
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

  // Filter articles containing the tag 'Movies'
  const movieArticles = MOCK_BLOGS.filter(b => b.tags.includes("Movies"));

  return (
    <div style={{ padding: "3rem 0", background: "linear-gradient(to bottom, #08080f, #111116)", minHeight: "100vh" }}>
      <main className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "4px solid #000", paddingBottom: "0.75rem", marginBottom: "2.5rem" }}>
          <div>
            <h1 style={{ fontSize: "3rem", textShadow: "3px 3px 0px #000" }}>Cinematic Archives</h1>
            <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold" }}>
              Explore the locations, character designs, and visual styles of the Spider-Man and Spider-Gwen movies.
            </p>
          </div>
          <span className="comic-badge" style={{ background: "var(--gwen-pink)", color: "#fff" }}>
            {movieArticles.length} FILMS ANALYSIS
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2rem" }}>
          {movieArticles.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
}
