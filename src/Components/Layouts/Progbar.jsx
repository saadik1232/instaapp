import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import backicon from "../../assets/images/backicon.png";

export default function Progbar({ user }) {
  //console.log("props in progbar",first,second,third,fourth)
  return (
    <>
      {/* <img src={backicon} alt="" /> */}
      <h2 className="label">{user}</h2>
    </>
  );
}
