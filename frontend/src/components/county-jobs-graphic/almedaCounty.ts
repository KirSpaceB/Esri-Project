import { getJobsData } from "../../shared/services/income-data-2022/getJobsData";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";

export const almedaCountyGraphic = async (): Promise<Graphic[]> => {
  const graphics:Graphic[] = [];
  const apiData = await getJobsData();
  apiData.forEach(obj => {
    if(obj.county === "Alameda County") {
      console.log(obj.jobs);
      
      const ALMEDA_COUNTY_LATITUDE = Math.random() * (36.890099 - 36.790099) + 36.790099;
      const ALMEDA_COUNTY_LOGITUDE = Math.random() * (-121.583234 - (-121.483234)) + (-121.583234);
      console.log("Latitude", ALMEDA_COUNTY_LATITUDE, "longitude", ALMEDA_COUNTY_LOGITUDE);
      
      graphics.push(
        new Graphic({
          geometry: new Point({
            longitude:ALMEDA_COUNTY_LOGITUDE,
            latitude: ALMEDA_COUNTY_LATITUDE
          }),
          attributes: {
            "Alameda County Jobs": parseInt(obj.jobs),
          },
        }),
      )
    }
  });
  console.log(graphics);
  
  return graphics;
}