import { useEffect } from "react"
import { almedaCountyGraphic } from "../county-jobs-graphic/almedaCounty"


const ToggleJobsData = () => {
  useEffect(() => {
    almedaCountyGraphic();
  });

  return (
    <div>
      <button>View Jobs Data</button>
    </div>
  )
}

export default ToggleJobsData