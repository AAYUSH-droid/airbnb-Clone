import ReactMapGL from 'react-map-gl'
import  { useState } from "react";
import getCenter from "geolib/es/getCenter"

function Map( {searchResults }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: -122.4376,
    latitude: 37.7577,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/aayushsharma/ckzwj8ops000c16s0n77087lj"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
     
      onViewportChange={ (nextviewport) => setViewport(nextviewport) }
    ></ReactMapGL>
  );
}

export default Map;
