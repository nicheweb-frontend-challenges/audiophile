import React from "react";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import Footer from "./Footer";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <BestGearSection />
      <Footer />
    </>
  );
};

export default RootLayout;
