import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { withFirebase } from "react-redux-firebase";
import { connect } from 'react-redux';
import $ from 'jquery';

import Footer from '../LandingComponent/Footer';
import Navigation from '../LandingComponent/Navigation';
import HeaderContent from '../LandingComponent/HeaderContent';
import MainContent from '../LandingComponent/MainContent';

class Landing extends Component {
  componentDidMount() {
    if ($('.navbar-color-on-scroll').length !== 0) {
      $(window).on('scroll', this.checkScrollForTransparentNavbar);
    }

    var materialKit = {
      misc: {
        navbar_menu_visible: 0,
        window_width: 0,
        transparent: true,
        colored_shadows: true,
        fixedTop: false,
        navbar_initialized: false,
        isWindow: document.documentMode || /Edge/.test(navigator.userAgent)
      }
    }

    $(document).on('click', '.navbar-toggler', function() {
      var $toggle = $(this);
    
      if (materialKit.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        materialKit.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function() {
          $toggle.removeClass('toggled');
        }, 550);
    
        $('html').removeClass('nav-open-absolute');
      } else {
        setTimeout(function() {
          $toggle.addClass('toggled');
        }, 580);
    
    
        var div = '<div id="bodyClick"></div>';
        $(div).appendTo("body").click(function() {
          $('html').removeClass('nav-open');
    
          if ($('nav').hasClass('navbar-absolute')) {
            $('html').removeClass('nav-open-absolute');
          }
          materialKit.misc.navbar_menu_visible = 0;
          $('#bodyClick').remove();
          setTimeout(function() {
            $toggle.removeClass('toggled');
          }, 550);
        });
    
        if ($('nav').hasClass('navbar-absolute')) {
          $('html').addClass('nav-open-absolute');
        }
    
        $('html').addClass('nav-open');
        materialKit.misc.navbar_menu_visible = 1;
      }
    });
  }

  checkScrollForTransparentNavbar = () => {
    if ($(document).scrollTop() > 300) {
      $('.navbar-color-on-scroll').removeClass('navbar-transparent');
    } else {
      $('.navbar-color-on-scroll').addClass('navbar-transparent');
    }
  }

  render() {
    const { profileUser, isAuthenticated, auth } = this.props;
    return (
      <div className="landing-page sidebar-collapse">
        <Navigation
          profileUser={profileUser}
          isAuthenticated={isAuthenticated}
          auth = {auth}
          firebase={this.props.firebase}
        />
        <HeaderContent />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default withRouter(withFirebase(connect(
  state => ({
    auth: state.firebase.auth,
    isAuthenticated: !state.firebase.auth.isEmpty,
    profileUser: state.firebase.profile
  }),
  {
    // action
  }
)(Landing)));
