import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import {  firestoreConnect } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';
class UserManager extends Component {
    setExpert = (uid) => {
        const { firestore } = this.props
        const itemUpdates = {
            role: 'expert',
            totalpips : 0,
            signalWin: 0,
            signalLoss: 0,
            updatedAt: firestore.FieldValue.serverTimestamp()
        }
        firestore.update({ collection: 'users', doc: uid }, itemUpdates)
    }
    unsetExpert = (uid) => {
        const { firestore } = this.props
        const itemUpdates = {
            role: 'member',
            signalLoss: firestore.FieldValue.delete(),
            signalWin: firestore.FieldValue.delete(),
            totalpips: firestore.FieldValue.delete(),
            updatedAt: firestore.FieldValue.serverTimestamp()
        }
        firestore.update({ collection: 'users', doc: uid }, itemUpdates)
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
                                    <th>username</th>
                                    <th>Quyền</th>
                                    <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    users && users.map((user) =>{
                                    if(user.role!=="admin")
                                      return(
                                            <tr key={user.id}>
                                                <td><img className="media-object round-media" src={user.avatar} alt="Generic placeholder" style={{height: 75}} /></td>
                                                <td>{user.email}</td>
                                                <td>{user.displayName}</td>
                                                <td>{user.role}</td>
                                               
                                                <td>
                                                  {user.role === "member" ? <button onClick={() => this.setExpert(user.id)} className="btn btn-success btn-raised">Set Expert</button> : <button onClick={() => this.unsetExpert(user.id)} className="btn btn-danger btn-raised">Unset Expert</button>}
                                                </td>
                                            </tr>)
                                            return(true)
                                        })
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
)(withFirestore(UserManager));