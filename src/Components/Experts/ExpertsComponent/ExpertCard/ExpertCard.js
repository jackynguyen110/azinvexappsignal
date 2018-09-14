import React, { Component } from 'react'
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
class ExpertCard extends Component {
  state = {
    isFollowed: null
  }
  componentDidMount(){
    this.isFollowed()
  }
  async isFollowed() {
    const { currentUser, expert, firestore } = this.props
    const doc = await firestore.get({ collection: 'relationships', doc: `${currentUser.uid}_${expert.id}` })
    this.setState({ isFollowed: doc.exists})
  }
  follow(followedId) {
    const { firestore, currentUser } = this.props
    firestore.set({ collection: 'relationships', doc: `${currentUser.uid}_${followedId}` }, { followedId, followerId: currentUser.uid, createdAt: firestore.FieldValue.serverTimestamp() })
    this.setState({ isFollowed: true })
  }
  unfollow(followedId) {
    const { firestore, currentUser } = this.props
    firestore.delete({ collection: 'relationships', doc: `${currentUser.uid}_${followedId}` })
    this.setState({ isFollowed: false })
  }
  render(){
    const {expert} = this.props
    return(
      <div key={expert.id} className="col-md-6 col-sm-12">
        <div className="card card-outline-primary box-shadow-0 text-center">
          <div className="card-body">
            <div className="card-block  pt-3">
              <div className="row d-flex">
                <div className="col align-self-center">
                  <img src={expert.photoURL} alt="element 05" width={250} className="mb-1" />

                </div>
                <div className="col align-self-center">
                  <h4 className="card-title mt-3">{expert.displayName}</h4>
                  <p className="card-text">{expert.information.about}</p>
                  <button type="button" className="btn btn-raised btn-secondary btn-min-width mr-1 mb-1">Chi Tiết</button>
                  {this.state.isFollowed != null ? (this.state.isFollowed ? <button onClick={() => this.unfollow(expert.id)} type="button" className="btn btn-raised btn-primary btn-min-width mr-1 mb-1">Unfollow</button> : <button onClick={() => this.follow(expert.id)} type="button" className="btn btn-raised btn-primary btn-min-width mr-1 mb-1">Follow</button>):null}
            

                  <ul className="no-list-style">
                    <li className="mb-2">
                      <span className="text-bold-500 primary"><a><i className="icon-present font-small-3"></i> Tỉ lệ Thắng : </a></span>
                      <span className="overflow-hidden"> {
                        (expert.signalLoss + expert.signalWin) != 0 ?
                          Math.round((expert.signalWin / (expert.signalLoss + expert.signalWin)) * 100) : 0} %</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-bold-500 primary"><a><i className="ft-map-pin font-small-3"></i> Số Pips đạt : </a></span>
                      <span className="overflow-hidden"> {expert.totalpips} pips</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    currentUser: state.firebase.auth
  })
};
export default connect(mapStateToProps, null)(withFirestore(ExpertCard));