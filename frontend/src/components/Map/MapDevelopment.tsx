import { useEffect } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';
import PopupTemplate from '@arcgis/core/PopupTemplate';

import './styles/MapDevelopment.css'
import '@arcgis/core/assets/esri/themes/light/main.css';

export const MapDevelopment = () => {
  useEffect(() => {
    const myMap = new Map({
      basemap: 'streets',
    });

    // Define the feature layer's source with hardcoded data
    const graphics = [
      new Graphic({
        geometry: {
          type: 'point',
          longitude: -118.2437,
          latitude: 34.0522,
        },
        attributes: {
          population: 10000,
        },
      }),
      new Graphic({
        geometry: {
          type: 'point',
          longitude: -118.2537,
          latitude: 34.0622,
        },
        attributes: {
          population: 15000,
        },
      }),
    ];
    const popupTemplate = new PopupTemplate({
      title:'Population Information',
      content:'Population: {population}',
    });

    // Define the feature layer with the source, fields, renderer, and geometry type
    const featureLayer = new FeatureLayer({
      source: graphics,
      fields: [
        {
          name: 'population',
          alias: 'Population',
          type: 'integer',
        },
      ],
      objectIdField: 'ObjectID',
      renderer: {
        type: 'simple',
        symbol: {
          type: 'simple-marker',
          color: 'blue',
          size: '10px',
        },
      },
      geometryType: 'point',
      popupTemplate:popupTemplate
    });

    myMap.add(featureLayer);

    const view = new MapView({
      map: myMap,
      container: 'viewDiv',
      center: [-118.2437, 34.0522],
      zoom: 12,
    });
    // Enable popup on hover
    view.popup.autoOpenEnabled = true;
  }, []);

  return (
    <div className="map-container">
      <div id="viewDiv" className="view-div"></div>
    </div>
  );
};