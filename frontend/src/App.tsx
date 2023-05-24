import { useEffect } from "react";
import { MapDevelopment } from "./components/map/MapDevelopment";
import { getIncomeData } from "./shared/services/income-data-2022/getIncomeData";
const App = () => {
  useEffect(() => {
    getIncomeData();
  })

  return (
    <>
      <div>
        <MapDevelopment/>
      </div>
    </>
  )
}

export default App
