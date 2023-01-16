import { pagesArray } from "@/components/navigation/constants";
import styles from "@/components/navigation/desktop/index.module.scss";
import { INavigationProps } from "@/components/navigation/types";
import { motion } from "framer-motion";

const DesktopNavigation = ({
  selectedTab,
  setSelectedTab,
}: INavigationProps) => {
  return (
    <ul className={styles["navigation-wrapper"]}>
      {pagesArray.map((item) => (
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

export default DesktopNavigation;
