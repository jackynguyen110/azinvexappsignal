import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PagesTemplate from '../templates/PagesTemplate';

const PageRoute = ({ isAuthenticated,component: Component, ...rest}) => {
  if (isAuthenticated){
    return <Redirect to="/" />;
  }
  return (
    <Route {...rest} render={matchProps => (
        <PagesTemplate>
            <Component {...matchProps} />
        </PagesTemplate>
      )} />
  )
}

export default PageRoute
