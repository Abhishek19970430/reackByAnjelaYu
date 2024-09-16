//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Abhishek";

const d = new Date();

ReactDOM.render(
  <>
    <p>Created by {name} </p>
    <p>Copyright {d.getFullYear()}</p>
  </>,
  document.getElementById("root")
);
