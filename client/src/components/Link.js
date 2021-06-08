import React, { useState } from "react";
import styles from "../styles/Link.module.css";
const Link = ({ url }) => {
  const [isCopied, changeCopied] = useState("Copy");
  const onCopyChange = () => {
    navigator.clipboard.writeText(url.shortUrl);
    changeCopied("Copied!");
    setTimeout(() => changeCopied("Copy"), 4000);
  };
  return (
    <div className={styles.wrapper}>
      <p>{url.shortUrl}</p>
      <button className={styles.copyButton} onClick={() => onCopyChange()}>
        {isCopied}
      </button>
    </div>
  );
};

export default Link;
