import axios from 'axios'

class PhoneService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })
    }

    getPhones() {
        return this.api.get('/getAllPhones')
    }

    getOnePhone(phone_id) {
        return this.api.get(`/getOnePhone/${phone_id}`)
    }

}

const phonesService = new PhoneService()

export default phonesService