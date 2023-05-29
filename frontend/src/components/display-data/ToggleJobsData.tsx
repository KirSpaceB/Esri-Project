import { useState,useContext } from "react"
import { almedaCountyGraphic } from "../county-jobs-graphic/almedaCounty"
import { JobsFeatureLayer } from "../map-feature-layer/JobsFeatureLayer";
import { MapContext } from "../../shared/map-context/MapContext";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const ToggleJobsData = () => {
  const { map } = useContext(MapContext) ?? {};

  const [isDisplayed, setIsDisplayed] = useState(false);
  const [featureLayer, setFeatureLayer] = useState<FeatureLayer>();

  const displayJobsHandler = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(!isDisplayed) {
      const graphics = await almedaCountyGraphic();
      const createJobsFeatureLayer = JobsFeatureLayer(graphics);
      setFeatureLayer(createJobsFeatureLayer);
      if(map) {
        map.add(createJobsFeatureLayer)
      };
      setIsDisplayed(true)
    } else {
      if(map && featureLayer) {
        map.remove(featureLayer);
      };
      setIsDisplayed(false)
    };
  };

  return (
    <div>
      <button onClick={(e) => displayJobsHandler(e)}>Display Jobs</button>
    </div>
  );
};