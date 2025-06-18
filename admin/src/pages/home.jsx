import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Navigator from "../components/Navigator";
import EditProfile from "../components/EditProfile";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };
  return (
    <div className={styles.homeContainer}>
      <div className={styles.navbar}>
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={handleSelectPage}
        />
      </div>
      <div className={styles.content}>
        {selectedPage === "Settings" && (
          <>
            <SearchBar />
            <hr />
            <div className={styles.settingsContent}>
              <div className={styles.navigator}>
                <Navigator currentPage={selectedPage} />
              </div>
              <div className={styles.profileForm}>
                <EditProfile />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
