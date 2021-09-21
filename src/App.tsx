import { Viewer } from 'cesium';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    window.CESIUM_BASE_URL = ''
    const viewer = new Viewer('cesiumContainer', {});
    console.log(viewer);
  }, [])

  return (
    <div id='cesiumContainer' />
  );
}

export default App;
