import React,  { Component } from 'react'

import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom';


const actions = ({
    
})

const mapState = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
})


class Navbar extends Component {

    
    handleSignOut = () => {
        this.props.firebase.logout();
    };

    render () {
        const { auth } = this.props
        
        const authenticated = auth.isLoaded && !auth.isEmpty;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-faded">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" data-toggle="collapse" className="navbar-toggle d-lg-none float-left"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
                    <form role="search" className="navbar-form navbar-right mt-1">
                    <div className="position-relative has-icon-right">
                        <input type="text" placeholder="Search" className="form-control round" />
                        <div className="form-control-position"><i className="ft-search" /></div>
                    </div>
                    </form>
                </div>
                <div className="navbar-container">
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        
                                <li className="dropdown nav-item"><a id="dropdownBasic2" role="button" data-toggle="dropdown" className="nav-link position-relative dropdown-toggle"><i className="ft-bell font-medium-3 blue-grey darken-4" /><span className="notification badge badge-pill badge-danger">4</span>
                            <p className="d-none">Notifications</p></a>
                        <div className="notification-dropdown dropdown-menu dropdown-menu-right">
                            <div className="noti-list"><a className="dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4"><i className="ft-bell info float-left d-block font-large-1 mt-1 mr-2" /><span className="noti-wrapper"><span className="noti-title line-height-1 d-block text-bold-400 info">New Order Received</span><span className="noti-text">Lorem ipsum dolor sit ametitaque in, et!</span></span></a><a className="dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4"><i className="ft-bell warning float-left d-block font-large-1 mt-1 mr-2" /><span className="noti-wrapper"><span className="noti-title line-height-1 d-block text-bold-400 warning">New User Registered</span><span className="noti-text">Lorem ipsum dolor sit ametitaque in </span></span></a><a className="dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4"><i className="ft-bell danger float-left d-block font-large-1 mt-1 mr-2" /><span className="noti-wrapper"><span className="noti-title line-height-1 d-block text-bold-400 danger">New Order Received</span><span className="noti-text">Lorem ipsum dolor sit ametest?</span></span></a><a className="dropdown-item noti-container py-3"><i className="ft-bell success float-left d-block font-large-1 mt-1 mr-2" /><span className="noti-wrapper"><span className="noti-title line-height-1 d-block text-bold-400 success">New User Registered</span><span className="noti-text">Lorem ipsum dolor sit ametnatus aut.</span></span></a></div><a className="noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1">Read All Notifications</a>
                        </div>
                        </li>
                        <li className="dropdown nav-item">
                            <a id="dropdownBasic3" data-toggle="dropdown" className="nav-link position-relative dropdown-toggle">
                                <i className="ft-user font-medium-3 blue-grey darken-4" />
                                <p className="d-none">User Settings</p>
                            </a>
                            {authenticated && 
                                <div ngbdropdownmenu="true" aria-labelledby="dropdownBasic3" className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item py-1">
                                    <i className="ft-users mr-2" />
                                    <span>{auth.displayName}</span></a>
                                    <a className="dropdown-item py-1"><i className="ft-edit mr-2" />
                                        <span>Edit Profile</span>
                                    </a>
                                    <a className="dropdown-item py-1"><i className="ft-mail mr-2" />
                                        <span>My Inbox</span>
                                    </a>
                                    <div className="dropdown-divider" />
                                
                                    <a href="#/home" onClick={this.handleSignOut} className="dropdown-item">
                                        <i className="ft-power mr-2" /><span>Logout</span>
                                    </a>
                                </div>
                            }

                            {
                                !authenticated &&
                                <div ngbdropdownmenu='true' aria-labelledby="dropdownBasic3" className="dropdown-menu dropdown-menu-right">
                                    <a onClick={() => this.props.history.push('/login')} className="dropdown-item py-1"><i className="ft-mail mr-2" />
                                    <span>LOGIN</span></a>
                                </div>
                            }

                        </li>
                        <li className="nav-item">
                            <a className="nav-link position-relative notification-sidebar-toggle">
                                <i className="ft-align-left font-medium-3 blue-grey darken-4" />
                                <p className="d-none">Notifications Sidebar</p>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
        )
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(Navbar)));