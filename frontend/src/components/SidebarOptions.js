import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p>Job</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <p>Habits</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>Reading</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>Science & Tech</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p>Relationship</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p>Business </p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Start Up</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
