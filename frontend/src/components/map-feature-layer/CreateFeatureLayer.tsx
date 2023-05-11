import PopupTemplate from "@arcgis/core/PopupTemplate";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const CreateFeatureLayer = (graphics) => {
  const popupTemplate = new PopupTemplate({
    title: 'Population Information',
    content: 'Population: {population}',
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
    renderer: {
      type: 'simple',
      symbol: {
        type: 'simple-marker',
        color: 'blue',
        size: '10px',
      },
    },
    geometryType: 'point',
    popupTemplate: popupTemplate,
  });
}
