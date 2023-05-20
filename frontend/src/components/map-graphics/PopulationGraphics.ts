import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";

export const PopulationGrapic = (): Graphic[] => {
  return [
    new Graphic({
      geometry: new Point({
        longitude:-118,
        latitude:34,
      }),
      attributes: {
        population: 10000,
      },
    }),
  ]
}