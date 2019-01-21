import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapStyles from './mapStyles.json'
import ReactFoursquare from 'react-foursquare'

var foursquare = ReactFoursquare({
    clientID: '',
    clientSecret: ''
});

var params = {
    "ll":"53.55, 10",
    "categoryId":"4bf58dd8d48988d181941735"
}

const style = {
    width: '500px',
    height: '500px'
}

class MyMap extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        items:[]
      }
  }

  componentDidMount() {
      foursquare.venues.getVenues(params) 
        .then(res => {
            console.log(res)
            this.setState({ items: res.response.venues });
        });
  }


  onMarkerClick = (props, marker) => 
        this.setState({
        activeMarker: marker,
        selectedPlace: props,
        showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {

    var image = {
        url: "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        scaledSize: new this.props.google.maps.Size(30, 24)
    }

    return (
        <div className="app">
            <div className="myList"
            style= {{width: "500px"}}
            >
            hey
            </div>
            <div className="myMap" id="myMap" style={{"height":"50%"}}>
                <Map
                className="map"
                google={this.props.google}
                onClick={this.onMapClicked}
                mapTypeControl = {false}
                styles = {style}
                zoom={15}
                initialCenter={{
                    lat:53.55,
                    lng:10
                }}
                >
                <Marker
                name="SOMA"
                onClick={this.onMarkerClick}
                position={{ lat: 37.778519, lng: -122.40564 }}
                />

                <Marker
                name="Dolores"
                onClick={this.onMarkerClick}
                position={{ lat: 37.759703, lng: -122.428093 }}
                />

                <Marker 
                name="Current location" 
                onClick={this.onMarkerClick}
                icon= {image}
                />
                <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.onInfoWindowClose}
                visible={this.state.showingInfoWindow}>
                <div>
                    <h5>{this.state.selectedPlace.name}</h5>
                </div>
                </InfoWindow>
                </Map>
            </div>
        </div>
      
    );
  }
}



MyMap.propTypes = {
    // allLocations: PropTypes.array.isRequired
}
export default GoogleApiWrapper({
    apiKey: '',
    libraries: ['places']
})(MyMap)