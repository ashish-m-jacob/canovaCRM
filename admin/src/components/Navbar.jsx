import { React, useState } from "react";

import styles from "./Navbar.module.css";
import logoutButtonImg from "../assets/logoutButtonImg.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <span>
          Canova<span className={styles.textBlue}>CRM</span>
        </span>
      </div>
      <div className={styles.navLinks}>
        <span
          onClick={() => setSelectedPage("Dashboard")}
          style={
            selectedPage === "Dashboard"
              ? { backgroundColor: "#A7A7A7", color: "white" }
              : {}
          }
        >
          Dashboard
        </span>
        <span
          onClick={() => setSelectedPage("Leads")}
          style={
            selectedPage === "Leads"
              ? { backgroundColor: "#A7A7A7", color: "white" }
              : {}
          }
        >
          Leads
        </span>
        <span
          onClick={() => setSelectedPage("Employees")}
          style={
            selectedPage === "Employees"
              ? { backgroundColor: "#A7A7A7", color: "white" }
              : {}
          }
        >
          Employees
        </span>
        <span
          onClick={() => setSelectedPage("Settings")}
          style={
            selectedPage === "Settings"
              ? { backgroundColor: "#A7A7A7", color: "white" }
              : {}
          }
        >
          Settings
        </span>
      </div>
      <div className={styles.logout}>
        <div
          className={styles.logoutBtn}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logoutButtonImg} alt="Logout" />
          <span>
            <i>Logout</i>
          </span>
        </div>
      </div>
      <div className={styles.userProfile}>
        <span>Profile</span>
      </div>
    </div>
  );
};

export default Navbar;
