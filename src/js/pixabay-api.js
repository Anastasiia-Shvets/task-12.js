import axios from 'axios';

export async function searchGallery(query, currentPage) {
    const API_KEY = '42280765-41e7252ac679e023dc9db9847';
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const url = `${BASE_URL}${END_POINT}`;

    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 15,
    };

    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios request:', error);
        throw error;
    }
}
