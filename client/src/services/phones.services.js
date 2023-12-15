
import axios from "axios"

class PhonesServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/phones`
        })
    }

    getAllPhones() {
        return this.api.get('/')
    }
    getOnePhone(id) {
        return this.api.get(`/${id}`)
    }

}

const phonesServices = new PhonesServices

export default phonesServices