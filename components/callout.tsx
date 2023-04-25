import React from "react";
import styles from "./callout.module.css";

const Callout = ({ type, children, emoji }) => {
  return (
    <div className={`${styles[type]} ${styles.box}`}>
      {emoji}
      <div>
        {type && <p className={styles.subtitle}>Hey, {type}!</p>}
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Callout;
