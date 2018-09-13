import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './LoadingComponent.css'
import styles from './LoadingComponent.css'
class LoadingComponent extends Component {
  
  render () {
    
    return (
      <div className = {styles.centered}>
        <ReactLoading type={'cubes'} color={'red'} height={667} width={375} />
      </div>
    );
  }
}

export default LoadingComponent;
