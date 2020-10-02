import React from "react";
import profileIcon from "../../Images/profileIcon.png";
import   { Link }  from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import iconHeader from "../../Images/iconHeader.png";

import fakePicture from "../../Dummy/Profile.json"

function Sidebar() {
  return (
    fakePicture.map(data => (

    <div>
      <Link to="/home">
        <img src={iconHeader} alt="" />
      </Link>
      <div id="userInfo">
        <div id="sidebarProfileImageContainer">
          <img className="sidebarProfileImage" src={data.picture} alt="" />
        </div>
        <div className="userInfoName">
          <h1>{data.name}</h1>

        </div>
      </div>

      <hr />
      <div id="sidebarLink">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/profile">
              <p className="linkText">
                <FaUser /> Profile
              </p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/mylibrary">
              <p className="linkText">
                <MdLibraryBooks /> My Library
              </p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/addbook">
              <p className="linkText">
                <AiFillFileAdd /> Add Book
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <ul style={{ listStyleType: "none", fontSize: 25 }}>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "#929292",
            }}
            to="/"
          >
            <p className="linkTextSidebarLogout">
              <RiLogoutBoxRFill /> Logout
            </p>
          </Link>
        </li>
      </ul>
    </div>
    ))
  );
}

export default Sidebar;
