import React from "react";
import styles from "../styles/Header.module.scss";
import Logo from "./Logo";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Header = () => {
  const {point} = useContext(AppContext)
  return (
    <header className={styles.header}>
      <Logo/>
      <div className={styles['point-div']}>
        <span>Points:</span> <span>{point}</span>
      </div>
    </header>
  );
};

export default Header;
