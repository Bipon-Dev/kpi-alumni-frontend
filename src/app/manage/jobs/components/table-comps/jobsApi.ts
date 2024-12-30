import axios from "axios";
import { SearchCriteria } from "./Search";


const BASE_URL = "http://localhost:5050/api/v1/job"; 

export const getJobs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.data; // Assuming the response has a `data` field for job DTOs
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const deleteJob = async (id: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data; // Success response
    } catch (error) {
      console.error("Error deleting job:", error);
      throw error;
    }
  };

  export const searchJobs = async (criteria: SearchCriteria) => {
    const params = new URLSearchParams(criteria as any).toString();
    const response = await axios.get(`http://localhost:5050/api/v1/job/search?${params}`);
    return response.data.data; // Adjust based on your API response structure
  };

  //Create a method to call the Invite API
  export const sendInvitation = async (jobId: number, email: string) => {
    const response = await axios.post(`http://localhost:5050/api/v1/job/invite/${jobId}`, email, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.data;
    //console.log("job: ", response.data);
  };


  
