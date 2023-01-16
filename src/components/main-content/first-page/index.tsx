import styles from "@/components/main-content/first-page/index.module.scss";

const FirstPage = ({ selectedTab }) => {
  return (
    <div
      className={styles["first-page-wrapper"]}
      style={{
        left: selectedTab === "ONE" ? 0 : "-100%",
      }}
    >
      <p>first page</p>
    </div>
  );
};

export default FirstPage;
