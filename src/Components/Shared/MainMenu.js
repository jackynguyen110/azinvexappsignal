import React,  { Component } from 'react'
import { connect } from "react-redux";
import Logo from 'assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

class MainMenu extends Component {
   
    componentDidMount = () => {
        var $wrapper = $('.wrapper');

        var $sidebar = $('.app-sidebar')
        var $sidebar_content = $('.sidebar-content')
        var $sidebar_img = $sidebar.data('image')
        var  $sidebar_img_container = $('.sidebar-background')

        if( $sidebar_img_container.length !== 0 && $sidebar_img !== undefined ){
            $sidebar_img_container.css('background-image','url("' + $sidebar_img + '")');
        }

        $('.nav-toggle').on('click',function(){
            var $this = $(this),
            toggle_icon= $this.find('.toggle-icon'),
            toggle = toggle_icon.attr('data-toggle');
            var compact_menu_checkbox = $('.cz-compact-menu');
    
            if(toggle === 'expanded'){
                $wrapper.addClass('nav-collapsed');
    
                $('.nav-toggle').find('.toggle-icon').removeClass('ft-toggle-right').addClass('ft-toggle-left');
                toggle_icon.attr('data-toggle', 'collapsed');
                if(compact_menu_checkbox.length > 0){
                    compact_menu_checkbox.prop('checked',true);
                }
            }
            else{
                $wrapper.removeClass('nav-collapsed menu-collapsed');
    
                $('.nav-toggle').find('.toggle-icon').removeClass('ft-toggle-left').addClass('ft-toggle-right');
                toggle_icon.attr('data-toggle', 'expanded');
                if(compact_menu_checkbox.length > 0){
                    compact_menu_checkbox.prop('checked',false);
                }
            }
        });

        $sidebar_content.on('click', '.navigation li a',function(){
            var $this = $(this),
            listItem = $this.parent('li');
    
            if(listItem.hasClass('has-sub') && listItem.hasClass('open')){
                collapse(listItem);
            }
            else{
                if(listItem.hasClass('has-sub')){
                    expand(listItem);
                }
    
                // If menu collapsible then do not take any action
                if ($sidebar_content.data('collapsible')) {
                    return false;
                }
                // If menu accordion then close all except clicked once
                else {
                    var openListItems = listItem.siblings('.open');
                    collapse(openListItems);
                    listItem.siblings('.open').find('li.open').removeClass('open');
                }
            }
        });

        function collapse($listItem, callback) {
            var $subList = $listItem.children('ul');
    
            $subList.show().slideUp(200, function() {
                $(this).css('display', '');
    
                $(this).find('> li').removeClass('is-shown');
    
                $listItem.removeClass('open');
    
                if (callback) {
                    callback();
                }
            });
    
        }
    
        function expand($listItem, callback) {
            var $subList = $listItem.children('ul');
            var $children = $subList.children('li').addClass('is-hidden');
    
            $listItem.addClass('open');
    
            $subList.hide().slideDown(200, function() {
                $(this).css('display', '');
    
                if (callback) {
                    callback();
                }
            });
    
            setTimeout(function() {
                $children.addClass('is-shown');
                $children.removeClass('is-hidden');
            }, 0);
        }

        if ($(window).width() < 992) {
            $sidebar.addClass('hide-sidebar');
            $wrapper.removeClass('nav-collapsed menu-collapsed');
        }
        $( window ).resize(function() {
            if ($(window).width() < 992) {
                $sidebar.addClass('hide-sidebar');
                $wrapper.removeClass('nav-collapsed menu-collapsed');
            }
            if ($(window).width() > 992) {
                $sidebar.removeClass('hide-sidebar');
                if( $('.toggle-icon').attr('data-toggle') === 'collapsed' &&  $wrapper.not('.nav-collapsed menu-collapsed')){
                    $wrapper.addClass('nav-collapsed menu-collapsed');
                }
            }
        });
    
        $(document).on('click', '.navigation li:not(.has-sub)', function(){
            if( $(window).width() < 992 ){
                $sidebar.addClass('hide-sidebar');
            }
        });
    
        $(document).on('click', '.logo-text', function(){
            if( $(window).width() < 992 ){
                $sidebar.addClass('hide-sidebar');
            }
        });
    
    
        $('.navbar-toggle').on('click',function(e){
            e.stopPropagation();
            $sidebar.toggleClass('hide-sidebar');
        });
    
        $('html').on('click', function (e) {
            if ($(window).width() < 992) {
                if (!$sidebar.hasClass('hide-sidebar') && $sidebar.has(e.target).length === 0) {
                    $sidebar.addClass('hide-sidebar');
                }
            }
        });
    
        $('#sidebarClose').on('click', function(){
            $sidebar.addClass('hide-sidebar');
        });
    }
  
    render () {
      const { profileUser, auth } = this.props;
      console.log(auth)
        return (
            <div data-active-color="white" data-background-color="king-yna" data-image="https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-1/assets/img/sidebar-bg/01.jpg" className="app-sidebar">
                <div className="sidebar-header">
                <div className="logo clearfix"><a href="/home" className="logo-text float-left">
                    <div className="logo-img"><img src={Logo} alt="" /></div><span className="text align-middle">AZINVEX</span></a><a id="sidebarToggle" className="nav-toggle d-none d-sm-none d-md-none d-lg-block"><i data-toggle="collapsed" className="ft-toggle-left toggle-icon" /></a><a id="sidebarClose" className="nav-close d-block d-md-block d-lg-none d-xl-none"><i className="ft-x" /></a></div>
                </div>
                <div className="sidebar-content">
                <div className="nav-container">
                    <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
                      {(profileUser.role && profileUser.role === 'expert') &&
                        <li className="nav-item"><NavLink to={'/expert/' + auth.uid} ><i className="ft-home" /><span data-i18n className="menu-title">Trang Cá Nhân</span></NavLink></li>
                      }
                      {(profileUser.role && profileUser.role === 'expert') &&
                        <li className="nav-item"><NavLink to="/managesignal" ><i className="ft-aperture" /><span data-i18n className="menu-title">Bắn Tín Hiệu</span></NavLink></li>
                      }
                      
                      {(profileUser.role && profileUser.role === 'member') &&
                        <li className="nav-item"><NavLink to="/dashboard" ><i className="ft-home" /><span data-i18n className="menu-title">Dashboard</span></NavLink></li>
                      }
                      {(profileUser.role && profileUser.role === 'member') &&
                        <li className="nav-item"><NavLink to="/signals" ><i className="ft-bar-chart-2" /><span data-i18n className="menu-title">Room Tín Hiệu</span></NavLink></li>
                      }
                      {(profileUser.role && profileUser.role === 'member') &&
                        <li className="nav-item"><NavLink to="/experts" ><i className="ft-aperture" /><span data-i18n className="menu-title">Danh Sách Chuyên Gia</span></NavLink></li>
                      }
                      <li onClick={this.checkClass} className="nav-item has-sub">
                          <a>
                              <i className="ft-edit" />
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

                      <li className=" nav-item"><NavLink to="/help"><i className="ft-book" /><span data-i18n className="menu-title">Hướng Dẫn Sử Dụng</span></NavLink></li>
                      <li className=" nav-item"><NavLink to="/support"><i className="ft-life-buoy" /><span data-i18n className="menu-title">Hỗ Trợ</span></NavLink></li>
                    
                    </ul>
                </div>
                </div>
                <div className="sidebar-background" />
                
            </div>
        )
    }
   
}

export default connect(
  state => ({
    profileUser: state.firebase.profile,
    auth: state.firebase.auth
  }),
  {
   // action
  }
)(MainMenu);