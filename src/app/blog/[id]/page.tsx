"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";
import { MOCK_BLOGS } from "@/lib/blogs";
import ImageSlider from "@/components/ImageSlider";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "./blog-detail.module.css";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const blogId = params?.id as string;
  const blog = MOCK_BLOGS.find((b) => b.id === blogId);

  useEffect(() => {
    // Client-side authentication guard
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            border: "5px solid #000",
            borderTopColor: "var(--gwen-pink)",
            borderRadius: "50%",
            animation: "spin 0.6s linear infinite",
          }}
        />
        <span style={{ color: "#ffffff", fontFamily: "var(--font-title)", fontSize: "1.5rem", letterSpacing: "0.05em" }}>
          DECRYPTING ARTICLE FILES...
        </span>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={`${styles.notFoundContainer} container`}>
        <h1 className={styles.notFoundTitle}>Article Not Found</h1>
        <p style={{ fontFamily: "var(--font-comic)", color: "var(--text-secondary)", fontWeight: "bold", fontSize: "1.2rem" }}>
          The chronicle you are looking for does not exist in this dimension.
        </p>
        <Link href="/" className="comic-btn btn-spidey" style={{ textDecoration: "none", marginTop: "1rem" }}>
          Back to Portal
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Main Content Area */}
      <main className={`${styles.mainContent} container`}>
        <Breadcrumb blogTitle={blog.title} />

        <article className={styles.articleCard}>
          <div className={styles.sliderWrapper}>
            <ImageSlider images={blog.images} title={blog.title} />
          </div>

          <div className={styles.tagList}>
            {blog.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className={styles.title}>{blog.title}</h1>

          <div className={styles.metadata}>
            <span>By {blog.author}</span>
            <span className={styles.bullet}>•</span>
            <span>{blog.date}</span>
            <span className={styles.bullet}>•</span>
            <div className={styles.readTime}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{blog.readTime}</span>
            </div>
          </div>

          <div className={styles.contentBody}>
            <p>{blog.content}</p>
            <p>
              Understanding these multiversal events is crucial as we track anomalies across dimensions. 
              The web of life and destiny connects all of these individual stories into a singular larger narrative, 
              spanning across Peter Parker's home town to Gwen Stacy's alternate universe.
            </p>
            <p style={{ borderLeft: "4px solid var(--gwen-pink)", paddingLeft: "1rem", fontFamily: "var(--font-comic)", fontWeight: "bold", color: "#e2e8f0" }}>
              "We are all unique in our own dimensions, but in the end, we all wear the mask."
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
