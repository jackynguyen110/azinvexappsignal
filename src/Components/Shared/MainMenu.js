import React from 'react'
import Logo from 'assets/img/logo.png'
import { NavLink } from 'react-router-dom'
const MainMenu = () => {
  return (
    <div data-active-color="white" data-background-color="black" data-image="https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-1/assets/img/sidebar-bg/01.jpg" className="app-sidebar">
        <div className="sidebar-header">
        <div className="logo clearfix"><a href="https://azinvex.com" className="logo-text float-left">
            <div className="logo-img"><img src={Logo} alt="" /></div><span className="text align-middle">AZINVEX</span></a><a id="sidebarToggle" href="javascript:;" className="nav-toggle d-none d-sm-none d-md-none d-lg-block"><i data-toggle="collapsed" className="ft-toggle-left toggle-icon" /></a><a id="sidebarClose" href="javascript:;" className="nav-close d-block d-md-block d-lg-none d-xl-none"><i className="ft-x" /></a></div>
        </div>
        <div className="sidebar-content">
        <div className="nav-container">
            <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
            <li className="nav-item"><NavLink to="/" ><i className="ft-home" /><span data-i18n className="menu-title">Room Tín Hiệu</span></NavLink>
            </li>
            <li className="nav-item"><NavLink to="/experts" ><i className="ft-home" /><span data-i18n className="menu-title">Danh Sách Chuyên Gia</span></NavLink>
            </li>
            <li className="has-sub nav-item">
                <a href="#"><i className="ft-edit" />
                    <span data-i18n className="menu-title">Quản Lý</span>
                </a>
                <ul className="menu-content">
                    <li>
                        <NavLink to="/information" href="validation-forms.html" className="menu-item">Thông Tin Cá Nhân</NavLink>
                    </li>
                    <li>
                        <NavLink to="/changepassword" className="menu-item">Đổi Mật Khẩu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/account" className="menu-item">Thông Tin Tài Khoản</NavLink>
                    </li>
                </ul>
            </li>

            <li className=" nav-item"><NavLink to="/help"><i className="ft-book" /><span data-i18n className="menu-title">Hướng Dẫn Sử Dụng</span></NavLink>
            </li>
            <li className=" nav-item"><NavLink to="/tours"><i className="ft-life-buoy" /><span data-i18n className="menu-title">Hỗ Trợ</span></NavLink>
            </li>
           
            </ul>
        </div>
        </div>
        <div className="sidebar-background" />
       
    </div>
  )
}

export default MainMenu
