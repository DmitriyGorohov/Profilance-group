import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Navbar from "../Navbar";
import Popup from "../Popup";

import "./index.scss";

const Layout: FC = React.memo(() => {
  const { visibleForm } = useSelector((state: RootState) => state.auth);

  return (
    <div className="container">
      {visibleForm && <Popup />}
      <Navbar />
      <Outlet />
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
