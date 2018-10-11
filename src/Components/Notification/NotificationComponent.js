import React, { Component } from 'react';
import Notification from './lib/Notification';
import notificaion_icon from './media/Notification_btn.png';

class NotificationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: true,
      title: ''
    };
  }

  handlePermissionGranted = () => {
    console.log('Permission Granted');
    this.setState({
      ignore: false
    });
  };
  handlePermissionDenied = () => {
    console.log('Permission Denied');
    this.setState({
      ignore: true
    });
  };
  handleNotSupported = () => {
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  };

  handleNotificationOnClick = (e, tag) => {
    console.log(e, 'Notification clicked tag:' + tag);
  };

  handleNotificationOnError = (e, tag) => {
    console.log(e, 'Notification error tag:' + tag);
  };

  handleNotificationOnClose = (e, tag) => {
    console.log(e, 'Notification closed tag:' + tag);
  };

  handleNotificationOnShow = (e, tag) => {
    this.playSound();
    console.log(e, 'Notification shown tag:' + tag);
  };

  playSound = filename => {
    document.getElementById('sound').play();
  };

  handleButtonClick = () => {

    if(this.state.ignore) {
      return;
    }

    const now = Date.now();

    const title = 'Implement Notification';
    const body = 'Hello Hung.cv';
    const tag = now;
    const icon = notificaion_icon;

    // Available options
    // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: './media/sound.mp3'  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
    };
    this.setState({
      title: title,
      options: options
    });
  };

  render() {

    return (
      <div>
        <button onClick={this.handleButtonClick}>Notification</button>
        <Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported}
          onPermissionGranted={this.handlePermissionGranted}
          onPermissionDenied={this.handlePermissionDenied}
          onShow={this.handleNotificationOnShow}
          onClick={this.handleNotificationOnClick}
          onClose={this.handleNotificationOnClose}
          onError={this.handleNotificationOnError}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
        />
        <audio id='sound' preload='auto'>
          <source src='./media/sound.mp3' type='audio/mpeg' />
          <source src='./media/sound.ogg' type='audio/ogg' />
          <embed hidden='true' autostart='false' loop='false' src='./media/sound.mp3' />
        </audio>
      </div>
    )
  }
}

export default NotificationComponent;
