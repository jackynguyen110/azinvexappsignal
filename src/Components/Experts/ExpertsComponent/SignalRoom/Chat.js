import React, {Component} from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { objectToArray } from 'app/common/util/helper';
import ChatForm from './ChatForm';
import { withFirestore, firebaseConnect, isEmpty } from 'react-redux-firebase';

class Chat extends Component {
    render () {
        const {expertChat, addEventComment, currentUser} = this.props
        return (
            <div className="chat-application" style={{height: '700px'}}>
                <section className="chat-app-window">
                {expertChat &&
                    expertChat.map(Chat => (
                        <div className="chats">
                            <div className="chats">
                                <div className={`chat ${Chat.uid !== currentUser.uid ? 'chat-left' : '' }`}>
                                    <div className="chat-avatar">
                                        <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                                        <img src={Chat.photoURL} className="width-50 rounded-circle" alt="avatar" />
                                        </a>
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-content">
                                        <p>{Chat.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))}
                </section>
                  
                <section className="chat-app-form bg-blue-grey bg-lighten-5">
                    <ChatForm expertId={this.props.expertId}/>
                </section>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.firebase.auth,
    }
  }

export default compose ( connect(mapStateToProps, null)
  )(Chat) 