import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { StyleSheet, css } from 'aphrodite';
class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidUpdate(){
  }

  render() {
    console.log('app', this.props)
    return(
      <div >
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default App;
