import styles from "@/components/main-content/second-page/index.module.scss";
import { IPageProps } from "@/components/main-content/types";

const SecondPage = ({ selectedTab }: IPageProps) => {
  return (
    <div className={`${styles["second-page-wrapper"]}`}>
      <p>second page</p>
    </div>
  );
};

export default SecondPage;
