import React from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import { APP_VERSION } from "../Util/constant";
import { useSideBar } from "./context/SideBarContext";

const App = () => {
  console.log("APP VERSION", APP_VERSION);

  const location = useLocation(); // Replace withRouter with useLocation

  const shouldRenderSidebarAndNavbar = () => {
    return !location.pathname.includes("brokertoken");
  };

  const renderSidebarAndNavbar = shouldRenderSidebarAndNavbar();
  const { isSideBarOpen } = useSideBar();

  return (
    <div className="container-scroller">
      {renderSidebarAndNavbar && <Sidebar />}
      <div className="container-fluid page-body-wrapper">
        {renderSidebarAndNavbar && <Navbar />}
        <div className="main-panel">
          <div
            className={`content-wrapper ${isSideBarOpen ? "content-wrapper-margin" : "content-wrapper-margin2"
              } content-bg`}
          >
            <AppRoutes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;