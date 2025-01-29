import axios from "axios";

const BASE_URL = "http://localhost:5050";

export const getMember = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/UserProfile`);
    // const response = await axios.get(`${BASE_URL}/v1/member`);
    return response;
  } catch (error) {
    console.error(`Error fetching member with id :`, error);
    throw error;
  }
};

export const addMember = async (addMemberData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/v1/member`, addMemberData);
    return response.data;
  } catch (error) {
    console.error("Error adding new member:", error);
    throw error;
  }
};
export const updateMember = async (
  payload: {
    name: string;
    email: string;
    shift: string;
    department: string;
    session: string;
  },
  id: string
) => {
  try {
    const response = await axios.put(`${BASE_URL}/v1/member/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error(`Error updating member with id ${id}:`, error);
    throw error;
  }
};
