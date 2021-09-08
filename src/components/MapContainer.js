import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '100%',
  height: '300px',
};

const mapOptions = {
  fullscreenControl: false,
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: true, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        options={mapOptions}
        style={mapStyles}
        initialCenter={{
          lat: 47.6848,
          lng: 16.5831,
        }}
        disableDefaultUI={true}
      >
        <Marker
          title={'Bem u. 3, Sopron, 9400'}
          name={'Székhely'}
          position={{ lat: 47.68407973440746, lng: 16.596867804288838 }}
          icon={{
            url: '/images/Marker.png',
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:
    'https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyCo6ZA_DMh3ni2yuUsG5t4ZlyZwXb1SA58',
})(MapContainer);
