import Content from "@/components/main-content";
import DesktopNavigation from "@/components/navigation/desktop";
import MobileNavigation from "@/components/navigation/mobile";
import styles from "@/components/pages/index.module.scss";
import useResponsive from "@/hooks/use-responsive";
import { Quicksand } from "@next/font/google";
const inter = Quicksand({ weight: "600", subsets: ["latin"] });

const Main = () => {
  const { isMobile } = useResponsive();
  return (
    <div className={styles["main-wrapper"]}>
      <nav className={`${inter.className} ${styles.navigation}`}>
        {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      </nav>
      <main className={styles["content"]}>
        <Content />
      </main>
    </div>
  );
};

export default Main;
