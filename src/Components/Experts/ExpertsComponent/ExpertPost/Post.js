import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import FormMessage from './components/FormMessage';


class ExpertPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessageForm : false
    }
  }
  componentDidMount() {
    const { firestore, expertDetail } = this.props;
    firestore.setListener(
      {
        collection: 'users',
        doc: expertDetail.id,
        subcollections: [{ collection: 'posts' }],
        storeAs: 'expertPosts',
      },
    )
  }
  addPost = async (creds) => {
    const { firestore, expertDetail } = this.props;
    await firestore.add(
      {
        collection: 'users',
        doc: expertDetail.uid,
        subcollections: [{ collection: 'post' }]
      },
      {
        content: creds.content
      }
    );

  }

  render() {
    const { expertDetail } = this.props;
    return (
      <div>
        {!this.state.showMessageForm && <a onClick={() => this.setState({showMessageForm : true})} className="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-twitter"><span class="fa fa-twitter"></span> TẠO THÔNG BÁO MỚI</a> }
        {this.state.showMessageForm && <FormMessage changeState = {() => this.setState({showMessageForm : false})}/> }
        
        <section id="user">   
          <div className="row">
            <div className="col-12">
              <div className="content-header">User Timeline</div>
            </div>
          </div>
          <div id="timeline" className="timeline-center timeline-wrapper">
            <ul className="timeline">
              <li className="timeline-line" />
              <li className="timeline-group">
                <a className="btn btn-raised btn-primary"><i className="fa fa-calendar-o" /> Today</a>
              </li>
            </ul>
            <ul className="timeline">
              <li className="timeline-line" />
              <li className="timeline-item">
                <div className="timeline-badge">
                  <span className="avatar avatar-online" data-toggle="tooltip" data-placement="right" title="Eu pid nunc urna integer"><img src={expertDetail.photoURL} class="rounded-circle" alt="avatar" width={40} /></span>
                </div>
                <div className="timeline-card card border-grey border-lighten-2">
                  <div className="card-header">
                    <h4 className="mb-0 card-title"><a>Portfolio project work</a></h4>
                    <div className="card-subtitle text-muted mt-0">
                      <span className="font-small-3">5 hours ago</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <img className="img-fluid" src="http://hinhnendepnhat.net/wp-content/uploads/2016/04/anh-girl-xinh-gai-dep-sieu-nong-bong.jpg" alt="Timeline Image 1" />
                    <div className="card-body">
                      <div className="card-block">
                        <p className="card-text">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>

                        {/* <div className="list-inline mb-1">
                          <span className="pr-1"><a className="primary"><span className="fa fa-thumbs-o-up" /> Like</a></span>
                          <span className="pr-1"><a className="primary"><span className="fa fa-commenting-o" /> Comment</a></span>
                          <span><a className="primary"><span className="fa fa-share-alt" /> Share</a></span>
                        </div> */}

                      </div>
                    </div>

                    {/* <div className="card-footer px-0 py-0">
                      <div className="card-block">
                        <form>
                          <fieldset className="form-group position-relative has-icon-left mb-0">
                            <input type="text" className="form-control" placeholder="Write comments..." />
                            <div className="form-control-position">
                              <i className="fa fa-dashcube" />
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div> */}

                  </div>
                </div>
              </li>            
              {/* <li className="timeline-item mt-5">
                <div className="timeline-badge">
                  <span className="avatar avatar-online" data-toggle="tooltip" data-placement="right" title="Eu pid nunc urna integer"><img src={expertDetail.photoURL} alt="avatar" width={40} /></span>
                </div>
                <div className="timeline-card card card-inverse">
                  <img className="card-img img-fluid" src="https://nhipsongonline.net/wp-content/uploads/2017/08/gai-dep-sexy-12882-6-.jpg" alt="Card image" />
                  <div className="card-img-overlay bg-overlay">
                    <h4 className="card-title">Good Morning</h4>
                    <p className="card-text"><small>15 hours ago</small></p>
                  </div>
                </div>
              </li> */}
            </ul>
            {/* 2016 */}
            <ul className="timeline">
              <li className="timeline-line" />
              <li className="timeline-group">
                <a className="btn btn-raised btn-primary"><i className="fa fa-calendar-o" /> 2016</a>
              </li>
            </ul>
            <ul className="timeline">
              <li className="timeline-line" />{/* /.timeline-line */}
              <li className="timeline-item">
                <div className="timeline-badge">
                  <span className="bg-warning bg-darken-1" data-toggle="tooltip" data-placement="right" title="Application API Support"><i className="fa fa-life-ring" /></span>
                </div>
                <div className="timeline-card card border-grey border-lighten-2">
                  <div className="card-header">
                    <div className="media">
                      <div className="media-left">
                        <a>
                          <span className="avatar avatar-md avatar-busy"><img src="https://image1.thegioitre.vn/2018/10/08/tgt_nu-game-thu_hoang-kieu_nong-bong_avt.jpg" class="rounded-circle" alt="avatar" width={50} /></span>
                          <i />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="mb-0 card-title"><a>Application API Support</a></h4>
                        <div className="card-subtitle text-muted mt-0">
                          <span className="font-small-3">15 Oct, 2016 at 8.00 A.M</span>
                          <span className="tag tag-pill tag-default tag-warning float-right">High</span>
                        </div>  
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <img className="img-fluid" src="https://image1.thegioitre.vn/2018/10/08/tgt_nu-game-thu_hoang-kieu_nong-bong_avt.jpg" alt="Timeline Image 1" />
                    <div className="card-body">
                      <div className="card-block">
                        <p className="card-text">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>
                        <div className="list-inline mb-1">
                          <span className="pr-1"><a className="primary"><span className="fa fa-commenting-o" /> Comment</a></span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer px-0 py-0">
                      <div className="card-block">
                        <div className="media">
                          <div className="media-left">
                            <a>
                              <span className="avatar avatar-online"><img src="../app-assets/img/portrait/small/avatar-s-14.png" alt="avatar" width={50} /></span>
                            </a>
                          </div>
                          <div className="media-body">
                            <p className="text-bold-600 mb-0"><a>Crystal Lawson</a></p>
                            <p className="m-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                            <div className="media">
                              <div className="media-left">
                                <a>
                                  <span className="avatar avatar-online"><img src="http://giaoduc.net.vn/Uploaded/vanmao/2012_07_24/DSC_8886a.JPG" alt="avatar" width={50} /></span>
                                </a>
                              </div>
                              <div className="media-body">
                                <p className="text-bold-600 mb-0"><a>Rafila Găitan</a></p>
                                <p>Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <form>
                          <fieldset className="form-group position-relative has-icon-left mb-0">
                            <input type="text" className="form-control" placeholder="Write comments..." />
                            <div className="form-control-position">
                              <i className="fa fa-dashcube" />
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline-item mt-5">
                <div className="timeline-badge">
                  <span className="bg-amber bg-darken-1" data-toggle="tooltip" data-placement="left" title="Quote of the day"><i className="fa fa-smile-o" /></span>
                </div>
                <div className="timeline-card card border-grey border-lighten-2">
                  <div className="card-header">
                    <h4 className="mb-0 card-title"><a>Quote of the day</a></h4>
                    <div className="card-subtitle text-muted mt-0">
                      <span className="font-small-3">03 March, 2016 at 5 P.M</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <img className="img-fluid" src="http://giaoduc.net.vn/Uploaded/vanmao/2012_07_24/DSC_8886a.JPG" alt="Timeline Image 1" />
                    <div className="card-block">
                      <blockquote className="card-blockquote">
                        <p className="card-text">Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?</p>
                        <footer>Someone famous in <cite title="Source Title"> - Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 2015 */}
            <ul className="timeline">
              <li className="timeline-line" />
              <li className="timeline-group">
                <a className="btn btn-raised btn-primary"><i className="fa fa-calendar-o" /> Founded in 2015</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
     
    )
  }
}
const mapStateToProps = state => {
  return {
    expertPosts: state.firestore.ordered.expertPosts ? state.firestore.ordered.expertPosts : [],
  };
};
export default connect(mapStateToProps, null)(withFirestore(ExpertPost))