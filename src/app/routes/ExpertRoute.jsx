import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import ExpertTemplate from '../templates/ExpertTemplate';
import LandingPage from '../../Components/LandingPage/Landing/Landing';

const ExpertRoute = ({ isAuthenticated, role, path, noMatch, component: Component, ...rest}) => {
  if (isAuthenticated){
    if(noMatch) {
      return <Route path="*" render={() => (<div>NOT FOUND PAGE</div>)} />
    } else if(role === 'expert' && (path === '/dashboard' || path === '/experts' || path === '/expert/:id' )) {
      return <Route path={path} render={() => (<div>NO ACCESS TO PAGE</div>)} />
    } else if(role === 'member' && (path === '/managesignal' )) {
      return <Route path={path} render={() => (<div>NO ACCESS TO PAGE</div>)} />
    } else if(path === '/' ) {
      return <Route path={path} component={LandingPage} />
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
