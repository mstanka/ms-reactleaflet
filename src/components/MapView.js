import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { dataMarkers } from '../data';
import styles from './MapView.module.css';

const MapView = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={11} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataMarkers.map((data, i) => (
        <Marker key={i} position={data.position}>
          <Popup>
            <div className={styles.popup}>
              <img src={data.image} alt="London" />
              <br />
              This is my custom popup.
              <br />
              And I can put here a nice description.
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
