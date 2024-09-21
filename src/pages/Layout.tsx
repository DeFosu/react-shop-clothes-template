import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Pcard from "./Pcard";

const Layout: React.FC = () => (
  <div className="flex flex-col items-center min-h-screen">
    <Header />
    <Outlet />
    <Pcard />
  </div>
);

export default Layout;
