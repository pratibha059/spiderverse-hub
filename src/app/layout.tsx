import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AchievementTracker from "@/components/AchievementTracker";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpiderVerse Hub - Spidey & Gwen Fan Portal",
  description: "Explore the multiverse with Spider-Man and Spider-Gwen! Get character databases, villains logs, movies history, jokes, interactive trivia, and personality quizzes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <AchievementTracker />
        {children}
      </body>
    </html>
  );
}
