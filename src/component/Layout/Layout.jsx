import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Pages/Home/Home";
import './Layout.scss'

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row layoutClass">
        <div className="col-lg-3 layoutLeftDiv">
          <Sidebar />
        </div>
        <div className="col-lg-9 layoutRightDiv">
        <Home/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
