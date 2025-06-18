import React from "react";

import styles from "./Navigator.module.css";

const Navigator = ({ currentPage }) => {
  return (
    <div className={styles.navigatorContainer}>
      <span>Home</span>
      <span>{">"}</span>
      <span> {currentPage} </span>
    </div>
  );
};

export default Navigator;
