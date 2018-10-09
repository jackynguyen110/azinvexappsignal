import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase'
import moment from 'moment';
import { Link } from 'react-router-dom'
class followSignal extends Component {
    state={
      selectedExpert: undefined
    }
    componentDidMount(){
      const { firestore, currentUser } = this.props;
      firestore.get(
        {
          collection: 'relationships',
          where: ['followerId', '==', currentUser.uid],
          storeAs: 'followedExpert'
        },
      )
    }
    componentWillUnmount(){
      const { firestore } = this.props;
      firestore.unsetListener(
        {
          collection: 'signals',
          where: ['expert.id', '==', this.state.selectedExpert],
          storeAs: 'activeSignals'
        },
      )
    }
    isSelected = (expertId) =>{
      return this.state.selectedExpert === expertId
    }
    selectExpert = async (expertId)=>{
      const { firestore } = this.props;
    if (this.state.selectedExpert){
      firestore.unsetListener(
        {
          collection: 'signals',
          where: ['expert.id', '==', this.state.selectedExpert],
          storeAs: 'activeSignals'
        },
      )
    }
      firestore.setListener(
        {
          collection: 'signals',
          where: ['expert.id', '==', expertId],
          storeAs: 'activeSignals'
        },
      )
      this.setState({ selectedExpert: expertId})
    }
    render() {
      const { followedExpert, activeSignals} = this.props
        return (
            <div className="row match-height">
            <div className="col-xl-4 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Danh Sách Chuyên Gia</h4>
                </div>
                <div className="card-body">
                  <div className="card-block">
                    {followedExpert&&followedExpert.map(e => <div key={e.id} className="media mb-3">
                      <Link to={"/expert/"+ e.followedId}><img alt="96x96" className="media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle" src={e.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuSH7ZmYvOR6pUpUiZrLG7DPo76PL-HAIkSd9o1AEuLbKd41nUw'} />
                      </Link>
                      <div className="media-body">
                        <h4 className="font-medium-1 mt-2 mb-0">{e.displayName || 'NO NAME' }</h4>
                      </div>
                      {!this.isSelected(e.followedId) ? <a onClick={() => this.selectExpert(e.followedId)} className="d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center">View</a> : <a className="d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white">Viewing</a>}
                      
                    </div>)}
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Danh Sách Tín Hiệu</h4>
                </div>
                <div className="card-body">
                  <div className="card-block">
                  <table className="table table-responsive-md text-center">
                          <thead>
                            <tr>
                              <th></th>
                          <th>Ticket</th>
                              <th>Cặp Tiền</th>
                              <th>Stoploss</th>
                              <th>TakeProfit</th>
                              <th>Thời Gian mở</th>
                              <th>Giá mở cửa</th>
                              {/* <th>Kết Quả</th> */}
                            </tr>
                          </thead>
                          <tbody>
                        {activeSignals && activeSignals.map(e =>
                          <tr>
                            <td><img className="media-object round-media" src="https://thumbs.gfycat.com/ImmaculateUnacceptableArizonaalligatorlizard-size_restricted.gif" alt="Generic placeholder" style={{ height: 35 }} /></td>
                            <td>{e.ticket}</td>
                            <td>{e.symbol}</td>
                            <td>{e.stoploss}</td>
                            <td>{e.takeprofit}</td>
                            <td>{moment(e.startAt.seconds*1000).format('HH:mm DD/MM/YYYY')}</td>
                            <td>{e.openPrice}</td>
                            {/* <td>
                              <button type="button" className="btn btn-raised btn-info btn-min-width mr-1 mb-1">Running...</button>
                            </td> */}
                          </tr>
                        )}
                      
                      
                          </tbody>
                        </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}
const mapState = (state) => ({
  currentUser: state.firebase.auth,
  followedExpert: state.firestore.ordered.followedExpert,
  activeSignals: state.firestore.ordered.activeSignals,
});

export default connect(mapState, null)(withFirestore(followSignal));