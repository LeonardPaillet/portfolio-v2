"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return(
    <header className="bg-blue flex justify-between items-center py-8 px-4 lg:px-24 font-semibold text-md">
      {/* Logo and Title */}
      <a href="/" className="flex gap-4 items-center">
        <img src="../logo.svg" alt="Logo" width={"40"} />
        <p className="uppercase">Léonard Paillet</p>
      </a>

      {/* Menu Icon */}
      <div className="lg:hidden text-white text-2xl" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links - Desktop */}
      <div className="hidden lg:flex gap-8 lg:gap-24">
        <HeaderLinks name="ACCUEIL" url="/" />
        <HeaderLinks name="PROJETS" url="/projects" />
        <HeaderLinks name="FORMATION" url="/experiences" />
        <HeaderLinks name="CONTACT" url="/contact" />
      </div>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-blue text-white flex flex-col items-center justify-center gap-8 z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FaTimes />
          </button>
          <HeaderLinks name="ACCUEIL" url="/" onClick={toggleMenu} />
          <HeaderLinks name="PROJETS" url="/projects" onClick={toggleMenu} />
          <HeaderLinks name="FORMATION" url="/experiences" onClick={toggleMenu} />
          <HeaderLinks name="CONTACT" url="/contact" onClick={toggleMenu} />
        </div>
      )}
    </header>
  );
}

interface HeaderLinkProps{
  url : string;
  name : string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function HeaderLinks({url, name, onClick}: HeaderLinkProps){
  return(
    <a href={url} className="group hover:text-lightBlue duration-300" onClick={onClick}>
      {name}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-lightBlue"></span>
    </a>
  )
}