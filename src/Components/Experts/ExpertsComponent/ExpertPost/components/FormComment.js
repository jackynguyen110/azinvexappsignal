import React, { Component } from 'react';
class FormComment extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    comment: ''
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { firestore, expertDetail, profileUser } = this.props;
    await firestore.add(
      {
        collection: 'users',
        doc: expertDetail.id,
        subcollections: [{ collection: 'posts', doc: this.props.postId }, { collection: 'comments' }]
      },
      { user: { photoURL: profileUser.photoURL, displayName: profileUser.displayName},createdAt: firestore.FieldValue.serverTimestamp() ,comment: this.state.comment}
    );
    this.setState({ comment: '' })
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset class="form-group position-relative has-icon-left mb-0">
          <input required type="text" name="comment" value={this.state.comment}
            onChange={this.handleInputChange} class="form-control" placeholder="Write comments..." /> 
          <div class="form-control-position"><i class="fa fa-dashcube"></i></div>
          <div className="form-control-position control-position-right" style={{ top: 2, right: 4, cursor: 'pointer' }}> <button type="submit" style={{height:34}} className="btn btn-raised btn-primary">
            <i className="ft-arrow-right" />
                        </button></div>
        </fieldset>
      </form>
    );
  }
}

export default FormComment;