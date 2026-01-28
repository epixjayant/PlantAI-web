import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div Class='navbar'>
      <div className='logo'>
        <img
          src='/logo.png'
          alt='logo image'
          className='h-16 w-16 bg-amber-50'
        />
        <h1>PlantAI</h1>
      </div>
      <div class='nav-link'>
        <ul>Home</ul>
        <ul>Scan</ul>
        <ul>Contact</ul>
        <ul>about</ul>
      </div>
    </div>
  );
};

export default NavBar;
