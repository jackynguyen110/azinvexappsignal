import React, { Component } from 'react';
import firebase from 'app/config/firebase';
class ListComment extends Component {
  state = {
    listComment: []
  }
  componentDidMount(){
    const { postId, expertDetail} = this.props
    const db = firebase.firestore();
    db.collection("users").doc(expertDetail.id).collection('posts').doc(postId).collection('comments')
      .onSnapshot((querySnap) => {
        let events = [];
        if (!querySnap.empty){
          for (let i = 0; i < querySnap.docs.length; i++) {
            let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
            events.push(evt);
          }
        }
        this.setState({listComment: events})
    })
  }
compon
  render(){
    const { listComment } = this.state
    return(
      <div>
        {listComment.map(e => <div class="media">
          <div class="media-left"><a><span class="avatar avatar-online"><img src={e.user.photoURL} alt="avatar" width="50" /></span></a></div>
          <div class="media-body">
            <p class="text-bold-600 mb-0"><a>{e.user.displayName} </a></p>
            <p class="m-0">{e.comment}</p>

          </div>
        </div>)}
      </div>
    )
  }
}
export default ListComment