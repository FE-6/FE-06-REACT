import React from 'react'
<<<<<<< HEAD
// import { Link } from "react-router-dom";
import Logo from '../logo.png';
=======
import { Link } from "react-router-dom";
import styles from "../styles/NavbarStyles.css";
>>>>>>> f-paran

const Navbar = () => {
  return (
<<<<<<< HEAD
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
=======
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">FE 06</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                                <Link to={"/"}>Home </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/about">About</a> */}
                                <Link to={"/about"}>About</Link>
                            </li>
                        </ul> 
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                              {/* <a className="nav-link" href="/login">Login</a> */}
                              <Link to={"/login"}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
>>>>>>> f-paran
  )
}

export default Navbar