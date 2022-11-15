import React from 'react'
// import { Link } from "react-router-dom";
import Logo from '../logo.png';

const Navbar = () => {
  return (
    <>
   
   <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="home.html">
      <img src={Logo} alt="logonews" width="60" height="30"/>
      </a>

      <h3 className="nav justify-item-center text-light">AYF</h3>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link text-bg-primary p-3" href="/login">Login
          </a>
        </li>
      </ul>
    </div>      
  </nav>
  </>
  )
}

export default Navbar