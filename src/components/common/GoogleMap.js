import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { mapStyles } from './styles/GoogleMapStyles.json'

export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 59.9212761, lng: 10.7614716},
            {latitude:59.922902, longitude: 10.759477},
            {latitude: 59.920802, longitude: 10.762929}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("NY YORK VINTAGE")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 59.921, lng: 10.761}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB-_NUeSCTv7QkKTINZcxv09diW288VGCI'
  })(MapContainer);