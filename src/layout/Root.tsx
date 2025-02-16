import MainHeader from "./MainHeader";
import { Outlet, useLocation } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import Menu from "../components/menu/Menu";
import * as styles from "./Root.module.scss";

const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.root}>
      <ScrollToTop />
      <MainHeader />
      <Menu />
      <Outlet />
      {pathname !== "/checkout" && <BestGearSection />}
      <Footer />
    </div>
  );
};
export default RootLayout;
