import React from "react";
import LOGO from "../assets/Logo.png"


const Header = () => {

    return(
        <div>
            <nav class="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img className="ms-5" src={LOGO} alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex mx-5">
          <span className="mt-2 me-3">Login</span>
        
        <button className="btn btn-outline-success rounded" type="submit">Book Scooter</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Header;