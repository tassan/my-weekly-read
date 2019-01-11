import React, { Component } from 'react';
import './App.css';
import LinkHandler from './components/links/LinkHandler/LinkHandler';
import LastRead from './components/reading-list/LastRead/LastRead';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>What are you gonna read today?</h1>
              <p>I bet you have a bunch of links to saved that you didn't read, uh? Let's change that NOW!</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <LinkHandler></LinkHandler>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <LastRead></LastRead>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
