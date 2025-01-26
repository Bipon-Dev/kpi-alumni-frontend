import axios from "axios";


const BASE_URL = "http://localhost:5050/api/event";
export const getEvents = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching Events:", error);
        throw error;
    }
};

export const getEventById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Event:", error);
        throw error;
    }
};
export const createEvent = async (event: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/add`, event);
        return response.data;
    } catch (error) {
        console.error("Error creating Event:", error);
        throw error;
    }
};

export const updateEvent = async (id: any, event: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/edit/${id}`, event);
        return response.data; // Assuming the response has a `data` field for job DTOs
    } catch (error) {
        console.error("Error updating Event:", error);
        throw error;
    }
};

export const deleteEvent = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data; // Success response
    } catch (error) {
        console.error("Error deleting job:", error);
        throw error;
    }
};




