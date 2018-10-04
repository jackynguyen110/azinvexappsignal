import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Landing extends Component {

  render() {
    return (
      <div>
        Landing page
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
