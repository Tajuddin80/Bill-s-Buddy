import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";

const LandingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Helmet><title>Bill's Buddy | Landing Page</title></Helmet>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LandingLayout;
