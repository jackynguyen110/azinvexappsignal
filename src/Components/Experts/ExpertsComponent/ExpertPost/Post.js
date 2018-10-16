import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import FormMessage from './components/FormMessage';
import FormComment from './components/FormComment';
import axios from 'axios';
import moment from 'moment'
import 'moment/locale/vi';
class ExpertPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessageForm : false,
      loading: false
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
    const { imageToUpload, ...newPost } = creds;
    const { firestore, expertDetail } = this.props;
    this.setState({ loading: true })
    let newData = { ...newPost, createdAt: firestore.FieldValue.serverTimestamp()};
    if (creds.imageToUpload) {
      const image = creds.imageToUpload[0];
      let formData = new FormData();
      formData.append('photo', image);
      let axiosConfig = {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
        }
      };
      let url = 'http://api.congtruyendich.com/upload';
      const data = await axios.post(url, formData, axiosConfig);
      this.setState({ imageFile: [] })
      newData = { ...newData, photoURL: data.data.full }
    }
    await firestore.add(
      {
        collection: 'users',
        doc: expertDetail.id,
        subcollections: [{ collection: 'posts' }]
      },
      newData
    );
    this.setState({ loading: false, showMessageForm: false })
  }

  render() {
    const { expertDetail, expertPosts, currentUser} = this.props;
    return (
      <div>
        {currentUser.uid == expertDetail.id ? (!this.state.showMessageForm && <a onClick={() => this.setState({ showMessageForm: true })} className="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-twitter"><span class="fa fa-twitter"></span> TẠO THÔNG BÁO MỚI</a>) : null}
        {this.state.showMessageForm && <FormMessage loading={this.state.loading} addPost={this.addPost} changeState = {() => this.setState({showMessageForm : false})}/> }
        
        <section id="user">   
          <div className="row">
            <div className="col-12">
              <div className="content-header">User Timeline</div>
            </div>
          </div>
          <div id="timeline" className="timeline-center timeline-wrapper">
            <ul className="timeline">
              <li className="timeline-line" />
              {/* <li className="timeline-group">
                <a className="btn btn-raised btn-primary"><i className="fa fa-calendar-o" /> Today</a>
              </li> */}
            </ul>
            <ul className="timeline">
              <li className="timeline-line" />
              {expertPosts.map(e => 
                <li className="timeline-item">
                  <div className="timeline-badge">
                    <span className="avatar avatar-online" data-toggle="tooltip" data-placement="right" title="Eu pid nunc urna integer"><img src={expertDetail.photoURL} class="rounded-circle" alt="avatar" width={40} /></span>
                  </div>
                  <div className="timeline-card card border-grey border-lighten-2">
                    <div className="card-header">
                      <h4 className="mb-0 card-title"><a>{e.title}</a></h4>
                      <div className="card-subtitle text-muted mt-0">
                        <span className="font-small-3">{e.createdAt && moment(e.createdAt.seconds * 1000).calendar()}</span>
                      </div>
                    </div>
                      {e.photoURL && <img className="img-fluid" src={e.photoURL} alt="Timeline Image 1" />}
                      <div className="card-body">
                        <div className="card-block">
                          <p className="card-text">{e.content}</p>   

                       <div className="list-inline mb-1">
                          <span className="pr-1"><a className="primary"><span className="fa fa-thumbs-o-up" /> Like</a></span>
                          <span className="pr-1"><a className="primary"><span className="fa fa-commenting-o" /> Comment</a></span>
                          <span><a className="primary"><span className="fa fa-share-alt" /> Share</a></span>
                        </div>   
                        <div class="card-footer px-0 py-0">
                          <div class="card-block">
                            <div class="media">
                              <div class="media-left"><a><span class="avatar avatar-online"><img src="http://giaoduc.net.vn/Uploaded/vanmao/2012_07_24/DSC_8886a.JPG" alt="avatar" width="50" /></span></a></div>
                                <div class="media-body">
                                  <p class="text-bold-600 mb-0"><a>Crystal Lawson</a></p>
                                  <p class="m-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                
                                  </div>
                                </div>
                            <FormComment profileUser={this.props.profileUser} expertDetail={this.props.expertDetail} firestore={this.props.firestore} postId={e.id} />
    </div>
                              </div>
                      </div>



                    </div>
                  </div>
                </li>     
                )}
             
      
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