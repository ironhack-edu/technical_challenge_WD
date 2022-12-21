import axios from 'axios'

class PhoneService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })
    }

    getPhones = () => this.api.get('/')
    getPhoneDetails = (phone_id) => this.api.get(`/${phone_id}`)


}

const phoneService = new PhoneService()

export default phoneService