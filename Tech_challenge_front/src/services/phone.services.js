import axios from "axios"

class PhoneService {
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:5005/api"
        })
    }

    listAll() {
        return this.api.get("/")
    }
}

const phoneService = new PhoneService()
export default phoneService