import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';



export default class Header extends Component {
    render() {
        return(
            <div>
               <div class="preloader">
    <div class="loader">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
        <header className="navigation">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/home"><img className="img-fluid" src="images/logo.png" alt="parsa"></img></a>
            <button className="nav-bar toggler border-0" type="button" data-toggle="collapse" data-target="#navogation"
              aria-controls="navogation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse text-center" id="navogation">
              <ul className="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <a className="nav-link text-uppercase text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
            </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/home">Homepage 1</a>
                    <a className="dropdown-item" href="homepage-2.html">Homepage 2</a>
                  </div>
                </li>
                <li className="nav-item">
                  
                  <a className="nav-link text-uppercase text-dark" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase text-dark" href="/category">Categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase text-dark" href="contact.html">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase text-dark" href="contact.html">Login/Register</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link text-uppercase text-dark" href="contact.html">Get Started</a>
                </li> */}
              </ul>
              <form>
                <input className="form-control px-0 w-100" type="search" placeholder="Search" />
                <a href="search.html" class="search-icon"><i class="ti-search text-dark"></i></a>
              </form>
            </div>
          </nav>
        </header>
            </div>
        )
    }

}