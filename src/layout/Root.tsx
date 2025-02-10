import MainHeader from "./MainHeader";
import { Outlet, useLocation } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import Menu from "../components/menu/Menu";

const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <MainHeader />
      <Menu />
      <Outlet />
      {pathname !== "/checkout" && <BestGearSection />}
      <Footer />
    </>
  );
};
export default RootLayout;
