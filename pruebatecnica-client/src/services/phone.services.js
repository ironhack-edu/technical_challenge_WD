import axios from 'axios';

class PhoneService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/phone`,
        })
    }

    getPhones = () => this.api.get('/');

    getPhoneById = (id) => this.api.get(`/${id}`);

}

const phoneService = new PhoneService();

export default phoneService;