import { useEffect } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import {CreateGraphics} from '../map-graphics/CreateGraphics';
import { CreateFeatureLayer } from '../map-feature-layer/CreateFeatureLayer';

import './styles/MapDevelopment.css'
import '@arcgis/core/assets/esri/themes/light/main.css';

export const MapDevelopment = () => {
  useEffect(() => {
    const myMap = new Map({
      basemap: 'streets',
    });

    const graphics = CreateGraphics();
    const featureLayer = CreateFeatureLayer(graphics);

    myMap.add(featureLayer);

    const view = new MapView({
      map: myMap,
      container: 'viewDiv',
      center: [-118.2437, 34.0522],
      zoom: 12,
    });

    view.popup.autoOpenEnabled = true;
  }, []);

  return (
    <div className="map-container">
      <div id="viewDiv" className="view-div"></div>
    </div>
  );
};