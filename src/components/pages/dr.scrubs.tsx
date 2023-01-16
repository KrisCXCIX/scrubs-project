import Content from "@/components/main-content";
import DesktopNavigation from "@/components/navigation/desktop";
import MobileNavigation from "@/components/navigation/mobile";
import { IPages } from "@/components/navigation/types";
import styles from "@/components/pages/index.module.scss";
import useWindowSize from "@/hooks/use-responsive";
import { Quicksand } from "@next/font/google";
import { useState } from "react";

const inter = Quicksand({ weight: "600", subsets: ["latin"] });

const Main = () => {
  const [selectedTab, setSelectedTab] = useState<IPages>("ONE");
  const windowSize = useWindowSize();

  return (
    <div className={styles["main-wrapper"]}>
      <nav className={`${inter.className} ${styles.navigation}`}>
        {windowSize.width && windowSize.width < 745 ? (
          <MobileNavigation
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ) : (
          <DesktopNavigation
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        )}
      </nav>
      <main className={styles["content"]}>
        <Content selectedTab={selectedTab} />
      </main>
    </div>
  );
};

export default Main;
