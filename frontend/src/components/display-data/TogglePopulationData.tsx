import { CreateGraphics } from "../map-graphics/CreateGraphics";
import { PopulationFeatureLayer } from "../map-feature-layer/PopulationFeatureLayer";
import { MapContext } from "../../shared/map-context/MapContext";
import { useContext, useState } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const ToggleDataPopulationData = () => {
  const { map } = useContext(MapContext) ?? {};
  
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [featureLayer, setFeatureLayer] = useState<FeatureLayer>();

  const displayPopHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    if(!isDisplayed) {
      const graphics = CreateGraphics();
      const createdFeatureLayer = PopulationFeatureLayer(graphics);
      setFeatureLayer(createdFeatureLayer);
      
      if(map) {
        map.add(createdFeatureLayer);
      }
      setIsDisplayed(true);
    } else {
      if(map && featureLayer) {
        map.remove(featureLayer);
      }
      setIsDisplayed(false);
    }
  }
  
  return (
    <div>
      <button onClick={(e) => displayPopHandler(e)}>Display Population</button>
    </div>
  )
}
