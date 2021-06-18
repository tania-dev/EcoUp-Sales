import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Routing from "./RoutingMachine";
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import L from 'leaflet';
import marker from '../images/location.svg';
const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconAnchor: [15, 55],
  iconSize: [32, 65],
});

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 60.596,
      lng: 24.557,
      zoom: 8,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const { routes, ntrucks, points, summary, routesDisplay } = this.props;
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <Map center={position} zoom={zoom} ref={this.saveMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          routesDisplay && routes && routes.length > 0 ?
            <React.Fragment>
              {
                summary && summary.homeDepLat && summary.homeDepLon &&
                <Marker className="head-q" icon={myIcon} position={[summary.homeDepLat, summary.homeDepLon]}>
                  <Popup>
                    Sibeliuksentie 21, 04200 Kerava, Finland
          </Popup>
                </Marker>
              }
              {points && points.length > 0 &&
                points.map((point,key) => (
                  <Marker key={key} position={[point.lat, point.lon]}>
                    <Popup>
                      {point.work_location_address}<br/>
                      ZIP : {point.zip}<br/>
                      Quantity : {point.qty}<br/>
                      Distance : {point.travel_km}KM <br/>
                      Travel Min : {point.travel_min} <br/>
                    </Popup>
                  </Marker>
                ))
              }
            </React.Fragment>
            :
            <MarkerClusterGroup>
              {
                summary && summary.homeDepLat && summary.homeDepLon &&
                <Marker className="head-q" icon={myIcon} position={[summary.homeDepLat, summary.homeDepLon]}>
                  <Popup>
                    Sibeliuksentie 21, 04200 Kerava, Finland
          </Popup>
                </Marker>
              }
              {points && points.length > 0 &&
                points.map((point,key) => (
                  <Marker key={key} position={[point.lat, point.lon]}>
                    <Popup>
                      {point.work_location_address}
                    </Popup>
                  </Marker>
                ))
              }
            </MarkerClusterGroup>
        }
        {this.state.isMapInit && routesDisplay && routes && routes.length > 0 && summary && summary.homeDepLat && summary.homeDepLon &&
          <Routing routesDisplay={routesDisplay} summary={summary} ntrucks={ntrucks} routes={routes} map={this.map} />}
      </Map>
    );
  }
}

export default MapComponent;
