
import L from "leaflet";

import "leaflet-routing-machine";
import { MapLayer, withLeaflet } from "react-leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [25, 41],
  shadowAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;
L.Icon.Default.imagePath = "/";

class Routing extends MapLayer {

  createLeafletElement() {
    const { map, routes, ntrucks,summary,routesDisplay } = this.props;
    if(routesDisplay && summary && summary.homeDepLat && summary.homeDepLon){
      for (let i = 1; i < ntrucks + 1; i++) {
        var waypoints = []
        for (let j = 0; j < routes.length; j++) {
          var truck = routes[j]['vehicle_id']
          if (truck === i && routesDisplay[truck]) {
            waypoints.push(L.latLng(routes[j]['lat'], routes[j]['lon']))
          }
        }
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var k = 0; k < 6; k++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        if(waypoints.length > 0){
          waypoints.reverse();
          waypoints.push(L.latLng(summary.homeDepLat, summary.homeDepLon))
          waypoints.reverse();
        }
        let leafletElem = L.Routing.control({
          waypoints: waypoints,
          lineOptions: {
            styles: [
              {
                color: color,
                opacity: 1,
                weight: 8
              }
            ]
          },
          addWaypoints: false,
          draggableWaypoints: false,
          fitSelectedRoutes: false,
          showAlternatives: false
        }).addTo(map.leafletElement);
        if (i === ntrucks) {
          return leafletElem.getPlan();
        }
      }
    }
    
  }



}
export default withLeaflet(Routing);
