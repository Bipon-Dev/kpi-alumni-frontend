import axios from "axios";


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
