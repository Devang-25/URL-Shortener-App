import React, { useState } from "react";
import styles from "../styles/shortener.module.css";
import Axios from "axios";
import Link from "./Link";
import Statistics from "./Statistics";
const Shortener = () => {
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const handleClick = (e) => {
    e.preventDefault();

    const longUrl = {
      longUrl: url,
    };

    Axios.post("/url", longUrl)
      .then((res) => {
        setUrls([...urls, res.data]);
      })
      .catch((err) => console.log(err.response));

    setUrl("");
  };
  return (
    <div className={styles.shortenerSection}>
      <form className={styles.shortener}>
        <input
          defaultValue={url}
          type="text"
          onPaste={(e) => {
            setUrl(e.clipboardData.getData("Text"));
          }}
          placeholder="Paste a link here"
        />
        <button onClick={(e) => handleClick(e)}>Shorten</button>
      </form>
      {urls.map((url) => (
        <Link url={url} key={url._id} />
      ))}
      <Statistics />
    </div>
  );
};

export default Shortener;
