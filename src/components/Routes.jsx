import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import {Results} from './Results';
export default function Routes() {
    return (
        <div>
<div className="p-4">
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>

    </Switch>
  </div>
        </div>
    )
}
