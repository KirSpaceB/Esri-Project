import Graphic from '@arcgis/core/Graphic';

export const CreateGraphics = () => {
  return [
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
};
