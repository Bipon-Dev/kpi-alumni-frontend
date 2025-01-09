import axios from "axios";

const BASE_URL = "http://localhost:5050/api/v1";

export const getMember = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/member`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching member with id :`, error);
    throw error;
  }
};
export const addMember = async (addMemberData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/member`, addMemberData);
    return response.data;
  } catch (error) {
    console.error("Error adding new member:", error);
    throw error;
  }
};
