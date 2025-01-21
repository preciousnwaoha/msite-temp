"use client";

import { FaTelegramPlane, FaTwitter, FaGithub, FaRedditAlien, FaDiscord } from "react-icons/fa";
import styles from "./Footer.module.css";

export const FOOTER_LINKS = [
  {
    name: "Telegram",
    url: "https://t.me/melaniawifhat",
    Icon: FaTelegramPlane, // React icon for Telegram
  },
  {
    name: "Twitter",
    url: "https://twitter.com/melaniawifhat",
    Icon: FaTwitter, // React icon for Twitter
  },
  {
    name: "GitHub",
    url: "https://github.com/melaniawifhat",
    Icon: FaGithub, // React icon for GitHub
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/r/melaniawifhat",
    Icon: FaRedditAlien, // React icon for Reddit
  },
  {
    name: "Discord",
    url: "https://discord.gg/melaniawifhat",
    Icon: FaDiscord, // React icon for Discord
  },
];


export default function Footer() {
  return (
    <footer className={styles.footer}>
      {FOOTER_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <div className={styles.footerItem}>
            <link.Icon className={styles.footerIcon} />
            <p className={styles.footerText}>{link.name}</p>
          </div>
        </a>
      ))}
    </footer>
  );
}
