"use client";

import React from "react";
import Link from "next/link";
import { Blog } from "@/lib/blogs";
import ImageSlider from "./ImageSlider";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className={`${styles.card} glass-panel`}>
      <div className={styles.sliderSection}>
        <ImageSlider images={blog.images} title={blog.title} />
      </div>

      <div className={styles.contentSection}>
        <div>
          <div className={styles.tagList}>
            {blog.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <Link href={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
            <h2 className={styles.title}>{blog.title}</h2>
          </Link>

          <div className={styles.metadata}>
            <span>{blog.author}</span>
            <span className={styles.bullet}>•</span>
            <span>{blog.date}</span>
          </div>

          <p className={styles.summary}>{blog.summary}</p>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.readTime}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{blog.readTime}</span>
          </div>

          <Link href={`/blog/${blog.id}`} className={styles.toggleBtn}>
            <span>Read More</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
