import React from "react";
import Feed from "./Feed";
import QuoraHeader from "./QuoraHeader";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import "./css/Quora.css";

function Quora({User}) {
  // console.log(User);
  return (
    <div className="quora">
      <QuoraHeader User={User} />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed User={User}/>
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Quora;
