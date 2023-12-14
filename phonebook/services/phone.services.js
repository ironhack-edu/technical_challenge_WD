import axios from "axios";

class PhoneServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })
    }

    getAllModels() {
        return this.api.get('/')
    }

    getDetails(id) {
        return this.api.get(`/${id}`)
    }
}

const phoneServices = new PhoneServices()
export default phoneServices