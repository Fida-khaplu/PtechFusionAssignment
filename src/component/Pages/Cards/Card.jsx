import React, { useState } from "react";
import walletImg from "../../../assets/cards/wallet.png";
import connected from "../../../assets/cards/connected.png";
import question from "../../../assets/cards/questin.png";
import arrow from "../../../assets/cards/arrow.png";

import "./Card.scss";
const Card = () => {
   const[show , setShow] = useState(false);
   const handleShow = ()=>{
    setShow((prev)=>!prev)
   }
  return (
    <div className="card" style={{ width: "304px", margin:"10px"}}>
      <div className="cardImgClass">
        <img src={walletImg} alt="Card image cap" />
      </div>

      <div className="card-body cardBodyClass">
        <h5 className="card-title">Manual SPHYNX</h5>
        <p className="card-text">Earn SPHYNX, stake SPHYNX</p>
        <span className="aprClass">
          <p>APR</p>
          <p>0.00</p>
        </span>

        <p className="card-text cardEarningClass">START EARNING</p>
        <div className="cardImgClass cardImgClass2">
          <img src={connected} />
        </div>

        <div className="hideClass">
          <span className="hideClassText">
            Manual <img src={question} />
          </span>
          <span onClick={handleShow} className="hideClassBtn">Hide</span>
        </div>
      {show &&  <div className="totalStockDivClass">
          <div className="totalStockDiv">
            <span className="stackTitle">Total staked:</span>
            <span className="stackDetail">
              <ul>
                <li className="sphynxCls">SPHYNX</li>
                <li>-107,461,770</li>
              </ul>
            </span>
          </div>
          <div className="CardLastRow">
            <div className="tokenClass">
              <img src={arrow} /> See Token Info
            </div>
            <div className="tokenClassSecond">
              <span className="LastRowtokendetailClass">
                <img src={arrow} /> View Project Site
              </span>
              <span className="LastRowtokendetailClass">
                <img src={arrow} /> View Contrast
              </span>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Card;
