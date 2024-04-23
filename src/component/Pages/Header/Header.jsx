import React from "react";
import avatar from '../../../assets/Header/avatar.png'
import bsc from '../../../assets/Header/bsc.png'
import connectedImg from '../../../assets/Header/connected.png'
import "./Header.scss";
import DropdownComp from "./HeaderComponenet/Dropdown";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row HeaderMainDiv">
        {/*Left div*/}
        <div className="col-lg-6 col-md-6 HeaderLeftDiv ">
          <div className="HeaderLeftFirstDiv">
            <div className="LeftSpan">TOP PAIRS:</div>
            <div className="RightSpan">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </div>
        {/*Right div*/}
        <div className="HeaderRightDiv col-lg-6">
         <span className="headerRightSpanCLass"><DropdownComp/></span> 
          <span className="headerRightSpanCLass">
          <img src={bsc} />
          </span>
          <span className="headerRightSpanCLass"><img src={connectedImg} /></span>
          <span className="headerRightSpanCLass avtarCls">John D.
          <img src={avatar} /></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
