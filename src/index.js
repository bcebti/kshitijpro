import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Header";

// ReactDOM.render(<h1>Hello</h1>,document.getElementById("root"));

// var ref=React.createElement("h1",null,"Welcome");
// ReactDOM.render(ref,document.getElementById("root"));

// var lst = React.createElement(
//   "ol",
//   null,
//   React.createElement("li", null, "Java"),
//   React.createElement("li", null, "Java"),
//   React.createElement("li", null, "Java")
// );

// ReactDOM.render(lst, document.getElementById("root"));

ReactDOM.render(
  <>
  <hr></hr>
<Header></Header>
<Header></Header>
</>
, 
  
  document.getElementById("root"));
