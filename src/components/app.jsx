/*eslint-disable*/

import React, { Component } from 'react';
import { render } from 'react-dom'; 

class App extends Component { 
  constructor() { 
    super(); 
    this.state = {};
  }

  render() {
    return ( 
      <Board />
    )
  }
}

class Board extends Component { 
  render () { 
    return ( 
      <div> Hello </div>
    )
  }
}