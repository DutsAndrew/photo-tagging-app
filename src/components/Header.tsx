import React from "react";
import '../styles/Header.css';
import Waldo from '../assets/waldo_characters/waldo.jpg'

const Header = () => {
  return (
    <div className="header">
      <p className="header-text">
        Where's Waldo?
      </p>
      <img className="waldo-header-img" src={Waldo} alt="waldo character" width="40vw" height="40vh" ></img>
    </div>
  );
};

export default Header;