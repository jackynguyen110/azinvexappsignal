import React, { } from 'react';

const Navigation = props => {
  return (
    <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="http://www.creative-tim.com">Creative Tim</a>
          <button type="button" className="ml-auto navbar-toggler" data-toggle="collapse"
                  data-target="#navigation-example4">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navigation-example4">
          <ul className="navbar-nav navbar-center ml-auto">
            <li className="nav-item">
              <a href="#/home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#/home" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#/home" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#/home" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#/login" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;