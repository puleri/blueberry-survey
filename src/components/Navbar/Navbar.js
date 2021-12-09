import React from 'react';
import './Navbar.css';
import logoName from '../../assets/img/logo-name.png';
import pancake from '../../assets/img/pancake.png';



export default function Navbar() {

  return (
    <div className="home-container">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <img style={{ height: '50px' }} src={logoName} alt="Blueberry Pediactrics" />
        <button className="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
          <img style={{ height: '30px' }} src={pancake} alt="menu" />
        </button>
      </nav>
      <div className="collapse" id="collapseExample">
        <div className="nav-drop-custom">
          <a className="nav-item" href="#">Sign In</a> <br />
          <a className="nav-item" href="#">Talk with a Doctor</a> <br />
          <a className="nav-item" href="#">FAQ</a> <br />
          <a className="nav-item" href="#">Support</a> <br />
        </div>
      </div>
    </div>
  )
}
