import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router-dom'
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
class App extends Component {
  
  render () {
    
    const { isLoaded } = this.props.profileUser
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
            <ExpertRoute isAuthenticated={isAuthenticated} exact component={Dashboard} path="/" />
            <ExpertRoute isAuthenticated={isAuthenticated} exact component={ListExpert} path="/experts" />
            <ExpertRoute isAuthenticated={isAuthenticated} component={ExpertDetail} path="/expert/:id" />
            <PageRoute isAuthenticated={isAuthenticated}  component={LoginForm} path="/login" />
            <PageRoute isAuthenticated={isAuthenticated}  component={RegisterForm} path="/register" />
            <ExpertRoute isAuthenticated={isAuthenticated} component={AccountPage} path="/information" />
            <ExpertRoute isAuthenticated={isAuthenticated} component={Changepass} path="/changepassword" />
            <ExpertRoute isAuthenticated={isAuthenticated} component={ManageSignal} path="/managesignal" />
            <ExpertRoute isAuthenticated={UserManager} component={UserManager} path="/admin/users" />
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

