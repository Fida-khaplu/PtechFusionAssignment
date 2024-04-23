import React from "react";
import logoImg from "../../assets/sidebarImage/logo.png";
import closebtnImg from "../../assets/sidebarImage/close.png";
import wallet from "../../assets/sidebarImage/wallet.png";
import twiter from "../../assets/sidebarImage/twiter.png";
import telegram from "../../assets/sidebarImage/telegram.png";
import internet from "../../assets/sidebarImage/internet.png";
import discord from "../../assets/sidebarImage/discord.png";

import "./sidebar.scss";
import { sidebarData } from "./data";

const Sidebar = () => {
  return (
    <div className="sidebardiv">
      <div className="logo">
        <img src={logoImg} />
      </div>
      {/*Heading class*/}
      <div className="headCls">
        <span>MAIN MENU</span>
        <span>
          <img src={closebtnImg} />
        </span>
      </div>
      {/*List class*/}
      <div className="sidebarListClass">
        <div className="headClsSecond">
          <span>
            <img src={wallet} /> Wallet
          </span>
          <span>$1,375.45</span>
        </div>

        <ul>
          {sidebarData.map((item) => (
            <li key={item.id}>
              <span>
                <img src={item.image} /> {item.title}
              </span>
              <span>{item.status}</span>
            </li>
          ))}
        </ul>
      </div>
      {/*social class*/}
      <div className="socialMediaMainCls">
        <h4>Socials</h4>
        <div className="socialMediaCls">
          <div className="socialMediaItemCls twitterCls">
            <img src={twiter} />
          </div>
          <div className="socialMediaItemCls internetCls">
            <img src={internet} />
          </div>
          <div className="socialMediaItemCls telegramCls">
            <img src={telegram} />
          </div>
          <div className="socialMediaItemCls discordCls">
            <img src={discord} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
