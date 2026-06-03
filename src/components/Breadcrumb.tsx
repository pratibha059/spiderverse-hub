"use client";

import React from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  blogTitle: string;
}

export default function Breadcrumb({ blogTitle }: BreadcrumbProps) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <div className={styles.item}>
        <Link href="/" className={styles.link}>
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
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Home</span>
        </Link>
      </div>

      <span className={styles.separator} aria-hidden="true">
        /
      </span>

      <div className={styles.item}>
        <span className={styles.link} style={{ cursor: "default" }}>
          Blogs
        </span>
      </div>

      <span className={styles.separator} aria-hidden="true">
        /
      </span>

      <div className={styles.item}>
        <span className={`${styles.active}`} aria-current="page">
          {blogTitle}
        </span>
      </div>
    </nav>
  );
}
