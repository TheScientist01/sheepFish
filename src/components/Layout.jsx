import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div className="bg-[#f2f3f8]">
      <Header />
      <div>
        <div className="w-[90%] mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
