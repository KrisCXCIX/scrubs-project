export interface INavigationProps {
  selectedTab: IPages;
  setSelectedTab: (item: IPages) => void;
}
export type IPages = "ONE" | "TWO" | "THREE" | "FOUR";
