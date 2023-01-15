import Content from "@/components/main-content";
import Navigation from "@/components/navigation/desktop";
import styles from "@/components/pages/index.module.scss";
import { Quicksand } from "@next/font/google";

const inter = Quicksand({ weight: "600", subsets: ["latin"] });

const Main = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <nav className={`${inter.className} ${styles.navigation}`}>
        <Navigation />
      </nav>
      <main className={styles["content"]}>
        <Content />
      </main>
    </div>
  );
};

export default Main;
