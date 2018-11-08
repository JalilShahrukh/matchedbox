/*eslint-disable*/

import React, { Component } from 'react';
import { render } from 'react-dom'; 

class App extends Component { 
  constructor() { 
    super(); 
    this.state = {};
  }

  render () {
    return ( 
      <div> App </div>
    )
  }
}

class Row extends Component { 
  render () { 
    return ( 
      <div> Row </div>
    )
  }
}

class Box extends Component { 
  render () { 
    return ( 
      <div> Box </div>
    )
  }
}

export default App;