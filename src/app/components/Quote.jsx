"use client";

import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import styles from "./Quote.module.css";

export default function Quote() {
  
  console.log("Some new changes...")
  console.log("Some new changes...")
  console.log("Some new changes...")
  
    return (
        <div className={styles.lightSection}>
  <div className={styles.quoteCardDark}>
    <h4 className={styles.quoteCardDarkCapsText}>COOL AF</h4>
    <p className={styles.quoteText}>
      <FaQuoteLeft className={styles.quoteIcon} />
      Melania wears the coolest hats
      <FaQuoteRight className={styles.quoteIcon} />
    </p>
    <div className={styles.fiveStars}>
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className={styles.starIcon} />
      ))}
    </div>
    <div className={styles.quoteAuthor}>- SOME WIF HAT</div>
  </div>
</div>

    )
}