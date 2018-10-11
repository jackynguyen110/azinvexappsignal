import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import axios from 'axios';
import { asyncActionError, asyncActionStart, asyncActionFinish } from 'Components/async/asyncActions';
import { withFirestore } from 'react-redux-firebase';
class PhotoPage extends Component {
  state = {
    files: [],
    link: '',
    fileName: ''
  }
  uploadImage = async () => {
    const { dispatch } = this.props
    try {
      dispatch(asyncActionStart());
      let formData = new FormData();
      formData.append('photo', this.state.files[0]);
      let axiosConfig = {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
        }
      };
      let url = 'http://api.congtruyendich.com/upload';
      axios.post(url, formData, axiosConfig).then((data) => {
        this.setState({ link: data.data.full})
        dispatch(asyncActionFinish());
      }).catch(error => {
        console.log(error)
        dispatch(asyncActionError());
      })
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      throw new Error('Problem uploading photo');
    }
  };
  onDrop = (files) => {
    this.setState({
      files,
      fileName: files[0].name
    })
  }
  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop} multiple={false}>
        </Dropzone>
        {this.state.files[0] && <img width="200px" src={this.state.files[0].preview} />}
        <button onClick={this.uploadImage}>Upload</button>
        {this.state.link && <h1>{this.state.link}</h1>}
      </div>

    )
  }
}

export default connect(null, null)(withFirestore(PhotoPage))