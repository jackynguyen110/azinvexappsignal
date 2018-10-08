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
                        
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
        )
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(Navbar)));