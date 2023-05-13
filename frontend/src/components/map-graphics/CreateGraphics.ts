import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';

export const CreateGraphics = (): Graphic[] => {
  return [
    new Graphic({
      geometry: new Point({
        longitude: -118.2437,
        latitude: 34.0522,
      }),
      attributes: {
        population: 10000,
      },
    }),
    new Graphic({
      geometry: new Point({
        longitude: -118.2537,
        latitude: 34.0622,
      }),
      attributes: {
        population: 15000,
      },
    }),
  ];
};