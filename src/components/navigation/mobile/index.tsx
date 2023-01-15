import styles from "@/components/navigation/mobile/index.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const MobileNavigation = () => {
  const [selectedTab, setSelectedTab] = useState("TWO");
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <Image
        className={styles["menu-icon"]}
        src={require("@/assets/svg/menuSvg.svg")}
        alt="Menu Icon"
        onClick={() => setIsMenuActive(!isMenuActive)}
        style={{ color: isMenuActive ? "white" : "black" }}
      />
      <div
        className={
          isMenuActive
            ? `${styles["side-menu"]} ${styles["open"]}`
            : `${styles["side-menu"]} ${styles["close"]}`
        }
      >
        <ul className={styles["navigation-wrapper"]}>
          {["ONE", "TWO", "THREE", "FOUR"].map((item) => (
            <li
              key={item}
              className={
                item === selectedTab
                  ? `${styles["nav-item"]} ${styles.selected}`
                  : `${styles["nav-item"]}`
              }
              onClick={() => setSelectedTab(item)}
            >
              {item}
              {item === selectedTab ? (
                <motion.div
                  className={styles.background}
                  layoutId="background"
                ></motion.div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
