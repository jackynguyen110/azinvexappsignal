import React from 'react'
import { Route } from 'react-router-dom'
import ExpertTemplate from '../templates/ExpertTemplate';
import PagesTemplate from '../templates/PagesTemplate';

const PageRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
        <PagesTemplate>
            <Component {...matchProps} />
        </PagesTemplate>
      )} />
  )
}

export default PageRoute
