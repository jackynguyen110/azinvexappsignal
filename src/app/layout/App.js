import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom'
import ExpertRoute from '../routes/ExpertRoute';
import Dashboard from '../../Components/Dashboard/Dashboard/Dashboard';
import ListExpert from '../../Components/Experts/ListExpert/ListExpert';
import ExpertDetail from '../../Components/Experts/ExpertDetail/ExpertDetail';
import LoginForm from '../../Components/Auth/Login/LoginForm';
import RegisterForm from '../../Components/Auth/Register/registerForm';
import AccountPage from '../../Components/user/Settings/AccountPage';
import Changepass from '../../Components/user/Settings/Changepassword';
import ReduxToastr from 'react-redux-toastr'
import ManageSignal from '../../Components/ManageSignal/ManageSignal';
import PageRoute from '../routes/PageRoute';
import { connect } from 'react-redux';
import LoadingComponent from './Loading/LoadingComponent'
import UserManager from '../../Components/admin/UserManager/UserManager';
import followSignal from '../../Components/FollowSignal/followSignal';
class App extends Component {
  
  render () {
    
    const { isLoaded, role } = this.props.profileUser
    const { isAuthenticated } = this.props
    if (isLoaded) {
      return (
        <div>
          <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
          <Switch>
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} exact component={Dashboard} path="/" />
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} exact component={ListExpert} path="/experts" />
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} component={ExpertDetail} path="/expert/:id" />
            <PageRoute isAuthenticated={isAuthenticated}  component={LoginForm} path="/login" />
            <PageRoute isAuthenticated={isAuthenticated}  component={RegisterForm} path="/register" />
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} component={AccountPage} path="/information" />
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} component={Changepass} path="/changepassword" />
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} component={ManageSignal} path="/managesignal" />
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} component={UserManager} path="/admin/users" />
            <ExpertRoute role={role} isAuthenticated={isAuthenticated} component={followSignal} path="/signals" />
            <ExpertRoute noMatch={true} isAuthenticated={isAuthenticated} component={followSignal} path="*" />
          </Switch>
        </div>
      );
    }
    else{
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
    profileUser: state.firebase.profile,
  };
};
const mapDispatchToProps = dispatch => {
  return {

  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

