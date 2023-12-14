import axios from 'axios'

class PhoneServices {
    constructor() {
        this.api = axios.create(
            {
                baseURL: `${import.meta.env.VITE_APP_API_URL}/phones`
            }
        )
    }

    getPhones() {
        return this.api.get('/')
    }

    getPhoneById(id) {
        return this.api.get(`/${id}`)
    }
}

const phoneServices = new PhoneServices
export default phoneServices