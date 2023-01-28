import { FC, ReactNode } from "react";

const Content: FC<Record<string, ReactNode>> = ({ children }) => {
  return <>{children}</>;
};

export default Content;
