import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import ExpertTemplate from '../templates/ExpertTemplate';

const ExpertRoute = ({ isAuthenticated ,component: Component, ...rest}) => {
  console.log(isAuthenticated)
  if (isAuthenticated){
    return (
      <Route {...rest} render={matchProps => (
        <ExpertTemplate>
          <Component {...matchProps} />
        </ExpertTemplate>
      )} />
    )
  }

  return <Redirect to="/login" />;
}

export default ExpertRoute
