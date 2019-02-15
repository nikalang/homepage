import React, {Component} from 'react';

import Menu from './Menu';
import Body from './Body';

import './App.css';

export default class App extends Component {

  componentDidMount = () => {
    document.title = '【까니】';
  }
  
  render() {
    return (
      <div className="App">
        <Menu />
        <Body />
      </div>
      );
  }
}
