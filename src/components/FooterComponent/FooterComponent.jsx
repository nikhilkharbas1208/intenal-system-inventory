import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const FooterComponent = () => (
  <div data-testid="FooterComponent" className={styles.footerContainer}>
    <span className={styles.footerText}>@Copyright 2025</span>
  </div>
);

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
