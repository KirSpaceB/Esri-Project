import { useEffect, useState } from "react";
import { getJobsData } from "../../shared/services/income-data-2022/getIncomeData";
import { getJobsAPIReturnData } from "../../shared/services/income-data-2022/getIncomeData";

const ToggleJobsData = () => {
  const [countyJobsData, setCountyJobsData] = useState<getJobsAPIReturnData>()
  useEffect(() => {
    getJobsData().then(data => {
      setCountyJobsData(data)
    });
  },[]);
  console.log(countyJobsData)
  return (
    <div>
      <button>View Jobs Data</button>
    </div>
  )
}

export default ToggleJobsData