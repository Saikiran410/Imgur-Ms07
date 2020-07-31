import React from "react";

import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsAward } from "react-icons/bs";



import HeaderButton from "./headerComponent/Button";

const Header = () => {
  return (
    <div className="Header-Background">
      <div className="brand">
        <div className="alignLeft">
          <h1>imgur</h1>
          <HeaderButton logo={<MdLibraryAdd />} btnName="New Post" />
        </div>

        <form className="Searchbar-form">
          <input
            placeholder="Images, #tags, @users oh my!"
            type="text"
            className="searchbar-input"
            style={{ height: "36px" }}
          ></input>
            <FaSearch className = "Searchbar-button"
            HeaderButton logo={<FaSearch />}></FaSearch>
        </form>

        <div className="alignRight">
          <i className="awardLogo">
            <BsAward />
          </i>
          <h3 style={{ marginRight: "20px", marginTop: "10px" }}>Sign in</h3>
          <HeaderButton btnName="Sign Up" />
        </div>

        <div style={{ clear: "both" }}></div>
      </div>

      <div className="headCardTitle">
        <h2 style={{ color: "#aed8ea" }}>
          Helllo, is it memes you're looking for?
        </h2>
      </div>
    </div>
  );
};

export default Header;