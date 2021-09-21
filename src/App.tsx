import { Viewer } from 'cesium';
import './App.css';

function App() {

  const viewer = new Viewer('cesiumContainer', {});
  console.log(viewer);

  return (
    <div id='cesiumContainer' />
  );
}

export default App;
