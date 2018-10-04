import React, { Component } from 'react'
import moment from 'moment';
import Chat from './Chat'
import { connect } from 'react-redux';
import { withFirestore, firebaseConnect, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import { objectToArray } from '../../../../app/common/util/helper';
import { addEventComment } from '../../expertsActions'

class SignalRoom extends Component {

  render() {
    const { todayList, activeList, expertDetail, expertChat } = this.props
    return (
      <div>
      <section id="about">
        <div className="row">
          <div className="col-12">
            <div className="content-header">Tín Hiệu</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
                <div className="card-body">
                  <div className="card-block">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className="nav-link active" id="baseIcon-tab1" data-toggle="tab" aria-controls="tabIcon1" href="#tabIcon1" aria-expanded="true"><i className="fa fa-play"></i> Tín Hiệu Miễn Phí </a>
                    </li>
                      {/* <li className="nav-item">
                        <a className="nav-link" id="baseIcon-tab2" data-toggle="tab" aria-controls="tabIcon2" href="#tabIcon2" aria-expanded="false"><i className="fa fa-flag"></i>Tín Hiệu VIP </a>
                    </li> */}
                  </ul>
                    <div className="tab-content px-1 pt-1">
                      <div role="tabpanel" className="tab-pane active" id="tabIcon1" aria-expanded="true" aria-labelledby="baseIcon-tab1">
                    <div className="card-block">
                        <table className="table table-responsive-md text-center">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Cặp Tiền</th>
                              <th>Stoploss</th>
                              <th>TakeProfit</th>
                              <th>Thời Gian mở</th>
                              <th>Giá mở cửa</th>
                              <th>Kết Quả</th>
                            </tr>
                          </thead>
                          <tbody>
                              {activeList && activeList.map(e => <tr key={e.id}>
                                <td><img className="media-object round-media" src="https://thumbs.gfycat.com/ImmaculateUnacceptableArizonaalligatorlizard-size_restricted.gif" alt="Generic placeholder" style={{ height: 35 }} /></td>
                                <td>{e.symbol}</td>
                                <td>{e.stoploss}</td>
                                <td>{e.takeprofit}</td>
                                <td>
                                  {moment(e.startAt.seconds*1000).format('HH:mm DD/MM/YYYY')}
                                </td>
                                <td> {e.openPrice} </td>
                                <td>
                                  <button type="button" className="btn btn-raised btn-info btn-min-width mr-1 mb-1">Running...</button>
                                </td>
                              </tr>)}
                              {todayList && todayList.map(e => <tr key={e.id}>
                                <td><img className="media-object round-media" src="http://pngimages.net/sites/default/files/close-flag-png-image-74376.png" alt="Generic placeholder" style={{ height: 35 }} /></td>
                                <td>{e.symbol}</td>
                                <td>{e.stoploss}</td>
                                <td>{e.takeprofit}</td>
                                <td>
                                  {moment(e.startAt.seconds*1000).format('HH:mm DD/MM/YY')}
                                </td>
                                <td> {e.openPrice} </td>
                                <td>
                                  {e.profit >= 0 ? <button type="button" className="btn btn-raised btn-success btn-min-width mr-1 mb-1">+{e.profit} pips</button> : <button type="button" className="btn btn-raised btn-danger btn-min-width mr-1 mb-1">{e.profit} pips</button>}
                              
                                </td>
                              </tr>)}
                      
                          </tbody>
                        </table>
                      </div>
                    </div>
                 
                      {/* <div className="tab-pane" id="tabIcon2" aria-labelledby="baseIcon-tab2">
                      <p>Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chupa chups. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      <Chat expertChat={expertChat}  expertId={expertDetail.id} />
      </div>
    )
  }
}


const mapState = (state, ownProps) => {
  return {
    loading: state.async.loading,
    expertChat: !isEmpty(state.firebase.data.expert_chat) &&
     objectToArray(state.firebase.data.expert_chat[ownProps.expertDetail.id])
  }
};

const actions = {
  addEventComment
};



export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect(props => [`expert_chat/${props.expertDetail.id}`])
)(SignalRoom);