const employerData = './scripts/data/employerQuestion.json';
const employeesData = './scripts/data/employeesQuestion.json';
const jobsData = './scripts/data/jobs.json';

async function fetchEmployers() {
  try {
    const response = await fetch(employerData);
    const dataArray = await response.json();
    return dataArray.employerQuestion;
  } catch (error) {
    console.error(error);
  }
}

async function fetchEmployees() {
  try {
    const response = await fetch(employeesData);
    const dataArray = await response.json();
    return dataArray.employeesQuestion;
  } catch (error) {
    console.error(error);
  }
}
async function fetchJobs() {
  try {
    const response = await fetch(jobsData);
    const dataArray = await response.json();
    return dataArray.jobs;
  } catch (error) {
    console.error(error);
  }
}

export { fetchEmployers, fetchEmployees, fetchJobs };
