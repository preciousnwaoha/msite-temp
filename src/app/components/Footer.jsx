"use client";

import { FaTelegramPlane, FaTwitter, FaGithub, FaRedditAlien, FaDiscord, FaChartBar } from "react-icons/fa";
import styles from "./Footer.module.css";

export const FOOTER_LINKS = [
  {
    name: "Telegram",
    url: "https://t.me/melaniawifcoin",
    Icon: FaTelegramPlane, // React icon for Telegram
  },
  {
    name: "Twitter",
    url: "https://x.com/melaniawifcoin",
    Icon: FaTwitter, // React icon for Twitter
  },
  // {
  //   name: "GitHub",
  //   url: "https://github.com/melaniawifhat",
  //   Icon: FaGithub, // React icon for GitHub
  // },
  // {
  //   name: "Chart",
  //   url: "https://www.dexscreener.com/r/melaniawifhat",
  //   Icon: FaChartBar, // React icon for Reddit
  // },
 
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
