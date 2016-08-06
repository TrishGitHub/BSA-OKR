import "babel-polyfill"
import React from "react"
import { render } from "react-dom"

import App from "./containers/app"
import LoginPage from "./components/login-page.js"

import ObjectiveView from "./containers/ObjectiveView/ObjectiveView"
import ObjectiveDetails from "./components/objectiveDetails/objectiveDetails.js"

import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LoginPage} />
        </Route>

        <Route path="/objective" component={ObjectiveView}>
          <IndexRoute component={ObjectiveDetails} />
        </Route>
    </Router>)
    , document.getElementById('root')
)
