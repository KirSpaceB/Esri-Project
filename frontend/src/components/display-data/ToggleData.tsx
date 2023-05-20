import { CreateGraphics } from "../map-graphics/CreateGraphics";
import { CreateFeatureLayer } from "../map-feature-layer/CreateFeatureLayer";
import { MapContext } from "../../shared/map-context/MapContext";
import { useContext } from "react";

export const ToggleData = () => {
  const {map} = useContext(MapContext);
  const displayPopHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const graphics = CreateGraphics();
    const featureLayer = CreateFeatureLayer(graphics);
    if(map) {
      map.add(featureLayer)
    }
  }
  return (
    <div>
      <button onClick={(e) => displayPopHandler(e)}>Display Population</button>
    </div>
  )
}
