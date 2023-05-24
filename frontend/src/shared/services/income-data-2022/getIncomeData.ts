export const getIncomeData = async() => {
  const url = `https://data.ca.gov/api/3/action/datastore_search?resource_id=49eb1f40-d50a-4dde-98ca-0450d69c4617&limit=5`;
  const response = await fetch(url, {
    method:"GET",
  });
  const jsonData = await response.json();
  console.log(jsonData);
  
}