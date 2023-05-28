import Graphic from "@arcgis/core/Graphic";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

export const JobsFeatureLayer = (graphics:Graphic[]) => {
  const popupTemplate = new PopupTemplate({
    title:"Jobs",
    content:"Content: {jobs}",
  });

  const symbol = new SimpleMarkerSymbol({
    color:"red",
    size:"10px",
  });

  const renderer = new SimpleRenderer({
    symbol:symbol,
  });

  return new FeatureLayer({
    source:graphics,
    fields: [
      {
        name:"Alameda County Jobs",
        alias:"Alameda County Jobs",
        type:"integer",
      },
    ],
    objectIdField: "ObjectID",
    renderer:renderer,
    geometryType:"point",
    popupTemplate:popupTemplate
  });
};