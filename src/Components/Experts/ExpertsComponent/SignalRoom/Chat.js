import React,  { Component } from 'react'

const Chat = () => {
    return (
        <div className="chat-application" style={{height: '700px'}}>
            <section className="chat-app-window">
                <div className="chats">
                    <div className="chats">
                        <div className="chat">
                        <div className="chat-avatar">
                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                            <img src="../app-assets/img/portrait/small/avatar-s-1.png" className="width-50 rounded-circle" alt="avatar" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-content">
                            <p>How can we help? We're here for you!</p>
                            </div>
                        </div>
                        </div>
                        <div className="chat chat-left">
                        <div className="chat-avatar">
                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title data-original-title>
                            <img src="../app-assets/img/portrait/small/avatar-s-7.png" className="width-50 rounded-circle" alt="avatar" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-content">
                            <p>Hey John,  I am looking for the best admin template.</p>
                            <p>Could you please help me to find it out?</p>
                            </div>
                            <div className="chat-content">
                            <p>It should be Bootstrap 4 compatible.</p>
                            </div>
                        </div>
                        </div>
                        <div className="chat">
                        <div className="chat-avatar">
                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                            <img src="../app-assets/img/portrait/small/avatar-s-1.png" className="width-50 rounded-circle" alt="avatar" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-content">
                            <p>Absolutely!</p>
                            </div>
                            <div className="chat-content">
                            <p>Apex admin is the responsive bootstrap 4 admin template.</p>
                            </div>
                        </div>
                        </div>
                        <p className="time">1 hours ago</p>
                        <div className="chat chat-left">
                        <div className="chat-avatar">
                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title data-original-title>
                            <img src="../app-assets/img/portrait/small/avatar-s-7.png" className="width-50 rounded-circle" alt="avatar" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-content">
                            <p>Looks clean and fresh UI.</p>
                            </div>
                            <div className="chat-content">
                            <p>It's perfect for my next project.</p>
                            </div>
                            <div className="chat-content">
                            <p>How can I purchase it?</p>
                            </div>
                        </div>
                        </div>
                        <div className="chat">
                        <div className="chat-avatar">
                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                            <img src="../app-assets/img/portrait/small/avatar-s-1.png" className="width-50 rounded-circle" alt="avatar" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-content">
                            <p>Thanks, from ThemeForest.</p>
                            </div>
                        </div>
                        </div>
                        <div className="chat chat-left">
                        <div className="chat-avatar">
                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="left" title data-original-title>
                            <img src="../app-assets/img/portrait/small/avatar-s-7.png" className="width-50 rounded-circle" alt="avatar" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-content">
                            <p>I will purchase it for sure.</p>
                            </div>
                            <div className="chat-content">
                            <p>Thanks.</p>
                            </div>              
                        </div>
                        </div>
                        <div className="chat">
                        <div className="chat-avatar">
                            <a className="avatar" data-toggle="tooltip" href="#" data-placement="right" title data-original-title>
                            <img src="../app-assets/img/portrait/small/avatar-s-1.png" className="width-50 rounded-circle" alt="avatar" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-content">
                            <p>Great, Feel free to get in touch on</p>
                            </div>
                            <div className="chat-content">
                            <p>https://pixinvent.ticksy.com/</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            <section className="chat-app-form bg-blue-grey bg-lighten-5">
                <form className="chat-app-input row">
                    <fieldset className="form-group position-relative has-icon-left col-lg-10 col-8 m-0">
                        <div className="form-control-position">
                        <i className="icon-emoticon-smile" />
                        </div>
                        <input type="text" className="form-control" id="iconLeft4" placeholder="Type your message" /> 
                        <div className="form-control-position control-position-right">
                        <i className="ft-image" />
                        </div>
                    </fieldset>
                    <fieldset className="form-group position-relative has-icon-left col-lg-2 col-4 m-0">
                        <button type="button" className="btn btn-raised btn-primary">
                        <i className="fa fa-paper-plane-o hidden-lg-up" /> Send</button>
                    </fieldset>
                </form>
            </section>
        </div>

    )
}

export default Chat