import Content from "@/components/main-content";
import FirstPage from "@/components/main-content/first-page";
import SecondPage from "@/components/main-content/second-page";
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
        <Content>
          <div
            className={`${
              selectedTab === "ONE" ? styles["active"] : styles["disabled"]
            } ${styles["page-wrapper"]}`}
          >
            <FirstPage selectedTab={selectedTab} />
          </div>
          <div
            className={`${
              selectedTab === "TWO" ? styles["active"] : styles["disabled"]
            } ${styles["page-wrapper"]}`}
          >
            <SecondPage selectedTab={selectedTab} />
          </div>
        </Content>
      </main>
    </div>
  );
};

export default Main;
