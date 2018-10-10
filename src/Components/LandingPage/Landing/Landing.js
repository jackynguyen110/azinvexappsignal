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
