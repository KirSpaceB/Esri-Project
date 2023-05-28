import Graphic from "@arcgis/core/Graphic";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

export const PopulationFeatureLayer = (graphics:Graphic[]) => {
  const popupTemplate = new PopupTemplate({
    title: 'Population Information',
    content: 'Population: {population}',
  });

  const symbol = new SimpleMarkerSymbol({
    color: 'blue',
    size: '10px',
  });

  const renderer = new SimpleRenderer({
    symbol: symbol,
  });

  return new FeatureLayer({
    source: graphics,
    fields: [
      {
        name: 'population',
        alias: 'Population',
        type: 'integer',
      },
    ],
    objectIdField: 'ObjectID',
    renderer: renderer,
    geometryType: 'point',
    popupTemplate: popupTemplate,
  });
}
