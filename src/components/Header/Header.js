import React from 'react';
import './Header.css';
import Logo from '../../images/logos/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="navbar-brand" >
    <a href="/#"><img src={Logo} alt=""/></a>
  </div>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent " >
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Our Portfolio</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/#">Our Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Contract Us</a>
      </li>
       <li className="nav-item active">
        <Link to="/login"> <button className="nav-link login"> <h6>Login</h6></button></Link>
      </li>
    </ul>

  </div>
</nav>

        </div>
    );
};

export default Header;