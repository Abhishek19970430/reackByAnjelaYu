import React from "react";
import ReactDOM from "react-dom";

const Number = 7;
const fName = "Abhishek";
const lName = "Verma";

ReactDOM.render(
  <>
    <p>My Lucky Number is {Number}</p>
    <p>
      {/* {fName + " " + lName} */}
       {`${fName} ${lName} `}
    </p>
  </>,
  document.getElementById("root")
);
