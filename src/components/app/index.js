import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import About from '../about'
import Footer from '../footer'
import Landing from '../landing'
import TopNav from '../top-nav'

import './app.css'

export default () => {
  return (
    <BrowserRouter>
      <TopNav />
      <div id="wrapper">
      <div className="container">
          <div>
              <Switch>
                  <Route exact path="/" component={ Landing } />
                  <Route exact path="/about" component={ About } />
              </Switch>
          </div>
      </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
