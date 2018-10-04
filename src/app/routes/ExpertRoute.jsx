import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import ExpertTemplate from '../templates/ExpertTemplate';

const ExpertRoute = ({ isAuthenticated, role, path, noMatch, component: Component, ...rest}) => {
  if (isAuthenticated){
    if(noMatch) {
      return <Route path="*" render={() => (<div>NOT FOUND PAGE</div>)} />
    } else if(role === 'expert' && (path === '/' || path === '/experts' || path === '/expert/:id' )) {
      return <Route path={path} render={() => (<div>NO ACCESS TO PAGE</div>)} />
    } else if(role === 'member' && (path === '/managesignal' )) {
      return <Route path={path} render={() => (<div>NO ACCESS TO PAGE</div>)} />
    }
    return (
      <Route {...rest} path={path} render={matchProps => (
        <ExpertTemplate>
          <Component {...matchProps} />
        </ExpertTemplate>
      )} />
    )
  }

  return <Redirect to="/login" />;
}

export default ExpertRoute
