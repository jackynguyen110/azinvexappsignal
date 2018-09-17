import React from 'react';
import { connect } from 'react-redux';
import FormSignal from './Components/FormSignal';
import ListSignal from './Components/ListSignal';
import { withFirestore } from 'react-redux-firebase';
import { SubmissionError } from 'redux-form'
import axios from 'axios';
export const API_URL = 'http://api.azinvex.com/api/';
class ManageSignal extends React.Component {
    componentDidMount(){
        const { firestore, currentUser } = this.props
        firestore.onSnapshot({
            collection: 'signals',
            where: [
                ['user', '==', currentUser.uid],
                ['status', '==', "active"]
            ],
            storeAs: 'myActiveSignals'
        })
    }
    componentWillUnmount() {
        const { firestore, currentUser } = this.props
        firestore.unsetListener({
            collection: 'signals',
            where: [
                ['user', '==', currentUser.uid],
                ['status', '==', "active"]
            ],
            storeAs: 'myActiveSignals'
        }) 
    }
    push = async (creds) => {
        const { firestore, currentUser } = this.props
        const { symbol, type, stoploss, takeprofit } = creds
        const signalData = {
            type,
            stoploss,
            takeprofit,
            symbol,
            isFree: true
        };
        let typeSignal = "SELL";
        if (type === "0") typeSignal = "BUY";
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': currentUser.stsTokenManager.accessToken,
                }
            };
            let url = API_URL + 'signals';
            axios.post(url, signalData, axiosConfig).then((ticket) => {
               console.log(ticket)
            })
        } catch (error) {
            throw new SubmissionError({
                _error: error.message
            })
        }
    }
    render() {
        const { currentUser, myActiveSignals } = this.props
        return (
            <section id="bordered-media-object d-flex mr-3">
                <div className="row" matchheight="card">
                    <FormSignal currentUser={currentUser} />
                    <ListSignal myActiveSignals={myActiveSignals} currentUser={currentUser} />
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        currentUser: state.firebase.auth,
        myActiveSignals: state.firestore.ordered.myActiveSignals
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withFirestore(ManageSignal));