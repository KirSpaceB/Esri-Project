import { getJobsData } from "../../shared/services/income-data-2022/getJobsData";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";

export const almedaCountyGraphic = async (): Promise<Graphic[]> => {
  const graphics:Graphic[] = [];
  const apiData = await getJobsData();
  apiData.forEach(obj => {
    if(obj.county === "Alameda County") {
      console.log(obj.jobs);
      
      const ALMEDA_COUNTY_LATITUDE = Math.random() * (45 - 40) + 40;
      const ALMEDA_COUNTY_LOGITUDE = Math.random() * (-73 - (-70)) + (-70);
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