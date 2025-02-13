export const fetchApi = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(url, options);
    return response.json();
}

export const API_URL = "http://localhost:3000/api";

