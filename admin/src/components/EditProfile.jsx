import React from "react";

import styles from "./EditProfile.module.css";

const EditProfile = () => {
  return (
    <div className={styles.editProfileContainer}>
      <div className={styles.heading}>
        <span>Edit Profile</span>
      </div>

      <form className={styles.editProfileForm}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
