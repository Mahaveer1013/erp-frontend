import axios from 'axios'

const Axios = async (url, method) => {
    if (!url || !method) {
        return null
    }
    try {
        const response = await axios[method](url, { credentials: true });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default Axios