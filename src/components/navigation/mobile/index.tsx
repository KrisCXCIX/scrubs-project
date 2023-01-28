import { pagesArray } from "@/components/navigation/constants";
import styles from "@/components/navigation/mobile/index.module.scss";
import { INavigationProps } from "@/components/navigation/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const MobileNavigation = ({
  setSelectedTab,
  selectedTab,
}: INavigationProps) => {
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
        <p className={styles["header"]}>DR.Scrubs</p>
        <ul className={styles["navigation-wrapper"]}>
          {pagesArray.map((item) => (
            <li
              key={item}
              className={
                item === selectedTab
                  ? `${styles["nav-item"]} ${styles.selected}`
                  : `${styles["nav-item"]}`
              }
              onClick={() => {
                setSelectedTab(item);
                setTimeout(() => {
                  setIsMenuActive(!isMenuActive);
                }, 500);
              }}
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
