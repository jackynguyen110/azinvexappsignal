import React, { Component } from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ListExpert from './Components/Experts/ListExpert/ListExpert';
import ExpertDetail from './Components/Experts/ExpertDetail/ExpertDetail';
import LoginForm from './Components/Auth/Login/LoginForm';
import RegisterForm from './Components/Auth/Register/registerForm';
import AccountPage from './Components/user/Settings/AccountPage';
import Changepass from './Components/user/Settings/Changepassword';
import ManageSignal from './Components/ManageSignal/ManageSignal';
import UserManager from './Components/admin/UserManager/UserManager';
import followSignal from './Components/FollowSignal/followSignal';
import LandingPage from './Components/LandingPage/Landing/Landing';
import MainMenu from './Components/Shared/MainMenu';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import Notification from './Components/Shared/Notification';
import ListExperts from './Components/Shared/ListExperts';
import LoadingComponent from './app/layout/Loading/LoadingComponent';

const Layout = (props) => {
  return props.isAuthenticated ? (
    !checkRole(props.role, props.pathname) ? 
      <div id="content">
        {props.children}
      </div>
      : <Redirect to="/403" />
    )
    : <Redirect to="/login" />
}

const checkRole = (role, pathname) => {
  if((role === 'expert' && (pathname === '/dashboard' || pathname === '/experts' || pathname === '/expert/:id' ))
  || (role === 'member' && (pathname === '/managesignal' ))) {
    return true;
  }
  return false;
}

class Routes extends Component {
  
  render () {
    const { isLoaded, role } = this.props.profileUser
    const { isAuthenticated, location } = this.props;
    if (isLoaded) {
      if (isAuthenticated && location.pathname === '/home') {
        const oldlink = document.getElementsByTagName("link").item(17);
        const newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("href", "./landingTemplate/assets/css/material-kit.css");
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
      } else {
        const oldlink = document.getElementsByTagName("link").item(17);
        const newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("href", "./landingTemplate/assets/demo/demo.css");
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
      }
      return (
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/home" component={LandingPage} />
          <Route path="/403" render={() => (<h2>Access to the specified resource has been forbidden.</h2>)} />
          <Switch>
            <Layout role={role} isAuthenticated={isAuthenticated} pathname={this.props.location.pathname}>
              <MainMenu/>
              <Navbar/>
              <Route exact path="/" render={() => (<Redirect to="/home" />)} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/experts" component={ListExpert} />
              <Route exact path="/expert/:id" component={ExpertDetail} />
              <Route exact path="/information" component={AccountPage} />
              <Route exact path="/changepassword" component={Changepass} />
              <Route exact path="/managesignal" component={ManageSignal} />
              <Route exact path="/admin/users" component={UserManager} />
              <Route exact path="/signals" component={followSignal} />
              <Footer/>
              <Notification/>
              <ListExperts/>
            </Layout>
          </Switch>
        </Switch>
      );
    } else{
      return (
        <LoadingComponent />
      )
    }
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: !state.firebase.auth.isEmpty,
    currentUser: state.firebase.auth,
    profileUser: state.firebase.profile
  };
};

export default withRouter(connect(mapStateToProps)(Routes));

