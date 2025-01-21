"use client";

import React from "react";
import { COIN_ADDRESS } from "../config/coin";
import { FaCopy, FaCheck } from "react-icons/fa";
import styles from "./CoinAddress.module.css";

export default function CoinAddress() {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }

    return () => {
      clearTimeout();
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(COIN_ADDRESS);
    setCopied(true);
  };

  return (
    <div className={styles.copyAddressWrapper} onClick={copyToClipboard}>
        <div className={styles.copyAddress} onClick={copyToClipboard}>
      <p>{COIN_ADDRESS}</p>
      <span className={styles.copyAddressIcon}>
        {copied ? <FaCheck /> : <FaCopy />}
      </span>
      </div>
    </div>
    
  );
}
