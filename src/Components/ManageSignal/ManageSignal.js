import React from 'react';
import { connect } from 'react-redux';
import FormSignal from './Components/FormSignal';
import ListSignal from './Components/ListSignal';
import { withFirestore } from 'react-redux-firebase';
import { SubmissionError, reset } from 'redux-form'
import axios from 'axios';
export const API_URL = 'http://api.azinvex.com/api/';
class ManageSignal extends React.Component {
    state = {
        isEditing: false,
        initialValues: {}
    }
    componentDidMount(){
        const { firestore, currentUser, profileUser } = this.props
        console.log(profileUser)
        firestore.onSnapshot({
            collection: 'signals',
            where: [
                ['expert.id', '==', currentUser.uid],
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
    select = (e) =>{
        this.setState({
            isEditing:true,
            initialValues: e
        })
    }
    deselect = () => {
        this.setState({
            isEditing: false,
            initialValues: {}
        })
    }

    close = (ticket) => {
        const { currentUser } = this.props;
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': currentUser.stsTokenManager.accessToken
                }
            };
            let url = API_URL + 'signals/' + ticket;
            axios.patch(url, null, axiosConfig)
        } catch (error) {
            console.log(error)
        }
    }
    update = async (creds) => {
        console.log("update")
        const { currentUser, dispatch } = this.props
        const signalData = {
            stoploss:creds.stoploss,
            takeprofit:creds.takeprofit
        };
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': currentUser.stsTokenManager.accessToken
                }
            };
            let url = API_URL + 'signals/' + this.state.initialValues.id;
            axios.put(url, signalData, axiosConfig)
                .then(response => {
                    console.log(response)
                    dispatch(reset('signal-form'))

                })
        } catch (error) {
            throw new SubmissionError({
                _error: error.message
            })
        }
    }
    push = async (creds) => {
        const { currentUser, dispatch } = this.props
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
                dispatch(reset('signal-form'))
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
                    {this.set}
                    <FormSignal update={this.update} deselect={this.deselect} isEditing={this.state.isEditing} initialValues={this.state.isEditing ? this.state.initialValues : {}} push={this.push} currentUser={currentUser} />
                    <ListSignal select={this.select}  close={this.close} myActiveSignals={myActiveSignals} currentUser={currentUser} />
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

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withFirestore(ManageSignal));