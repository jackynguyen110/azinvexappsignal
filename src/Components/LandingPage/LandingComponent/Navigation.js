import React, { } from 'react';

const Navigation = props => {
  return (
    <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg "
         color-on-scroll="100" id="sectionsNav">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="https://demos.creative-tim.com/material-kit-pro/index.html">
            Material Kit PRO </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">apps</i> Components
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="/" className="dropdown-item">
                  <i className="material-icons">layers</i> All Components
                </a>
                <a href="http://demos.creative-tim.com/material-kit-pro/docs/2.0/getting-started/introduction.html"
                   className="dropdown-item">
                  <i className="material-icons">content_paste</i> Documentation
                </a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#/" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">view_day</i> Sections
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">dns</i> Headers
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">build</i> Features
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">list</i> Blogs
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">people</i> Teams
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">assignment</i> Projects
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">monetization_on</i> Pricing
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">chat</i> Testimonials
                </a>
                <a href="#/" className="dropdown-item">
                  <i className="material-icons">call</i> Contacts
                </a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#/" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">view_carousel</i> Examples
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                {props.role === 'expert' &&
                  <a href="#/managesignal" className="dropdown-item">
                    <i className="material-icons">account_balance</i> Manage Signal
                  </a>
                }
                {props.role === 'member' &&
                  <a href="#/dashboard" className="dropdown-item">
                    <i className="material-icons">art_track</i> Room Tín Hiệu
                  </a>
                }
                {props.role === 'member' &&
                  <a href="#/experts" className="dropdown-item">
                    <i className="material-icons">view_quilt</i> Danh Sách Chuyên Gia
                  </a>
                }
                <a href="#/information" className="dropdown-item">
                  <i className="material-icons">location_on</i> Thông Tin Cá Nhân
                </a>
                <a href="#/changepassword" className="dropdown-item">
                  <i className="material-icons">view_day</i> Đổi Mật Khẩu
                </a>
                <a href="#/account" className="dropdown-item">
                  <i className="material-icons">fingerprint</i> Thông Tin Tài Khoản
                </a>
                <a href="#/help" className="dropdown-item">
                  <i className="material-icons">shopping_basket</i> Hướng Dẫn Sử Dụng
                </a>
                <a href="#/tours" className="dropdown-item">
                  <i className="material-icons">attach_money</i> Hỗ Trợ
                </a>
              </div>
            </li>
            <li className="button-container nav-item iframe-extern">
              <a href="https://www.creative-tim.com/product/material-kit-pro?ref=presentation" target="_blank"
                 className="btn  btn-rose btn-round btn-block">
                <i className="material-icons">shopping_cart</i> Buy Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;