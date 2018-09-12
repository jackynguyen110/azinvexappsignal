import React from 'react'
import { Route } from 'react-router-dom'
import ExpertTemplate from '../templates/ExpertTemplate';

const ExpertRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
        <ExpertTemplate>
            <Component {...matchProps} />
        </ExpertTemplate>
      )} />
  )
}

export default ExpertRoute
