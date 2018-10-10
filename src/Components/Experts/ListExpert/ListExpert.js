import React, { Component } from 'react'
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import ExpertCard from '../ExpertsComponent/ExpertCard/ExpertCard';
class ListExpert extends Component {
    componentDidMount() {
        const { firestore } = this.props
        firestore.setListener(
            {
                collection: 'users',
                where: ['role', '==', 'expert'],
                storeAs: 'experts'
            },
        )
    }
    componentWillUnmount() {
        const { firestore } = this.props
        firestore.unsetListener(
            {
                collection: 'users',
                where: ['role', '==', 'expert'],
                storeAs: 'experts'
            })
    }

    render() {
        const { experts } = this.props
        return (
            <section id="outline-variants">
                <div className="row">
                    <div className="col-12 mt-3 mb-1">
                        <div className="content-header">Danh Sách Chuyên Gia</div>
                        <p className="content-sub-header">Tổng Hợp Những Chuyên gia forex hàng đầu từ khắp mọi nơi.</p>
                    </div>
                </div>
                <div className="row match-height">
                    {experts && experts.map(e => <ExpertCard key={e.id} expert={e} />)}
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        experts: state.firestore.ordered.experts,
        currentUser: state.firebase.auth
    })
};
export default connect(mapStateToProps, null)(withFirestore(ListExpert));
