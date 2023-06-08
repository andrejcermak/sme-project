import L from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from 'react-leaflet'
import markerIcon from './marker-icon-2x.png'
import 'leaflet/dist/leaflet.css';
import Locations from './Locations';

const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  function GetMarkers(locations){
    return locations.features
    .map(feature => 
    <Marker position={feature.geometry.coordinates.reverse()} icon={customIcon}>
        <Popup>
          {feature.properties.TITLE}
          {feature.properties.DESCRIPTION}
        </Popup>
      </Marker>)
}

export default function Map(){

    const brnoPosition = [ 49.2076, 16.607 ]
    console.log(brnoPosition)
    return (
        <div className='map-container'>
     <MapContainer center={brnoPosition} zoom={13} scrollWheelZoom={true} zoomControl={true}
     style={{ height: '100vh', width: '100wh' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {GetMarkers(Locations)}
  </MapContainer>
    </div>
    )
}