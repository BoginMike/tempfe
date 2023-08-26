import React, { useEffect, useState, Fragment } from "react";
import jwt_decode from "jwt-decode";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import twit from "../../pages/Index/webimages/twitter.png";
import face from "../../pages/Index/webimages/facebook.png";
import pint from "../../pages/Index/webimages/pinterest.png";
import inst from "../../pages/Index/webimages/instagram.jpeg";
import linked from "../../pages/Index/webimages/linkedIn.png";
import phila from "../../pages/Index/webimages/Phila1.jpg";
import newyork from "../../pages/Index/webimages/NEWYORK1.jpg";
import wash from "../../pages/Index/webimages/washington-dc2.jpg";
import AC from "../../pages/Index/webimages/ac1.jpg";

export default function Header() {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    let decoded = jwt_decode(token);
    setUsername(decoded.username);
    setProfilePicture(decoded.profilePicture);
  }, []);

  function logout() {
    if (window.confirm("Are you sure want to logout?")) {
      localStorage.clear();
      navigate("/login");
    }
  }

  function showProfilePage() {
    navigate("/profile");
  }

  return (
    <Fragment>
      <div className="Index"></div>
      <div className="marvel-device s5 white">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen"></div>
        <div className="home">
          <a href="https://twitter.com/CopierRental">
            <img
              alt="copy machine rental twitter"
              height="33"
              longdesc="Twitter/copierrental"
              src={twit}
              width="35"
              className="auto-style4"
            />
          </a>
          &nbsp;
          <a href="https://www.facebook.com/copymachinerental/">
            <img
              alt="Facebook.com/copymachinerental"
              className="auto-style5"
              height="33"
              longdesc="Facebook Copy Machine Rental"
              src={face}
              width="35"
            />
          </a>
          &nbsp;
          <a href="https://www.instagram.com/copierrental/">
            <img
              alt="Instagram.com/copierrental"
              className="auto-style4"
              height="33"
              longdesc="Instagram Copy Machine Rental"
              src={inst}
              width="35"
            />
          </a>
          <a href="https://www.linkedin.com/in/michael-bogin-02366b29/">
            <img
              alt="https://www.linkedin.com/in/michael-bogin-02366b29/"
              className="auto-style4"
              height="33"
              longdesc="LinkedIn CopierRental"
              src={linked}
              width="35"
            />
          </a>
          <a href="https://www.pinterest.com/copierrental/">
            <img
              alt="pinterest.com/copierrental"
              className="auto-style4"
              height="33"
              longdesc="Pinterest Copy Machine Rental or Copier Rental"
              src={pint}
              width="35"
            />
          </a>
          <span className="auto-style6">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <font face="Perpetua" color="#000000" size="4">
              <a href="mailto:CopierRental@copymachinerental.com">
                CopierRental@CopyMachineRental.com
              </a>
              <img
                border="0"
                src="https://www.copymachinerental.com/Images/animated_mail_box.gif"
                width="58"
                height="40"
                alt="Phila Philly Philadelphia"
              />
            </font>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>609-332-5839</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
      <blockquote>
        <p align="center">
          <b>
            <span className="title1">
              <font color="#FF0000" face="Algerian" size="8">
                COPIER RENTALS&nbsp;from Copy Tech
              </font>
            </span>
          </b>
        </p>
        <p align="center">
          <span className="auto-style2"></span>
          <b>
            <font face="Abadi MT Condensed Light" color="#0000FF" size="6">
              <img
                border="0"
                src={phila}
                width="216"
                height="165"
                alt="Phila Philly Philadelphia"
              />
              &nbsp;{" "}
            </font>
            <font size="6" color="#0000FF">
              <img
                border="0"
                src={newyork}
                width="213"
                height="156"
                alt="Phila Philly Philadelphia"
              />
            </font>
            <font size="6" color="#0000FF">
              &nbsp;&nbsp;{" "}
            </font>
            <img
              border="0"
              src={wash}
              width="213"
              height="154"
              alt="Phila Philly Philadelphia"
            />
            <font size="6" color="#0000FF">
              &nbsp;&nbsp;
              <img
                border="0"
                src={AC}
                width="216"
                height="165"
                alt="Phila Philly Philadelphia"
              />
            </font>
          </b>
        </p>

        <p align="center">
          <b>
            <font size="5" color="#0000FF">
              &nbsp;&nbsp;&nbsp;{" "}
            </font>
            <font color="#0000FF" size="1">
              <br />
            </font>

            <font face="Lucida Console" size="1" color="#000000">
              &nbsp;&nbsp;&nbsp;
            </font>
          </b>
        </p>
      </blockquote>

      <div className="app-header">
        <div>
          <h1>Hi {username}</h1>
          <span onClick={showProfilePage}>
            <Avatar
              src={process.env.REACT_APP_BASE_URL + "/image/" + profilePicture}
            />
          </span>
          <span onClick={logout}>
            <LogoutIcon />
          </span>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </Fragment>
  );
}
