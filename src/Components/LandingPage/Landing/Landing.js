import React, { Component } from 'react'
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
    console.log('test');
    if ($(document).scrollTop() > 500) {
      $('.navbar-color-on-scroll').removeClass('navbar-transparent');
    } else {
      $('.navbar-color-on-scroll').addClass('navbar-transparent');
    }
  }

  render() {
    const { profileUser } = this.props;
    return (
      <div className="landing-page sidebar-collapse">
        <Navigation role={profileUser.role} />
        <HeaderContent />
        <MainContent />
        <Footer />
      </div>
    )
  }
}
export default connect(
  state => ({
    profileUser: state.firebase.profile
  }),
  {
    // action
  }
)(Landing);
