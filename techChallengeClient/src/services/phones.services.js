import axios from "axios";

class PhonesServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })
    }

    getAll() {
        return this.api.get('/phones')
    }

    // getOne(phone_id) {
    //     return this.api.get(`/${phone_id}`, phone_id)
    // }

}

const phonesServices = new PhonesServices()
export default phonesServices