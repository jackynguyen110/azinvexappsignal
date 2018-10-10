import React, { Component } from 'react'
import CardHeader from '../DashboadComponents/CardHeader';
import Timeline from '../DashboadComponents/Timeline';
import TopUser from '../DashboadComponents/TopUser';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { getEventsForDashboard } from '../notificationActions';
import firebase from 'app/config/firebase';
 class Dashboard extends Component {
   state = {
     moreEvents: false,
     loadingInitial: true,
     loadedEvents: [],
     contextRef: {}
   }
   async componentDidMount() {
    //  const db = firebase.firestore();
    //  db.collection("signals")
    //    .onSnapshot(function (snapshot) {
    //      snapshot.docChanges().forEach(function (change) {
    //        if (change.type === "added") {
    //          console.log("New city: ", change.doc.data());
    //        }
    //        if (change.type === "modified") {
    //          console.log("Modified city: ", change.doc.data());
    //        }
    //        if (change.type === "removed") {
    //          console.log("Removed city: ", change.doc.data());
    //        }
    //      });
    //    });
     const { firestore } = this.props
     let next = await this.props.getEventsForDashboard();
     if (next && next.docs && next.docs.length > 1) {
       this.setState({
         moreEvents: true,
         loadingInitial: false
       });
     }
     firestore.onSnapshot({ collection: 'signals' })
     firestore.setListener({
         collection: 'users',
          where: ['role', '==', 'expert'],
         orderBy: ['totalpips'],
         storeAs: 'topExpert',
         limit: 5
       })
     firestore.setListener({
       collection: 'statistics',
       doc: 'website'
     })
   }
   componentWillReceiveProps(nextProps) {
     if (this.props.timelineContent !== nextProps.timelineContent) {
       this.setState({
         loadedEvents: [...this.state.loadedEvents, ...nextProps.timelineContent]
       });
     }
   }
componentWillUnmount(){
  const { firestore } = this.props
  firestore.unsetListener({
    collection: 'users',
    orderBy: ['totalpips'],
    limit: 5
  })
}
   getNextEvents = async () => {
     const { timelineContent } = this.props;
     let lastEvent = timelineContent && timelineContent[timelineContent.length - 1];
     let next = await this.props.getEventsForDashboard(lastEvent);
     if (next && next.docs && next.docs.length <= 1) {
       this.setState({
         moreEvents: false
       });
     }
   };

  render() {
    const { topExpert, currentUser, statistics, loading } = this.props
    const { moreEvents, loadedEvents } = this.state;
    return (
        <div>
        <CardHeader statistics={statistics}/>
        <div className="row">
          <div className="col-md-8">
            <Timeline loading={loading}
              moreEvents={moreEvents}
              timelineContent={loadedEvents}
              getNextEvents={this.getNextEvents} />
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
    statistics: state.firestore.ordered.statistics ? state.firestore.ordered.statistics[0] : {activeSignal:0,experts:0,pips:0,users:0},
    loading: state.async.loading,
    timelineContent: state.events,
  })
};
const actions = {
  getEventsForDashboard
};
export default connect(mapStateToProps, actions)(withFirestore(Dashboard));
