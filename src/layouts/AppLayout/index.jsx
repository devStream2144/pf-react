import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/index";

const AppLayout = ({ setIsAuthenticated }) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <Fragment>
      <div className="main-frame">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default AppLayout;
