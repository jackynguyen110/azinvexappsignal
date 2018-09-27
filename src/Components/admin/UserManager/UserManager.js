import React, { Component } from 'react';
import Avatar from 'assets/img/elements/01.png'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {  firestoreConnect } from 'react-redux-firebase';
import { objectToArray } from '../../../app/common/util/helper';

class UserManager extends Component {

    changRole = () => {

    }
    
    render() {
        const { users } = this.props;
        return (
            
            <section id="shopping-cart">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Danh sách users</h4>
                            </div>
                            <div className="card-body">
                            <div className="card-block">
                                <table className="table table-responsive-md text-center">
                                <thead>
                                    <tr>
                                    <th></th>
                                    <th>email</th>
                                    <th>tên hiển thị</th>
                                    <th>Quyền</th>
                                    <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    users && users.map(user =>        
                                            <tr>
                                                <td><img className="media-object round-media" src={user.avatar} alt="Generic placeholder image" style={{height: 75}} /></td>
                                                <td>{user.email}</td>
                                                <td>{user.displayname}</td>
                                                <td>{user.role}</td>
                                               
                                                <td>
                                                    <button onClick={this.changRole} class="btn btn-success btn-raised">Experts</button>
                                                </td>
                                            </tr>
                                        )
                                }
                              
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
        );
    }
}

const mapState = (state) => ({
    users:  state.firestore.ordered.users
});

export default compose (
    connect(mapState, null),
    firestoreConnect(['users']),
)(UserManager);