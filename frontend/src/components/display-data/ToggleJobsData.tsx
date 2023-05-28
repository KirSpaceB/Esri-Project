import { useState,useContext, useEffect } from "react"
import { almedaCountyGraphic } from "../county-jobs-graphic/almedaCounty"
import { JobsFeatureLayer } from "../map-feature-layer/JobsFeatureLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { MapContext } from "../../shared/map-context/MapContext";

export const ToggleJobsData = () => {
  const [displayJobs, setDisplayJobs] = useState<FeatureLayer>();
  const { map } = useContext(MapContext) ?? {};

  useEffect(() => {
    const createDisplayJobsDataState = async () => {
      if (map) {
        const graphics = await almedaCountyGraphic();
        const createJobsFeatureLayer = JobsFeatureLayer(graphics);
        setDisplayJobs(createJobsFeatureLayer);
        map.add(createJobsFeatureLayer);
      }
    }

    createDisplayJobsDataState();
  }, [map]);

  return (
    <div>
      <div>test</div>
    </div>
  );
};