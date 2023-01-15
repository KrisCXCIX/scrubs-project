import styles from "@/components/navigation/desktop/index.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState("TWO");

  return (
    <ul className={styles["navigation-wrapper"]}>
      {["ONE", "TWO", "THREE", "FOUR"].map((item) => (
        <li
          key={item}
          className={
            item === selectedTab ? `nav-item ${styles.selected}` : "nav-item"
          }
          onClick={() => setSelectedTab(item)}
        >
          {item}
          {item === selectedTab ? (
            <motion.div className={styles.background} layoutId="underline" />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
