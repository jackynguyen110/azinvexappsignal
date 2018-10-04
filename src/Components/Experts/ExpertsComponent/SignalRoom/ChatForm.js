import React, { Component } from 'react'
import TextInputForm from 'app/common/form/TextInputForm';
import { reduxForm , Field } from 'redux-form'
import { addEventComment } from '../../expertsActions'
import { compose } from 'redux'
import { connect } from 'react-redux'

class ChatForm extends Component {
        
    handleSubmitForm = values => {
        console.log(this.props.expertId)
        const { expertId, addEventComment, reset } = this.props;
        addEventComment(expertId, values)
        reset()
        
    }
  render() {
    return (
        <form className="chat-app-input row"  onSubmit={this.props.handleSubmit(this.handleSubmitForm)}>
            <fieldset className="form-group position-relative has-icon-left col-lg-10 col-8 m-0">
                <div className="form-control-position">
                <i className="icon-emoticon-smile" />
                </div>
                <Field
                    component={TextInputForm}
                    name="comment"
                    id="comment" 
                    className="mw-100 border rounded form-control" 
                    type="text"
                    placeholder="Type a message..." />
            
                <div className="form-control-position control-position-right">
                <i className="ft-image" />
                </div>
            </fieldset>
            <fieldset className="form-group position-relative has-icon-left col-lg-2 col-4 m-0">
                <button type="Submit" className="btn btn-raised btn-primary">
                <i className="fa fa-paper-plane-o hidden-lg-up" /> Send</button>
            </fieldset>
        </form>
    )
  }
}

const actions = {
    addEventComment
  };
export default compose(
    connect(null, actions),
    reduxForm({ form: 'chatForm', enableReinitialize: true }))(ChatForm);