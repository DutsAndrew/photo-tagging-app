import React from "react";
import waldo from '../assets/waldo_characters/waldo.jpg';
import '../styles/LoadingBar.css';

const LoadingBar = () => {
  return (
    <img className="waldo-loading-img rotate linear infinite" src={waldo} alt="waldo" ></img>
  )
};

export default LoadingBar;