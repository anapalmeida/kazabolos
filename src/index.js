import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import App from './App'

ReactDOM.render(
<BrowserRouter>
  <Route path="/" exact={true} component={App} />
</BrowserRouter>,
  document.getElementById('root')
)
