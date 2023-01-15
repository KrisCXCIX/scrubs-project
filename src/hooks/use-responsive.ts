import { useEffect, useState } from "react";

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.screen.width < 745);
  }, []);

  return { isMobile };
};

export default useResponsive;
