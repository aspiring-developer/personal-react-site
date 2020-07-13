import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-3 pl-5">
        <a className="navbar-brand ml-0 mr-0" href="/">
          <img src="images/Logo-White-Bg-Behind-Texts-250x101.png" alt="Sharma Web Development & Graphic Design Logo" className="img-fluid" /> </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="fas fa-home text-info"></i> Home <span className="sr-only">(current)</span></Link>
            </li>

            <ul className="dropdown">
              <li className="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link className="nav-link" to="/portfolio-main"><i className="fas fa-layer-group text-info"> </i> Portfolio <i className="fas fa-caret-down"></i> </Link>
              </li>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li className="dropdown-item">
                  <Link className="nav-link text-info" to="web-development"><i className="fas fa-laptop-code"></i> Web Development</Link>
                </li>
                <li className="dropdown-item" type="button">
                  <Link className="nav-link text-info" to="/graphic-digital"><i className="fas fa-mouse"></i> Graphic Design <br /> & Digital Drawing</Link></li>
                <li className="dropdown-item" type="button">
                  <Link className="nav-link text-info" to="/painting"><i className="fas fa-paint-brush"></i> Oil Painting <br /> & Chalkboard Art</Link></li>
              </ul>
            </ul>
            <li className="nav-item ml-1 mr-5">
              <Link className="nav-link" to="/about"><i className="fas fa-id-card text-info"> </i> About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar;