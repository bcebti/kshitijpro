import React from "react";

import ReactDOM from "react-dom";

import "./Header.css"

var Header = () => {

    var localStyle={
        width:100,
        height:100,
        backgroundColor:"red"
    }
    var uid="Rajesh";
  return (

    <>
    <center>
      <h2>www.realjavaonline.com</h2>
      <div className={"btn"}>Signup</div>
      <div className={"btn2"}>Signup</div>
      <img src={"pics/LogoSunSoft.jpg"} style={localStyle} ></img>
      <br></br>
      Welcone={uid}
    </center>
    
    </>
  );
};

export default Header
