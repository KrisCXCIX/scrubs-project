import styles from "@/components/main-content/first-page/index.module.scss";
import { IPageProps } from "@/components/main-content/types";

const FirstPage = ({ selectedTab }: IPageProps) => {
  return (
    <div className={`${styles["first-page-wrapper"]}`}>
      <p>first page</p>
    </div>
  );
};

export default FirstPage;
