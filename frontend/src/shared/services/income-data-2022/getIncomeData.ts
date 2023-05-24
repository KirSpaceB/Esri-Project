interface JobPerCounty {
  county: string,
  jobs: string,
};

export type getJobsAPIReturnData = JobPerCounty[];


export const getJobsData = async() => {
  const url = `https://data.bayareametro.gov/resource/rmxw-ix3y.json`;
  const response = await fetch(url, {
    method:"GET",
  });
  const jsonData: getJobsAPIReturnData = await response.json();
  let jobsPerCountyArray: getJobsAPIReturnData = [];

  for(let i = 0; i < jsonData.length; i++) {
    const jobPerCounty: JobPerCounty = {
      county: jsonData[i].county,
      jobs: jsonData[i].jobs
    };
    jobsPerCountyArray.push(jobPerCounty);
  };
  return jobsPerCountyArray;
}