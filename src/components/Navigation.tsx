"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated, logoutUser } from "@/lib/auth";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
  }, [pathname]);

  if (pathname === "/login") {
    return null;
  }

  const handleLogout = () => {
    logoutUser();
    setAuth(false);
    router.push("/login");
  };

  const isSpidey = pathname.startsWith("/spider-man") || pathname.includes("peter") || pathname.includes("morales");
  const isGwen = pathname.startsWith("/spider-gwen") || pathname.includes("stacy");

  const headerClass = `${styles.header} ${
    isSpidey ? styles.headerSpidey : isGwen ? styles.headerGwen : ""
  }`;

  const logoClass = `${styles.logo} ${
    isSpidey ? styles.logoSpidey : isGwen ? styles.logoGwen : ""
  }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Spider-Man", path: "/spider-man" },
    { name: "Spider-Gwen", path: "/spider-gwen" },
    { name: "Characters", path: "/characters" },
    { name: "Movies", path: "/movies" },
    { name: "Comics", path: "/comics" },
    { name: "Trivia", path: "/trivia" },
    { name: "Quiz", path: "/quiz" },
    { name: "Jokes", path: "/jokes" },
  ];

  return (
    <header className={headerClass}>
      <div className={`${styles.navContainer} container`}>
        <Link href="/" className={logoClass}>
          SpiderVerse Hub
        </Link>
        <nav>
          <ul className={styles.navMenu}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              let activeClass = "";
              if (isActive) {
                activeClass = isSpidey
                  ? styles.navLinkActiveSpidey
                  : isGwen
                  ? styles.navLinkActiveGwen
                  : styles.navLinkActiveDefault;
              }

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${styles.navLink} ${
                      isActive ? `${styles.navLinkActive} ${activeClass}` : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.navActions}>
          {auth ? (
            <>
              <div
                className={`${styles.userBadge} ${
                  isSpidey ? styles.userBadgeSpidey : isGwen ? styles.userBadgeGwen : ""
                }`}
              >
                <span className={styles.dotOnline} />
                <span>Admin</span>
              </div>
              <button
                id="logout-btn"
                onClick={handleLogout}
                className={styles.logoutBtn}
                aria-label="Logout button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={styles.logoutBtn}
              style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
