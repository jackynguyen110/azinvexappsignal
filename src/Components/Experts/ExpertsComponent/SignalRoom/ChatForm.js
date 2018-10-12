import React, { Component } from 'react'


import TextInputForm from 'app/common/form/TextInputForm';
import { reduxForm , Field } from 'redux-form'
import { addEventComment } from '../../expertsActions'
import { compose } from 'redux'
import { connect } from 'react-redux'
class ChatForm extends Component {
        constructor(props) {
            super(props);
            this.state = {}
        }
    handleSubmitForm = values => {
        console.log(values)
        const { expertId, addEventComment, reset } = this.props;
        addEventComment(expertId, values)
        reset()
        
    }
    
    handleChange = (event) => {
        this.props.handleChange(event.target.value);
      }
      handleShowEmoji = () => {
        this.props.handleShowEmoji();
      }
  render() {
    return (
        <div>
            <form className="chat-app-input row"  onSubmit={this.props.handleSubmit(this.handleSubmitForm)}>
            <fieldset className="form-group position-relative has-icon-left col-lg-10 col-8 m-0">
                <div className="form-control-position"  onClick={() => this.props.handleShowEmoji()} >
                <i className="icon-emoticon-smile" />
                </div>
                <Field component={TextInputForm} className="mw-100 border rounded form-control" name="comment" onChange={this.handleChange} value={this.props.text} placeholder="Type your text..." />
                <div className="form-control-position control-position-right" >
                <i className="ft-image"/>
                </div>
            </fieldset>
            <fieldset className="form-group position-relative has-icon-left col-lg-2 col-4 m-0">
                <button type="Submit" className="btn btn-raised btn-primary" >
                <i className="fa fa-paper-plane-o hidden-lg-up" /> Send</button>
            </fieldset>
        </form>
        
        </div>
    )
  }
}

const actions = {
    addEventComment
  };
export default compose(
    connect(null, actions),
    reduxForm({ form: 'chatForm', enableReinitialize: true }))(ChatForm);
