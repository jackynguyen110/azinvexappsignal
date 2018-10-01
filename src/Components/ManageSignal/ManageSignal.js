import React from 'react';
import { connect } from 'react-redux';
import FormSignal from './Components/FormSignal';
import ListSignal from './Components/ListSignal';
import { withFirestore } from 'react-redux-firebase';

class ManageSignal extends React.Component {

    render() {
        return (
            <section id="bordered-media-object d-flex mr-3">
                <div className="row" matchheight="card">
                    {this.set}
                    <FormSignal />
                    <ListSignal />
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        currentUser: state.firebase.auth,
        profileUser: state.firebase.profile,
        myActiveSignals: state.firestore.ordered.myActiveSignals
    };
};


export default connect(mapStateToProps, null)(withFirestore(ManageSignal));