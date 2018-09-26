import React, { Component } from 'react'
import SignalRoom from '../ExpertsComponent/SignalRoom/SignalRoom';
import Information from '../ExpertsComponent/ExpertInformation/Information';
import { withFirestore } from 'react-redux-firebase'
import { connect } from 'react-redux';
const currentTime = new Date(Date.now());
const day = currentTime.getDate();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const date = new Date(year, month, day);
class ExpertDetail extends Component {
  state = {
    current: "SIGNAL_ROOM",
    isFollowed: null
  }
  async isFollowed() {
    const { currentUser, firestore } = this.props
    const doc = await firestore.get(
      {
        collection: 'users',
        where: ['username', '==', this.props.match.params.id],
        storeAs: 'expertDetail'
      },
    )

    if (doc.docs[0] && doc.docs[0].exists) {
      firestore.setListener(
        {
          collection: 'relationships',
          doc: `${currentUser.uid}_${doc.docs[0].id}`,
          storeAs: 'isFollowed'
        },
      )
    }


  }
  componentDidMount() {
    this.isFollowed()
    const { firestore } = this.props
    firestore.get(
      {
        collection: 'users',
        where: ['username', '==', this.props.match.params.id],
        storeAs: 'expertDetail'
      },
    );

    firestore.setListener(
      {
        collection: 'signals',
        where: [['expert.username', '==', this.props.match.params.id], ['closeAt', '>=', date.getTime()]],
        storeAs: 'todayList'
      },
    )
    firestore.setListener(
      {
        collection: 'signals',
        where: [['expert.username', '==', this.props.match.params.id], ['status', '==', "active"]],
        storeAs: 'activeList'
      },
    )
  }
  componentWillUnmount() {
    const { firestore, currentUser, expertDetail } = this.props
    firestore.unsetListener(
      {
        collection: 'relationships',
        doc: `${currentUser.uid}_${expertDetail.id}`
      },
    )
    firestore.unsetListener(
      {
        collection: 'signals',
        where: [['expert.username', '==', this.props.match.params.id], ['status', '==', "active"]],
      },
    )
    firestore.unsetListener(
      {
        collection: 'signals',
        where: [['expert.username', '==', this.props.match.params.id], ['closeAt', '>=', date.getTime()]],
      },
    )
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

  renderSwitch = () => {
    const { expertDetail, todayList, activeList } = this.props
    switch (this.state.current) {
      case "SIGNAL_ROOM":
        return <SignalRoom activeList={activeList} todayList={todayList} />;
      case "INFOMARTION":
        return <Information expertDetail={expertDetail} />;
      default:
        return '';
    }
  }

  render() {
    const { expertDetail, isFollowed} = this.props
    return (
      <div>
        <section id="user-profile">
          <div className="row">
            <div className="col-12">
              <div className="card profile-with-cover">
                <div className="card-img-top img-fluid bg-cover height-300" style={{ background: 'url("http://www.design-outsource.com/img/ui-design-banner.jpg") 50%' }} />
                <div className="media profil-cover-details row">
                  <div className="col-5">
                    <div className="align-self-start halfway-fab pl-3 pt-2">
                      <div className="text-left">
                        <h3 className="card-title white">Jose Diaz</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="align-self-center halfway-fab text-center">
                      <a className="profile-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCm8Eib1xz1oZ5WO3bSMRlNVzj-YdQfNPfIs1-pnVVR0ngn4Uf4Q" className="rounded-circle img-border gradient-summer width-100 height-100" alt="Cardimage" />
                      </a>
                    </div>
                  </div>
                  <div className="col-5">
                  </div>
                  <div className="profile-cover-buttons">
                    <div className="media-body halfway-fab align-self-end">
                      <div className="text-right d-none d-sm-none d-md-none d-lg-block">
                        {isFollowed !== null ? (isFollowed ? <button onClick={() => this.unfollow(expertDetail.id)} type="button" className="btn btn-raised btn-primary btn-min-width mr-1 mb-1">Unfollow</button> : <button onClick={() => this.follow(expertDetail.id)} type="button" className="btn btn-raised btn-primary btn-min-width mr-1 mb-1">Follow</button>) : null}
                        {/* <button type="button" className="btn btn-primary btn-raised mr-2"><i className="fa fa-plus" /> Theo Dõi</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-section">
                  <div className="row">
                    <div className="col-lg-5 col-md-5 ">
                      <ul className="profile-menu no-list-style">
                        <li>
                          <a onClick={() => this.setState({ current: "SIGNAL_ROOM" })} className="primary font-medium-2 font-weight-600">Phòng Tín Hiệu</a>
                        </li>
                        <li>
                          <a onClick={() => this.setState({ current: 'INFOMARTION' })} className="primary font-medium-2 font-weight-600">Thông Tin</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center">
                      <span className="font-medium-2 text-uppercase">{expertDetail.displayName}</span>
                      <p className="grey font-small-2">Chuyên Gia Forex</p>
                    </div>
                    <div className="col-lg-5 col-md-5">
                      <ul className="profile-menu no-list-style">
                        <li>
                          <a href="#friends" className="primary font-medium-2 font-weight-600">Lịch Sử</a>
                        </li>
                        <li>
                          <a href="#photos" className="primary font-medium-2 font-weight-600">Photos</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {this.renderSwitch()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  let currentExpert = {};
  if (state.firestore.ordered.expertDetail && state.firestore.ordered.expertDetail[0]) {
    currentExpert = state.firestore.ordered.expertDetail[0];
  }
  return {
    expertDetail: currentExpert,
    currentUser: state.firebase.auth,
    activeList: state.firestore.ordered.activeList ? state.firestore.ordered.activeList : [],
    todayList: state.firestore.ordered.todayList ? state.firestore.ordered.todayList : [],
    isFollowed: state.firestore.ordered.isFollowed ? (state.firestore.ordered.isFollowed[0] ? true:false) : null 
  }
}
export default connect(mapStateToProps, null)(withFirestore(ExpertDetail))