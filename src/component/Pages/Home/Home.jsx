import React from "react";
import Header from "../Header/Header";
import SphynxPool from "../SphynxPool/SphynxPool";
import "./Home.scss";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Cards/Card";

const Home = () => {
  return (
    <div className="HomeClass">
      <Header />
      <div className="homeMainClass">
        <SphynxPool />
        <SearchBar />

        <div className="HomeCardbtnClass">
          <button className="btnLive">Live</button>
          <button className="finishedBtn">Finished</button>
        </div>
        <div className="homeMainCardClass">
          <div className="homeCardClass">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
