import React from "react";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <MainHeader />
      <Outlet />
      <BestGearSection />
      <Footer />
    </>
  );
};

export default RootLayout;
