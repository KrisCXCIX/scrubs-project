import FirstPage from "@/components/main-content/first-page";
import SecondPage from "@/components/main-content/second-page";
import { INavigationProps } from "@/components/navigation/types";

const Content = ({ selectedTab }: Omit<INavigationProps, "setSelectedTab">) => {
  return (
    <>
      <FirstPage selectedTab={selectedTab} />
      <SecondPage selectedTab={selectedTab} />
    </>
  );
};

export default Content;
