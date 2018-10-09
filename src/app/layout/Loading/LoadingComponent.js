import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import styles from './LoadingComponent.css'
class LoadingComponent extends Component {
  
  render () {
    
    return (
      <div className = {styles.loadingContainer}>
        <ReactLoading className={styles.loading} type={'spin'} color={'#2397EE'} height={96} width={96} />
      </div>
    );
  }
}

export default LoadingComponent;
