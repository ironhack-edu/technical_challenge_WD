import axios from 'axios'

class PhonesService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })
    }

    getPhones() {
        return this.api.get('/phones')
    }

    getOnePhone(_id) {
        return this.api.get(`/phones/${_id}`)
    }


}

const phonesService = new PhonesService()

export default phonesService