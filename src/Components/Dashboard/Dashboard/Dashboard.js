import React, { Component } from 'react'
import CardHeader from '../DashboadComponents/CardHeader';
import Timeline from '../DashboadComponents/Timeline';
import TopUser from '../DashboadComponents/TopUser';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import { getEventsForDashboard } from '../notificationActions';

 class Dashboard extends Component {
   state = {
     moreEvents: false,
     loadingInitial: true,
     loadedEvents: [],
     contextRef: {}
   }
   async componentDidMount() {
     let next = await this.props.getEventsForDashboard(currentUser);
     if (next && next.docs && next.docs.length > 1) {
       this.setState({
         moreEvents: true,
         loadingInitial: false
       });
     }
     const { firestore, currentUser } = this.props
     firestore.setListener({
         collection: 'users',
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
  const { firestore, currentUser } = this.props
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
     console.log(next)
     if (next && next.docs && next.docs.length <= 1) {
       this.setState({
         moreEvents: false
       });
     }
   };

  render() {
    const { timelineContent, topExpert, currentUser, statistics, loading } = this.props
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
            <Button disable={!this.state.moreEvents} loading={loading} onClick={this.getNextEvents} className="btn btn-raised btn-primary mr-1">
              More
                        </Button>
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
