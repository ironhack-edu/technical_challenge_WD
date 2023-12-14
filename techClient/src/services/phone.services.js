import axios from 'axios'
class PhoneService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })
    }

    getPhoneList() {
        return this.api.get('/allPhones')
    }

    getPhoneDetails({ id }) {
        return this.api.get(`/details/${id}`)
    }
}

const phoneService = new PhoneService()

export default phoneService