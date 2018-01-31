import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux' //allows react component to call action creator
import * as actions from '../actions'
//app will show all components
import '@blueprintjs/core/dist/blueprint.css'

import Navbar from './Navbar'
import Landing from './Landing'
import Footer from './Footer'


class  App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div >
            <Navbar/>
            <Route exact path="/" component={Landing}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

//this is imported by main index.js

export default connect(null, actions)(App)
