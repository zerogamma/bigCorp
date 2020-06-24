  
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import route from './route'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      {route.map((route, index) => (
        <Route exact key={index} path={route.path}>
          {route.redirect ? (
            <Redirect to={route.redirect} />
          ) : (
            <Route component={route.component} />
          )}
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
)

export default Routes