import { useEffect, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import '@arcgis/core/assets/esri/themes/light/main.css';

export const MapDevelopment = () => {
  const mapDivRef = useRef(null);

  useEffect(() => {
    if (!mapDivRef.current) return;

    const myMap = new Map({
      basemap: 'streets-vector',
    });

    const view = new MapView({
      map: myMap,
      container: mapDivRef.current,
    });

    // Clean up the view when the component is unmounted
    return () => {
      if (view) {
        view.container = null;
      }
    };
  }, []);

  return (
    <div>
      <div id="viewDiv" ref={mapDivRef} style={{ width: '100%', height: '500px' }}></div>
      MapDevelopment
    </div>
  );
};
