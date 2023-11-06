import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import './header.css';

import {
  
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="header-div">
        <a href="#" className="header-a">
            
        <img 
        
      src="venezuela.png"
            alt="Vzla"
            className="nav_logo"
            width="60"
            height="40"
        />
          <span className="header-span"></span>{" "}
          
          <FaHeart style={{color: 'red', fontSize: '35px'}}/>
        </a>
      </div>
      <nav
        className={`fixed bg-tranparents w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
       
        <a href="#home" className="nav_link active">
          Home
        </a>
        <a href="#reviewUs" className="nav_link active">
          About Us
        </a>
        <a href="#services" className="nav_link active">
          Services
        </a>
       
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
