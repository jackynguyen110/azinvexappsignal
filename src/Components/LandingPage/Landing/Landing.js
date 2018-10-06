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
    if ($(document).scrollTop() > 300) {
      $('.navbar-color-on-scroll').removeClass('navbar-transparent');
    } else {
      $('.navbar-color-on-scroll').addClass('navbar-transparent');
    }
  }

  render() {
    const { profileUser } = this.props;
    return (
      <div className="landing-page sidebar-collapse">
        <Navigation />
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
