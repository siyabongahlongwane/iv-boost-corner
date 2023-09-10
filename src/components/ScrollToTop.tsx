import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.getElementById("main-content")?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
