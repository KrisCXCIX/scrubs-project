import styles from "@/components/main-content/second-page/index.module.scss";

const SecondPage = ({ selectedTab }) => {
  return (
    <div
      className={styles["second-page-wrapper"]}
      style={{
        left: selectedTab === "TWO" ? 0 : "-100%",
      }}
    >
      <p>second page</p>
    </div>
  );
};

export default SecondPage;
