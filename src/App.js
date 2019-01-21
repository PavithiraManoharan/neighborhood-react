import React, { Component } from 'react';
import './App.css';
import MyMap from './MyMap';
// import * as LocationsAPI from './LocationsAPI';

class App extends Component {
  state= {
    allLocations: []
  }

  componentDidMount() {
    // LocationsAPI.getAll().then((allLocations) => {
    //   this.setState({allLocations: allLocations})
    // })
  }

  render() {
    return (
       <MyMap
          // allLocations = { this.state.allLocations }
       />   
    )
  }
}

export default App
