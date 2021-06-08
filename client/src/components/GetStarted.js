import React from "react";
import styles from '../styles/getstarted.module.css'
import ilustration from '../images/illustration-working.svg'
const GetStarted = () => {
  return (
    <section className={styles.getstarted}>
      <div className={styles.getStaredText}>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className={styles.getstaredbtn}>
          Get Started
      </button>
      </div>
      <img src={ilustration} alt="Get Stared"/>
    </section>
  );
};

export default GetStarted;
