import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
class ExpertPost extends Component {
  componentDidMount() {
    const { firestore, expertDetail } = this.props;
    firestore.get(
      {
        collection: 'users',
        doc: expertDetail.id,
        subcollections: [{ collection: 'posts' }],
        storeAs: 'expertPosts',
      },
    )
  }
  onFormSubmit = async (creds) => {
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
    return (
      <h1>Hello World</h1>
    )
  }
}
export default connect(null, null)(withFirestore(ExpertPost))