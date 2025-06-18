import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../assets/searchBtnImg.png";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBarDiv}>
        <img src={searchIcon}></img>
        <input type="text" placeholder="Search here..." />
      </div>
    </div>
  );
};

export default SearchBar;
