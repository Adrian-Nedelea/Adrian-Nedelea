import React, { Component } from 'react';
import {GoogleApiWrapper,Map, InfoWindow,Marker} from 'google-maps-react'




class SimpleMap extends Component {

    state={
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

        mapCenter:{
            lat: 45.7494,
            lng:21.2272
            
        }
        };

  render() {

    const mapStyles = {
        marginTop:'15px',
        marginLeft:'auto',
        marginRight:'auto',
        maxWidth: "80%",
        height: "70vh",
      };
    return (
      // Important! Always set the container height explicitly
      <div  >
            <Map style={mapStyles}
             google={this.props.google}
            
            initialCenter=
            {{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            >
                <Marker 
                    position={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                />
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey:('AIzaSyBXSVgMVgA6jUX2KmCvIbYp9qVIMfVSwnI')
})(SimpleMap)