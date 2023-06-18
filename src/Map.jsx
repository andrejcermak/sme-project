import L from 'leaflet';
import { MapContainer, TileLayer, useMap, CircleMarker, Marker, Popup, GeoJSON } from 'react-leaflet'
import markerIcon from './marker-icon-2x.png'
import 'leaflet/dist/leaflet.css';
import data from './output.json';
import WaterQualityPopup from './Popup';

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

function GetMarkers(){
  return data.features
  .map(feature => 
  <CircleMarker radius={2} center={feature.geometry.coordinates.reverse()}>
      <WaterQualityPopup features={feature.properties}/>
    </CircleMarker>)
}

export default function Map(){

    const brnoPosition = [ 49.2076, 16.607 ]
    return (
        <div className='map-container'>
     <MapContainer  preferCanvas={false} center={brnoPosition} zoom={13} scrollWheelZoom={true} zoomControl={true}
     style={{ height: '100vh', width: '100wh' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {GetMarkers()}
  </MapContainer>
    </div>
    )
}