import React from "react";
import SphynxPoolsImg from "../../../assets/SphynxPools/SphynxPools.png";
import stopwatch from "../../../assets/SphynxPools/stopwatch.png";
import questionImg from "../../../assets/SphynxPools/question.png";
import "./SphynxPool.scss";
const SphynxPool = () => {
  return (
    <div className="container-fluid">
      <div className="row SphynxPoolsMainDiv">
      {/**Left Div */}
        <div className="SphynxPoolsLeftDiv col-lg-6">
          <div className="SphynxPoolsImgCls">
            <img src={SphynxPoolsImg} />
          </div>
          <div className="SphynxPoolsTextCls">
            <h4>Sphynx Pools</h4>
            <p>
              Just stake some tokens to earn.
              <br />
              High APR, low risk.
            </p>
          </div>
        </div>
      {/**Right Div */}
        <div className="SphynxPoolsLeftDiv col-lg-6">
          <div className="SphynxPoolsImgCls">
            <img src={stopwatch} />
          </div>
          <div className="SphynxPoolsTextCls SphynxPoolsTextClsSecond">
            <h5>Auto SPHYNX Bounty <img src={questionImg}/></h5>
            <p>
            0.003
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SphynxPool;
