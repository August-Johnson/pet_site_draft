import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../Marker";

const GoogleMap = () => <div></div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 44.883976,
            lng: -93.256931
        },
        zoom: 17
    };

    render() {
        return (
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <GoogleMap
                        lat={44.883976}
                        lng={-93.256931}
                    />
                    <Marker
                        lat={44.883976}
                        lng={-93.256931}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;