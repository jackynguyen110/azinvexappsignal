import React, { Component } from "react";
import ReduxToastr from 'react-redux-toastr'
import Routes from "./Routes";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {

  render() {
    const { location } = this.props;
    if (location.pathname === '/home') return <Routes />
    return (
      <div className="wrapper nav-collapsed menu-collapsed">
        <div className="main-panel">
          <div className="main-content">
            <div className="content-wrapper">
              <ReduxToastr
                position='bottom-right'
                transitionIn='fadeIn'
                transitionOut='fadeOut'
              />
              <Routes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !state.firebase.auth.isEmpty,
    currentUser: state.firebase.auth,
    profileUser: state.firebase.profile
  };
};

export default withRouter(connect(mapStateToProps)(App));
