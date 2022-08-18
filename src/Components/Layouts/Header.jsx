import React from "react";
import Grid from "@material-ui/core/Grid";
import hamburger from "../../assets/images/hamburger.svg";
import logo from "../../assets/images/finja_logo.svg";
import backArrow from "../../assets/images/back-icon.svg";
import backArrowWhite from "../../assets/images/back-icon-white.svg";
import { langCheck } from "../Helperfunction";

export default function Header(props) {
  function goback() {
    window.history.back();
  }
  function gotomain() {
    window.location.href = "/react/creditloan";
    //props.props.history.push("/creditloan");
  }

  window.gotomain = () => {
    window.location.href = "/react/creditloan";
  };

  return (
    <header className={"header credit-header " + props.className}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {props.home == true && (
          <>
            <Grid item className="hamburger-main" xs={4}>
              {" "}
              <img alt="" />{" "}
            </Grid>
            <Grid item className="header-logo" xs={4}>
              {" "}
              <img src={logo} alt="" />{" "}
            </Grid>
            <Grid item className="header-profile-main" xs={4}>
              {" "}
            </Grid>
          </>
        )}
        {props.dist == true && (
          <>
            <Grid item className="left-arrow" xs={2}>
              {" "}
              <img src={backArrow} alt="" onClick={gotomain} />{" "}
            </Grid>
            <Grid item className="header-label" xs={8}>
              {" "}
              <span className="label">
                {" "}
                {langCheck("Select Distributor", "ڈسٹری بیوٹر منتخب کریں")}{" "}
              </span>{" "}
            </Grid>
            {/* <Grid item className="header-profile-main" xs={2}> <span className="user-profile">  </span> </Grid> */}
            <Grid item className="header-profile-main" xs={2}>
              {" "}
            </Grid>
          </>
        )}
        {props.credit == true && (
          <>
            {/* <Grid item className="hamburger-main" xs={4}> <img src={hamburger} alt="" /> </Grid> */}
            {/* logo */}
            <Grid item className="hamburger-main" xs={4}>
              {" "}
              <img src={logo} alt="" />{" "}
            </Grid>
            <Grid item className="header-logo" xs={4}>
              {" "}
              <img alt="" />{" "}
            </Grid>
            <Grid item className="header-profile-main" xs={4}>
              {" "}
            </Grid>
          </>
        )}
        {props.creditCalculator == true && (
          <>
            <Grid item className="left-arrow" xs={2}>
              {" "}
              <span className="go-back">
                {" "}
                <img src={backArrowWhite} alt="" />{" "}
              </span>{" "}
            </Grid>
            <Grid item className="header-label" xs={8}>
              {" "}
              <span className="label"> Credit Calculator </span>{" "}
            </Grid>
            <Grid item className="header-profile-main" xs={2}>
              {" "}
            </Grid>
          </>
        )}
        {props.stockDetail == true && (
          <>
            <Grid item className="left-arrow" xs={2}>
              {" "}
              <span className="go-back" onClick={goback}>
                {" "}
                <img src={backArrowWhite} alt="" />{" "}
              </span>{" "}
            </Grid>
            <Grid item className="header-label" xs={8}>
              {" "}
              <span className="label"> Stock Detail </span>{" "}
            </Grid>
            <Grid item className="header-profile-main" xs={2}>
              {" "}
            </Grid>
          </>
        )}
        {props.creditRequestSummary == true && (
          <>
            <Grid item className="left-arrow" xs={2}>
              {" "}
              <span className="go-back" onClick={goback}>
                {" "}
                <img src={backArrow} alt="" onClick={goback} />{" "}
              </span>{" "}
            </Grid>
            <Grid item className="header-label" xs={8}>
              {" "}
              <span className="label"> Credit Request Summary </span>{" "}
            </Grid>
            <Grid item className="header-profile-main" xs={2}>
              {" "}
              <span className="user-profile">  </span>{" "}
            </Grid>
          </>
        )}
      </Grid>
    </header>
  );
}
