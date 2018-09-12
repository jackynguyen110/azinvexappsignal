import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import ExpertRoute from '../routes/ExpertRoute';
import Signal from '../../Components/Room/Signal';
import Dashboard from '../../Components/Dashboard/Dashboard/Dashboard';
import ExpertDetail from '../../Components/Experts/Experts/ExpertDetail';
import LoginForm from '../../Components/Auth/Login/LoginForm';
import RegisterForm from '../../Components/Auth/Register/registerForm';
import AccountPage from '../../Components/user/Settings/AccountPage';
import Changepass from '../../Components/user/Settings/Changepassword';
import ReduxToastr from 'react-redux-toastr'
import ManageSignal from '../../Components/ManageSignal/ManageSignal';


class App extends Component {
  
  render () {
    return (
        <div>
            <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
        <Switch>
            <ExpertRoute exact component={Dashboard} path="/" />
            <ExpertRoute exact component={Signal} path="/experts" />
            <ExpertRoute component={ExpertDetail} path="/experts/:id" />
            <ExpertRoute component={LoginForm} path="/login" />
            <ExpertRoute component={RegisterForm} path="/register" />
            <ExpertRoute component={AccountPage} path="/information" />
            <ExpertRoute component={Changepass} path="/changepassword" />
            <ExpertRoute component={ManageSignal} path="/managesignal" />
        </Switch>
        </div>
    );
  }
}

export default App;
