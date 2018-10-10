import React, { } from 'react';
import { Link } from 'react-router-dom'
const Navigation = props => {
  const handleSignOut = () => {
    props.firebase.logout();
  };
  return (
   
    <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="/">
          {console.log(this.props)}
            <img alt="" style={{'margin-top': '-20px'}} src="https://azinvex.com/images/Logo-Az-invex.png" height="61px" width="243px" />
          </a>
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
                Trang Chủ
              </a>
            </li>
            <li className="nav-item">
              <a href="#/home" className="nav-link">
                Về Chúng Tôi
              </a>
            </li>
          
            <li className="nav-item">
              <a href="#/contact" className="nav-link">
                Liên Hệ
              </a>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">apps</i> Trang Quản Trị
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                {props.profileUser.role === 'expert' &&
                    <a href={'#/expert/' + props.auth.uid} className="dropdown-item">
                      <i className="material-icons">account_balance</i> Trang Cá Nhân
                    </a>
                  }
                {props.profileUser.role === 'expert' &&
                  <a href="#/managesignal" className="dropdown-item">
                    <i className="material-icons">account_balance</i> Bắn Tín Hiệu
                  </a>
                }
                {props.profileUser.role === 'member' &&
                  <a href="#/dashboard" className="dropdown-item">
                    <i className="material-icons">view_quilt</i> Dashboard
                  </a>
                }
                {props.profileUser.role === 'member' &&
                  <a href="#/signals" className="dropdown-item">
                    <i className="material-icons">art_track</i> Room Tín Hiệu
                  </a>
                }
              
                {props.profileUser.role === 'member' &&
                  <a href="#/experts" className="dropdown-item">
                    <i className="material-icons">view_quilt</i> Danh Sách Chuyên Gia
                  </a>
                }
               
                <a href="#/help" className="dropdown-item">
                  <i className="material-icons">shopping_basket</i> Hướng Dẫn Sử Dụng
                </a>
                <a href="#/support" className="dropdown-item">
                  <i className="material-icons">attach_money</i> Hỗ Trợ
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {props.isAuthenticated && props.profileUser.role === 'member' &&  <li>Xin chào <a href="#/dashboard">
            {props.profileUser.displayName}&nbsp;</a>
            </li>}

            <li className="button-container nav-item iframe-extern">
              {props.isAuthenticated ?
                <a href="#/home" style={{ padding: '.375rem .75rem'}} className="btn btn-rose btn-round btn-block" onClick={handleSignOut}>Logout</a> :
                <a href="#/login" style={{ padding: '.375rem .75rem'}} className="btn btn-rose btn-round btn-block">login</a>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;