import axios from 'axios'

class PhoneService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })
    }


    phones() {
        return this.api.get('/phones')
    }

    getOnePhone(id) {
        return this.api.get(`/phones/${id}`)
    }

}

const phonesService = new PhoneService()

export default phonesService