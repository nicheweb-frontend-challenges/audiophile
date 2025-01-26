import React from "react";
import MainHeader from "./MainHeader";
import { Outlet, useLocation } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <MainHeader />
      <Outlet />
      {pathname !== "/checkout" && <BestGearSection />}
      <Footer />
    </>
  );
};

export default RootLayout;
