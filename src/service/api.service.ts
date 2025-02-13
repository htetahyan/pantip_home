import { API_URL, fetchApi } from "./api.config";

export const getHightLights = async () => {
    const response = await fetchApi(`${API_URL}/home/hightlight`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },

    });
    if(!response) return {};
    return {data:response?.data};
}
