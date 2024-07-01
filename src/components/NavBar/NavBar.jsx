
import React, { useState } from "react";
import "../NavBar/navStyle.css"
import loguito from "../../assets/loguito.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (

    <div className="navbar">
      <Link to="/">
      <img src={loguito} alt="Logo" className="logo-img" />
      </Link>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/">INICIO</Link>
        <Link to="/cursos">CURSOS</Link>
        <Link to="/nosotros">NOSOTROS</Link>
        <Link to="/marcas">PATROCINIOS</Link>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
export default Navbar