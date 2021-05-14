import MapView from './components/MapView';
import Layout from './layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <h1>Leaflet MAP</h1>
      <div className="leaflet-container">
        <MapView />
      </div>
    </Layout>
  );
}

export default App;
