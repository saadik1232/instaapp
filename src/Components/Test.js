import React from "react";
import Progbar from "./Layouts/Progbar";
import arrowLeft from "../assets/images/back-icon.svg";

import mainicon from "../assets/images/shop-icon.png";

export default function Test() {
  const src =
    "https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=";
  return (
    <div className="profile-container why-finja-main">
      <div className="top-bar">
        <span
          className="back-arrow"
          //onClick={backbbtn}
        >
          {" "}
          <img src={arrowLeft} alt="Arrow pointing left" />{" "}
        </span>
        <div className="progress-container">
          <Progbar first={100} second={0} third={0} fourth={0} />
        </div>
      </div>
      <div className="profilebodyinsta">
        <div className="instaimgholder-main">
          <img
            src={mainicon}
            alt="Arrow pointing left"
            className="instaimgholder"
          />{" "}
        </div>

        <div>
          <h2>seldom</h2>

          <p>test</p>

          <button className="btnprimaryinsta">follow</button>
        </div>

        {/* <nav className="navclassinsta">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active "
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </div>
        </nav> */}
        {/* <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            this is profile
          </div>
        </div> */}
      </div>
      <div class="row">
        <div class="col-6 myclass">
          <img className="imgholdergrid" src={src} />
        </div>
        <div class="col-6 myclass">
          <img className="imgholdergrid" src={src} />
        </div>
        <div class="col-6 myclass">
          <img className="imgholdergrid" src={src} />
        </div>
        <div class="col-6 myclass">
          <img className="imgholdergrid" src={src} />
        </div>
        <div class="col-6 myclass">
          <img className="imgholdergrid" src={src} />
        </div>
      </div>
    </div>
  );
}
