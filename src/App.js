import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkHandler from './components/links/LinkHandler/LinkHandler'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <LinkHandler></LinkHandler>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
