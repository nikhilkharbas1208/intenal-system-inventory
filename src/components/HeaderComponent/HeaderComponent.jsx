import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => (
  <div className={styles.nav} data-testid="HeaderComponent">
    <div>
      <span className={styles.navAppText}>🗃️ Internal System Inventory</span>
    </div>
    <div className={styles.navSubContainer}>
      <Link to="/" className={styles.navItem}>
        Dashboard
      </Link>
      <Link to="ticket" className={styles.navItem}>
        Ticket1
      </Link>
      <Link to="addinventory" className={styles.navItem}>
        Add Inventory
      </Link>
      <Link to="usermenu" className={styles.navItem}>
        User Menu
      </Link>
    </div>
  </div>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
