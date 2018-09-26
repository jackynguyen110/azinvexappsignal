import React, { Component } from 'react'
import CardHeader from '../DashboadComponents/CardHeader';
import Timeline from '../DashboadComponents/Timeline';
import TopUser from '../DashboadComponents/TopUser';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
 class Dashboard extends Component {

   componentDidMount() {
     const { firestore, currentUser } = this.props
     firestore.setListener({
         collection: 'users',
         orderBy: ['totalpips'],
         storeAs: 'topExpert',
         limit: 5
       })
     firestore.setListener({
       collection: 'notifications',
       where: ['uid', '==', currentUser.uid],
     })
   }

  render() {
    const { timelineContent, topExpert, currentUser } = this.props
    return (
        <div>
          <CardHeader/>
        <div className="row">
          <div className="col-md-8">
            <Timeline timelineContent={timelineContent}/>
            </div>
          <div className="col-md-4">
            <TopUser currentUser={currentUser} topExpert={topExpert}/>
            </div>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    topExpert: state.firestore.ordered.topExpert,
    currentUser: state.firebase.auth,
    timelineContent: state.firestore.ordered.notifications,
  })
};
export default connect(mapStateToProps, null)(withFirestore(Dashboard));
