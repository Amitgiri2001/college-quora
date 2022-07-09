import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/QuoraBox.css";

function QuoraBox({name}) {
  // console.log(props);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
        <p>{name}</p>
      </div>
      <div className="quoraBox__quora">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default QuoraBox;
