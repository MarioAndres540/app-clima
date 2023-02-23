import React from "react";
import Logo from "./../../assets/img/logo.webp";
import styles from "./Aside.module.scss";

const Aside = () => {
    return (
        <aside className={styles.leftSidebar}>
            <nav>
                <section className={styles.leftSidebarLogo}>
                    <a>
                        <img src={Logo} />
                    </a>
                </section>
                <ul className={styles.leftSidebarMenu}>
                    <li className={styles.leftSidebarNavItem}>Colombia</li>
                    <li className={styles.leftSidebarNavItem}>España</li>
                    <li className={styles.leftSidebarNavItem}>Mexico</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;
