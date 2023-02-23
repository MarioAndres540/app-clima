import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footerEndPage}>
            <div className={styles.footerEndPageContenedor}>
                <p className={styles.footerEndPageParrafo}>Copy right 2023©</p>
            </div>
        </footer>
    );
};

export default Footer;
